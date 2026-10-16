import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, childFrame, events, fixture, crossOriginFixture } from './support.ts'

test.describe('messages', () => {
  test.beforeEach(async ({ page }) => { await openParent(page) })

  test('should emit custom messages and notifications of the child', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html') })
    const child = await initializedChild(page)
    await child.evaluate(() => {
      const dFrameContent = (window as any).dFrameContent
      dFrameContent.sendMessage({ hello: 'world' })
      dFrameContent.sendNotif({ type: 'success', title: 'saved', detail: 'all good' })
    })
    await expect.poll(() => events(page, 'message')).toEqual([{ hello: 'world' }])
    await expect.poll(() => events(page, 'notif')).toEqual([{ type: 'success', title: 'saved', detail: 'all good' }])
  })

  test('should work with a cross-origin child', async ({ page }) => {
    await mountFrame(page, { src: crossOriginFixture(page, 'child.html'), resize: '' })
    const child = await initializedChild(page)
    expect(new URL(child.url()).hostname).toBe('localhost')
    await child.evaluate(() => { (window as any).dFrameContent.sendMessage('cross') })
    await expect.poll(() => events(page, 'message')).toEqual(['cross'])
    await expect.poll(() => events(page, 'ready')).toHaveLength(1)
  })

  test('should convert the notifications of a v-iframe child', async ({ page }) => {
    await mountFrame(page, { src: fixture('plain.html') })
    const child = await childFrame(page)
    await child.waitForFunction(() => (window as any).loadMarker)
    await child.evaluate(() => {
      window.parent.postMessage({ vIframe: true, uiNotification: 'simple message' }, '*')
      window.parent.postMessage({ vIframe: true, uiNotification: { type: 'error', msg: 'failure', errorMsg: 'details', clientError: true } }, '*')
      window.parent.postMessage({ vIframe: true, uiNotification: { msg: 'request failed', error: { response: { status: 500 } } } }, '*')
    })
    await expect.poll(() => events(page, 'notif')).toEqual([
      { type: 'default', title: 'simple message' },
      { type: 'warning', title: 'failure', detail: 'details' },
      { type: 'error', title: 'request failed', detail: 500 }
    ])
  })

  test('should emit every message of the window with emit-iframe-messages', async ({ page }) => {
    await mountFrame(page, { src: fixture('plain.html'), 'emit-iframe-messages': '' })
    const child = await childFrame(page)
    await child.waitForFunction(() => (window as any).loadMarker)
    await child.evaluate(() => { window.parent.postMessage({ any: 'thing' }, '*') })
    await expect.poll(() => events(page, 'iframe-message')).toContainEqual({ any: 'thing' })
  })

  test('should route the messages of each child to its own d-frame', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), id: 'frame1' })
    await mountFrame(page, { src: fixture('child.html'), id: 'frame2' })
    const child2 = await initializedChild(page)
    await child2.evaluate(() => { (window as any).dFrameContent.sendMessage('from 2') })
    await expect.poll(() => page.evaluate(() => (window as any).events.filter((e: any) => e.type === 'message'))).toEqual([{ type: 'message', detail: 'from 2', id: 'frame2' }])
    // the id is transmitted to the child during the handshake
    expect(await child2.evaluate(() => (window as any).dFrameContent.id)).toBe('frame2')
  })

  test('should ignore messages that are not from the protocol', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))
    await mountFrame(page, { src: fixture('child.html') })
    const child = await initializedChild(page)
    await child.evaluate(() => {
      // other libraries share the same channel: browser extensions, analytics, iframe-resizer...
      for (const message of ['a string', 42, { type: 'other' }, ['other', 'array'], null]) window.parent.postMessage(message, '*')
      ;(window as any).dFrameContent.sendMessage('after')
    })
    await expect.poll(() => events(page, 'message')).toEqual(['after'])
    expect(errors).toEqual([])
  })

  test('should ignore messages sent by the parent window itself', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html') })
    await initializedChild(page)
    await page.evaluate(() => { window.postMessage(['df-child', 'custom', 'spoofed'], '*') })
    await page.waitForTimeout(200)
    expect(await events(page, 'message')).toEqual([])
  })
})
