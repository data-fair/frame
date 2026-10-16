import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, events, fixture } from './support.ts'

test.describe('mouse events', () => {
  test.beforeEach(async ({ page }) => { await openParent(page) })

  test('should transmit the clicks of the parent to the child, without echo', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), 'mouse-events': '', height: '100px' })
    const child = await initializedChild(page)
    // a menu opened in the child closes on a click outside of it, in the parent
    await page.mouse.click(400, 300)
    await expect.poll(() => child.evaluate(() => (window as any).mouseEvents)).toEqual(['mousedown', 'mouseup', 'click'])
    await page.waitForTimeout(200)
    // the event replayed in the child is not sent back to the parent
    expect(await events(page, 'click')).toEqual([])
  })

  test('should transmit the clicks of the child to the parent, without echo', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), 'mouse-events': 'click', height: '100px' })
    const child = await initializedChild(page)
    await page.locator('d-frame iframe').click({ position: { x: 10, y: 10 } })
    await expect.poll(() => events(page, 'click')).toHaveLength(1)
    await page.waitForTimeout(200)
    expect(await child.evaluate(() => (window as any).mouseEvents)).toEqual(['mousedown', 'mouseup', 'click'])
    expect(await events(page, 'click')).toHaveLength(1)
  })

  test('should only transmit the listed event types', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), 'mouse-events': 'mouseup', height: '100px' })
    const child = await initializedChild(page)
    await page.mouse.click(400, 300)
    await expect.poll(() => child.evaluate(() => (window as any).mouseEvents)).toEqual(['mouseup'])
  })

  test('should stop transmitting once removed from the document', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('child.html'), 'mouse-events': '', height: '100px' })
    await initializedChild(page)
    const posted = await frame.evaluate((el: any) => {
      let count = 0
      const post = el.postMessageToChild.bind(el)
      el.postMessageToChild = (message: any) => { count++; post(message) }
      el.remove()
      document.body.click()
      return count
    })
    expect(posted).toBe(0)
  })
})
