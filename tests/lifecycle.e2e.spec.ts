import { test, expect, type Page } from '@playwright/test'
import { openParent, mountFrame, initializedChild, childFrame, events, fixture, crossOriginFixture } from './support.ts'

const childUrl = async (page: Page) => (await childFrame(page)).url()

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
    // the child keeps the state it had reached before the reload
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
      // count popstate listeners, the state change adapter must unregister its own
      const counts = { popstate: 0 }
      const add = window.addEventListener
      const remove = window.removeEventListener
      window.addEventListener = function (type: string, ...args: any[]) { if (type === 'popstate') counts.popstate++; return add.call(this, type, ...args) } as any
      window.removeEventListener = function (type: string, ...args: any[]) { if (type === 'popstate') counts.popstate--; return remove.call(this, type, ...args) } as any
      ;(window as any).listenerCounts = counts
    })
    // the listener of the first connection is removed, the second one is added then removed
    await frame.evaluate(el => { const parent = el.parentNode!; el.remove(); parent.appendChild(el); el.remove() })
    expect(await page.evaluate(() => (window as any).listenerCounts.popstate)).toBe(-1)
  })

  test('should keep working when moved in the document', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('child.html'), 'sync-params': '' })
    await initializedChild(page)
    await frame.evaluate(el => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      container.appendChild(el)
    })
    // moving an iframe in the DOM reloads it, the handshake is done again
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(2)
    const child = await initializedChild(page)
    await child.evaluate(() => { history.replaceState(null, '', '?moved=1') })
    await expect.poll(() => new URL(page.url()).search).toBe('?moved=1')
    await child.evaluate(() => { (window as any).dFrameContent.sendMessage('moved') })
    // a single message event: the listener of the first connection was removed
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
    await page.evaluate(() => { localStorage.removeItem('debug') })
  })
})
