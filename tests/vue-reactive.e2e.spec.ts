import { test, expect, type Page, type Frame } from '@playwright/test'
import { openParent, mountFrame, initializedChild, childFrame, fixture, knownBug } from './support.ts'

const params = (target: Page | Frame) => target.evaluate(() => ({ ...(window as any).params }))

test.describe('navigation syncing with vue reactive params', () => {
  test('should sync reactive params of the parent and of the child both ways', async ({ page }) => {
    await openParent(page, fixture('reactive-parent.html') + '?a=1')
    await mountFrame(page, { src: fixture('reactive-child.html'), 'sync-params': '' })
    const child = await initializedChild(page)
    expect(await params(child)).toEqual({ a: '1' })
    const loadMarker = await child.evaluate(() => (window as any).loadMarker)

    await child.evaluate(() => { (window as any).params.b = '2' })
    await expect.poll(() => params(page)).toEqual({ a: '1', b: '2' })
    expect(new URL(page.url()).search).toBe('?a=1&b=2')

    await page.evaluate(() => { (window as any).params.a = '3' })
    await expect.poll(() => params(child)).toEqual({ a: '3', b: '2' })
    expect(await child.evaluate(() => (window as any).loadMarker)).toBe(loadMarker)
  })

  test('should remove a param in the child when it is removed in the parent', async ({ page }) => {
    knownBug('applySearchParams splices index -1 for a new key and keeps a removed one')
    await openParent(page, fixture('reactive-parent.html') + '?a=1&b=2')
    await mountFrame(page, { src: fixture('reactive-child.html'), 'sync-params': '' })
    const child = await initializedChild(page)
    expect(await params(child)).toEqual({ a: '1', b: '2' })
    await page.evaluate(() => {
      const params = (window as any).params
      delete params.b
      params.c = '3'
    })
    await expect.poll(() => params(child)).toEqual({ a: '1', c: '3' })
  })

  test('should apply parent changes to a v-iframe child through its reactive params', async ({ page }) => {
    await openParent(page, fixture('reactive-parent.html'))
    await mountFrame(page, { src: fixture('v-iframe-child.html'), 'sync-params': '' })
    const child = await childFrame(page)
    await child.waitForFunction(() => (window as any).dFrameContent?.initialized)
    const loadMarker = await child.evaluate(() => (window as any).loadMarker)
    await page.evaluate(() => { (window as any).params.a = '1' })
    await expect.poll(() => params(child)).toEqual({ a: '1' })
    expect(await child.evaluate(() => (window as any).loadMarker)).toBe(loadMarker)
    await child.evaluate(() => { (window as any).params.a = '2' })
    await expect.poll(() => params(page)).toEqual({ a: '2' })
  })
})
