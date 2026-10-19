import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, events, fixture } from './support.ts'

test.describe('loading status', () => {
  test.beforeEach(async ({ page }) => { await openParent(page) })

  const iframeVisible = (page: import('@playwright/test').Page) => page.locator('d-frame iframe').evaluate(el => getComputedStyle(el).visibility === 'visible')

  test('should show the iframe and emit ready once loaded', async ({ page }) => {
    await mountFrame(page, { src: fixture('plain.html'), height: '100px' })
    await expect.poll(() => events(page, 'ready')).toHaveLength(1)
    expect(await events(page, 'iframe-load')).toHaveLength(1)
    expect(await iframeVisible(page)).toBe(true)
    await expect(page.locator('d-frame .loading-placeholder')).toBeHidden()
  })

  test('should display the loading slot until ready', async ({ page }) => {
    await page.evaluate((src) => {
      const frame = (window as any).mountFrame({ src, 'ready-message': '' })
      frame.innerHTML = '<p slot="loading" id="loading">loading...</p>'
    }, fixture('child.html'))
    const child = await initializedChild(page)
    await expect(page.locator('#loading')).toBeVisible()
    expect(await iframeVisible(page)).toBe(false)
    await child.evaluate(() => { (window as any).dFrameContent.ready() })
    await expect(page.locator('#loading')).toBeHidden()
    expect(await iframeVisible(page)).toBe(true)
    expect(await events(page, 'ready')).toHaveLength(1)
  })

  test('should wait for the ready message instead of the load event with ready-message', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), 'ready-message': '' })
    const child = await initializedChild(page)
    // ready would be emitted by the same listener as iframe-load
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(1)
    expect(await events(page, 'ready')).toHaveLength(0)
    await child.evaluate(() => { (window as any).dFrameContent.ready() })
    await expect.poll(() => events(page, 'ready')).toHaveLength(1)
  })

  test('should be ready on the first height message in resize mode', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '' })
    await expect.poll(() => events(page, 'ready')).toHaveLength(1)
  })

  test('should not be ready on the load event in resize mode, the frame height is not known yet', async ({ page }) => {
    await mountFrame(page, { src: fixture('plain.html'), resize: '' })
    // ready would be emitted by the same listener as iframe-load
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(1)
    expect(await events(page, 'ready')).toHaveLength(0)
  })

  test('should report a missing src attribute', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))
    await page.evaluate(() => { document.body.appendChild(document.createElement('d-frame')) })
    await expect.poll(() => errors).toEqual(['src is a required attribute'])
  })

  for (const attrs of [{}, { 'sync-params': '' }] as Record<string, string>[]) {
    test(`should wait for an empty src to be set, without loading the parent page in the iframe ${JSON.stringify(attrs)}`, async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', err => errors.push(err.message))
      // like <d-frame :src="url"> while url is not known yet
      const frame = await mountFrame(page, { ...attrs, src: '' })
      await page.waitForTimeout(300)
      expect(await frame.locator('iframe').getAttribute('src')).toBeNull()
      await frame.evaluate((el, src) => el.setAttribute('src', src), fixture('plain.html'))
      await expect.poll(() => events(page, 'ready')).toHaveLength(1)
      expect(errors).toEqual([])
    })
  }

  test('should emit ready only once in resize mode, whatever the number of heights', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '' })
    const child = await initializedChild(page)
    await expect.poll(() => events(page, 'ready')).toHaveLength(1)
    await child.evaluate(() => {
      document.getElementById('content')!.style.height = '300px'
      document.body.appendChild(document.createElement('span'))
    })
    await expect.poll(() => page.locator('d-frame .d-frame-wrapper').evaluate(el => el.getBoundingClientRect().height)).toBe(300)
    expect(await events(page, 'ready')).toHaveLength(1)
  })

  test('should load even if the storage of the page is blocked', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))
    // like a sandboxed parent or blocked cookies: reading localStorage throws a SecurityError
    await page.evaluate(() => {
      Object.defineProperty(window, 'localStorage', { get () { throw new DOMException('denied', 'SecurityError') } })
    })
    await mountFrame(page, { src: fixture('plain.html'), height: '100px' })
    await expect.poll(() => events(page, 'ready')).toHaveLength(1)
    expect(errors).toEqual([])
  })
})
