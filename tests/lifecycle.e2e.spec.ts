import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, childUrl, events, fixture, crossOriginFixture } from './support.ts'

test.describe('lifecycle', () => {
  test.beforeEach(async ({ page }) => { await openParent(page) })

  test('should navigate the child when the src attribute changes', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('child.html') + '?v=1' })
    await initializedChild(page)
    await frame.evaluate((el, src) => el.setAttribute('src', src), fixture('child.html') + '?v=2')
    await expect.poll(() => childUrl(page).then(u => new URL(u).search)).toBe('?v=2')
  })

  test('should navigate a vue-router child with its router when the src attribute changes', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('router-child/') + '?v=1' })
    const child = await initializedChild(page)
    const loadMarker = await child.evaluate(() => (window as any).loadMarker)
    await frame.evaluate((el, src) => el.setAttribute('src', src), fixture('router-child/') + '?v=2')
    await expect.poll(() => child.evaluate(() => (window as any).router.currentRoute.value.fullPath)).toBe('/?v=2')
    expect(await child.evaluate(() => (window as any).loadMarker)).toBe(loadMarker)
  })

  test('should navigate to another application when the src attribute changes', async ({ page }) => {
    // the vue-router child cannot handle a src outside of its base, it falls back to a full navigation
    const frame = await mountFrame(page, { src: fixture('router-child/') })
    await initializedChild(page)
    await frame.evaluate((el, src) => el.setAttribute('src', src), fixture('child.html'))
    await expect.poll(() => childUrl(page).then(u => new URL(u).pathname)).toBe(fixture('child.html'))
  })

  test('should change the iframe src when src changes before the child is initialized', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('plain.html') + '?v=1' })
    await frame.evaluate((el, src) => el.setAttribute('src', src), fixture('plain.html') + '?v=2')
    await expect(page.locator('d-frame iframe')).toHaveAttribute('src', /plain\.html\?v=2$/)
  })

  test('should reload the child when the reload attribute changes', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('child.html') })
    const child = await initializedChild(page)
    await child.evaluate(() => { (window as any).marker = 1 })
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(1)
    await frame.evaluate(el => el.setAttribute('reload', '1'))
    const reloaded = await initializedChild(page)
    await expect.poll(() => reloaded.evaluate(() => (window as any).marker)).toBeUndefined()
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(2)
    expect(new URL(reloaded.url()).pathname).toBe(fixture('child.html'))
  })

  test('should reload a child that navigated, at its current state', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('child.html'), 'sync-params': '' })
    const child = await initializedChild(page)
    await child.evaluate(() => { history.replaceState(null, '', '?page=3') })
    await expect.poll(() => new URL(page.url()).search).toBe('?page=3')
    await frame.evaluate(el => el.setAttribute('reload', '1'))
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(2)
    expect(new URL(await childUrl(page)).search).toBe('?page=3')
  })

  test('should reload a cross-origin child when the reload attribute changes', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))
    const frame = await mountFrame(page, { src: crossOriginFixture(page, 'child.html') })
    await initializedChild(page)
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(1)
    await frame.evaluate(el => el.setAttribute('reload', '1'))
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(2)
    await page.waitForTimeout(200)
    expect(errors).toEqual([])
  })

  test('should reload the child only once', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('child.html') })
    await initializedChild(page)
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(1)
    await frame.evaluate(el => el.setAttribute('reload', '1'))
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(2)
    await page.waitForTimeout(500)
    expect(await events(page, 'iframe-load')).toHaveLength(2)
  })

  test('should stop listening to the child once removed from the document', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('child.html'), 'sync-params': '' })
    await initializedChild(page)
    await page.evaluate(() => {
      // count the window listeners of the element (messages of the child) and of its state change adapter
      const counts: Record<string, number> = { popstate: 0, message: 0 }
      const add = window.addEventListener
      const remove = window.removeEventListener
      window.addEventListener = function (this: Window, type: string, ...args: [any, any?]) { if (type in counts) counts[type]++; return add.call(this, type, ...args) }
      window.removeEventListener = function (this: Window, type: string, ...args: [any, any?]) { if (type in counts) counts[type]--; return remove.call(this, type, ...args) }
      ;(window as any).listenerCounts = counts
    })
    // the listeners of the first connection are removed, the second ones are added then removed
    await frame.evaluate(el => { const parent = el.parentNode!; el.remove(); parent.appendChild(el); el.remove() })
    expect(await page.evaluate(() => (window as any).listenerCounts)).toEqual({ popstate: -1, message: -1 })
  })

  test('should keep working when moved in the document, at the state reached by the child', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('child.html'), 'sync-params': '' })
    const child = await initializedChild(page)
    await child.evaluate(() => { history.replaceState(null, '', '?step=1') })
    await expect.poll(() => new URL(page.url()).search).toBe('?step=1')
    await frame.evaluate(el => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      container.appendChild(el)
    })
    // moving an iframe in the DOM reloads it, the handshake is done again
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(2)
    const moved = await initializedChild(page)
    expect(new URL(moved.url()).search).toBe('?step=1')
    await moved.evaluate(() => { history.replaceState(null, '', '?step=2') })
    await expect.poll(() => new URL(page.url()).search).toBe('?step=2')
    await moved.evaluate(() => { (window as any).dFrameContent.sendMessage('moved') })
    await expect.poll(() => events(page, 'message')).toEqual(['moved'])
  })

  test('should pass iframe-* attributes to the iframe', async ({ page }) => {
    await mountFrame(page, { src: fixture('plain.html'), 'iframe-title': 'An embedded page', 'iframe-allow': 'fullscreen' })
    const iframe = page.locator('d-frame iframe')
    await expect(iframe).toHaveAttribute('title', 'An embedded page')
    await expect(iframe).toHaveAttribute('allow', 'fullscreen')
  })

  test('should activate debug logs from localStorage', async ({ page }) => {
    const logs: string[] = []
    page.on('console', msg => logs.push(msg.text()))
    await page.evaluate(() => { localStorage.setItem('debug', 'd-frame:debugged') })
    await mountFrame(page, { src: fixture('child.html'), id: 'debugged' })
    await mountFrame(page, { src: fixture('child.html'), id: 'silent' })
    await expect.poll(() => logs.some(l => l.includes('d-frame:debugged'))).toBe(true)
    expect(logs.some(l => l.includes('d-frame:silent'))).toBe(false)
  })

  test('should ignore the reload attribute before the first load of the child', async ({ page }) => {
    const frame = await page.evaluate((src) => {
      const frame = (window as any).mountFrame({ src })
      frame.setAttribute('reload', '1')
      return frame.id
    }, fixture('child.html'))
    expect(frame).toBeTruthy()
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(1)
    await page.waitForTimeout(300)
    expect(await events(page, 'iframe-load')).toHaveLength(1)
  })

  test('should fall back to the window history when the custom adapter fails', async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
    await page.evaluate((src) => {
      const adapter = {
        stateChange () { throw new Error('broken adapter') },
        onStateChange () { return () => {} }
      }
      ;(window as any).mountFrame({ src, 'sync-params': '' }, { adapter })
    }, fixture('child.html'))
    const child = await initializedChild(page)
    await child.evaluate(() => { history.replaceState(null, '', '?a=1') })
    await expect.poll(() => new URL(page.url()).search).toBe('?a=1')
    expect(errors.some(e => e.includes('failed to apply state change to parent using custom adapter'))).toBe(true)
  })

  test('should transmit the debug attribute to the child', async ({ page }) => {
    const logs: string[] = []
    page.on('console', msg => logs.push(msg.text()))
    await mountFrame(page, { src: fixture('child.html'), id: 'debugged', debug: '' })
    await initializedChild(page)
    await expect.poll(() => logs.some(l => l.includes('d-frame:debugged:content'))).toBe(true)
  })
})
