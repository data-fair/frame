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
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(1)
    await page.waitForTimeout(200)
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
    await expect.poll(() => events(page, 'iframe-load')).toHaveLength(1)
    await page.waitForTimeout(200)
    expect(await events(page, 'ready')).toHaveLength(0)
  })

  test('should report a missing src attribute', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))
    await page.evaluate(() => { document.body.appendChild(document.createElement('d-frame')) })
    await expect.poll(() => errors).toEqual(['src is a required attribute'])
  })
})
