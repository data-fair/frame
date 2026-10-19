import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, wrapperHeight, fixture, knownBug } from './support.ts'

test.describe('nested frames', () => {
  test.beforeEach(async ({ page }) => { await openParent(page) })

  const innerChild = async (page: import('@playwright/test').Page) => {
    const middle = await initializedChild(page)
    const iframe = await middle.locator('d-frame iframe').elementHandle()
    const inner = (await iframe!.contentFrame())!
    await inner.waitForFunction(() => (window as any).dFrameContent?.initialized)
    return inner
  }

  test('should sync the state of the inner child up to the top page', async ({ page }) => {
    await mountFrame(page, { src: fixture('middle.html'), 'sync-params': '', resize: '' })
    const inner = await innerChild(page)
    await inner.evaluate(() => { history.replaceState(null, '', '?x=1') })
    await expect.poll(() => new URL(page.url()).search).toBe('?x=1')
  })

  test('should resize the top frame from the height of the inner child', async ({ page }) => {
    knownBug('the inner frame resizes inside the shadow root of the d-frame of the middle page, its MutationObserver does not see it')
    await mountFrame(page, { src: fixture('middle.html'), 'sync-params': '', resize: '' })
    const inner = await innerChild(page)
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    await inner.evaluate(() => {
      document.getElementById('content')!.style.height = '350px'
      document.body.appendChild(document.createElement('span'))
    })
    await expect.poll(() => wrapperHeight(page)).toBe(350)
  })
})
