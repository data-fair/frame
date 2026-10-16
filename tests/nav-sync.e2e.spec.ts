import { test, expect, type Page } from '@playwright/test'
import { openParent, mountFrame, initializedChild, events, fixture, crossOriginFixture } from './support.ts'

const parentSearch = (page: Page) => new URL(page.url()).search
const iframeSrc = (page: Page) => page.locator('d-frame').last().locator('iframe').getAttribute('src')
const childUrl = async (page: Page) => {
  const iframe = await page.locator('d-frame').last().locator('iframe').elementHandle()
  return (await iframe!.contentFrame())!.url()
}

test.describe('navigation syncing with the window adapter', () => {
  test('should apply the params of the parent to the initial src', async ({ page }) => {
    await openParent(page, fixture('parent.html') + '?a=1')
    await mountFrame(page, { src: fixture('child.html') + '?b=2', 'sync-params': '' })
    expect(new URL((await iframeSrc(page))!).search).toBe('?b=2&a=1')
  })

  test('should reflect a replaceState of the child in the parent', async ({ page }) => {
    await openParent(page)
    await mountFrame(page, { src: fixture('child.html') + '?b=2', 'sync-params': '' })
    const child = await initializedChild(page)
    const historyLength = await page.evaluate(() => history.length)
    await child.evaluate(() => { history.replaceState(null, '', '?b=2&c=3') })
    // b keeps the value of the src, it is a default value and does not need to be in the parent
    await expect.poll(() => parentSearch(page)).toBe('?c=3')
    expect(await page.evaluate(() => history.length)).toBe(historyLength)
    expect(await events(page, 'state-change')).toEqual([])
  })

  test('should reflect a pushState of the child as a new history entry of the parent', async ({ page }) => {
    await openParent(page)
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': '' })
    const child = await initializedChild(page)
    const historyLength = await page.evaluate(() => history.length)
    await child.evaluate(() => { history.pushState(null, '', '?c=4') })
    await expect.poll(() => parentSearch(page)).toBe('?c=4')
    // the child replaces its own entry, only the parent pushes one
    expect(await page.evaluate(() => history.length)).toBe(historyLength + 1)
    expect(new URL(child.url()).search).toBe('?c=4')

    // back in the parent goes back in the child
    await page.evaluate(() => { history.back() })
    await expect.poll(() => parentSearch(page)).toBe('')
    await expect.poll(() => childUrl(page).then(u => new URL(u).search)).toBe('')
  })

  test('should remove from the parent the params removed by the child', async ({ page }) => {
    await openParent(page, fixture('parent.html') + '?c=3&other=1')
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': 'c' })
    const child = await initializedChild(page)
    expect(new URL(child.url()).search).toBe('?c=3')
    await child.evaluate(() => { history.replaceState(null, '', '?') })
    await expect.poll(() => parentSearch(page)).toBe('?other=1')
  })

  test('should only sync the params matching a pattern', async ({ page }) => {
    await openParent(page, fixture('parent.html') + '?_x=5&y=6')
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': '_*' })
    const child = await initializedChild(page)
    expect(new URL(child.url()).search).toBe('?_x=5')
    await child.evaluate(() => { history.replaceState(null, '', '?_x=1&z=2') })
    await expect.poll(() => parentSearch(page)).toBe('?_x=1&y=6')
  })

  test('should prefix the params in the parent, so that several frames do not clash', async ({ page }) => {
    await openParent(page, fixture('parent.html') + '?f1_x=1&f2_x=2&x=3')
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': '*:f1_', id: 'f1' })
    const child1 = await initializedChild(page)
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': '*:f2_', id: 'f2' })
    const child2 = await initializedChild(page)
    expect(new URL(child1.url()).search).toBe('?x=1')
    expect(new URL(child2.url()).search).toBe('?x=2')
    await child1.evaluate(() => { history.replaceState(null, '', '?x=10') })
    await expect.poll(() => parentSearch(page)).toBe('?f1_x=10&f2_x=2&x=3')
    await child2.evaluate(() => { history.replaceState(null, '', '?') })
    await expect.poll(() => parentSearch(page)).toBe('?f1_x=10&x=3')
  })

  test('should keep the hash and the other params of the parent', async ({ page }) => {
    await openParent(page, fixture('parent.html') + '?keep=1#anchor')
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': '_*' })
    const child = await initializedChild(page)
    await child.evaluate(() => { history.replaceState(null, '', '?_x=1') })
    await expect.poll(() => page.url()).toMatch(/\?keep=1&_x=1#anchor$/)
  })

  test('should sync the path of the child in a query param', async ({ page }) => {
    await openParent(page)
    await mountFrame(page, { src: fixture('child.html'), 'sync-path': '', 'sync-params': '' })
    const child = await initializedChild(page)
    await child.evaluate(() => { history.replaceState(null, '', 'sub/page?x=1') })
    await expect.poll(() => parentSearch(page)).toBe('?x=1&p=sub%2Fpage')
    // the state is restored when the parent page is reloaded
    await page.reload()
    await page.waitForFunction(() => (window as any).parentReady)
    await mountFrame(page, { src: fixture('child.html'), 'sync-path': '', 'sync-params': '' })
    expect(await iframeSrc(page)).toMatch(/\/tests\/fixtures\/sub\/page\?x=1$/)
  })

  test('should sync the path of the child in the hash', async ({ page }) => {
    await openParent(page)
    await mountFrame(page, { src: fixture('child.html'), 'sync-path': '#' })
    const child = await initializedChild(page)
    await child.evaluate(() => { history.replaceState(null, '', 'sub/page') })
    await expect.poll(() => new URL(page.url()).hash).toBe('#sub/page')
  })

  test('should keep an absolute path of the child in the hash', async ({ page }) => {
    await openParent(page)
    await mountFrame(page, { src: fixture('child.html'), 'sync-path': '#' })
    const child = await initializedChild(page)
    await child.evaluate(() => { history.replaceState(null, '', '/elsewhere') })
    await expect.poll(() => new URL(page.url()).hash).toBe('#/elsewhere')
  })

  test('should emit state changes without syncing with state-change-events', async ({ page }) => {
    await openParent(page)
    await mountFrame(page, { src: fixture('child.html'), 'state-change-events': '' })
    const child = await initializedChild(page)
    await child.evaluate(() => { history.pushState(null, '', '?c=4') })
    await expect.poll(() => events(page, 'state-change')).toEqual([['push', child.url()]])
    expect(parentSearch(page)).toBe('')
  })

  test('should start syncing when the sync-params attribute is added', async ({ page }) => {
    await openParent(page, fixture('parent.html') + '?a=1')
    const frame = await mountFrame(page, { src: fixture('child.html') })
    const child = await initializedChild(page)
    expect(new URL(child.url()).search).toBe('')
    await frame.evaluate(el => el.setAttribute('sync-params', ''))
    // the child has no updateSrc option: it falls back to a full navigation
    await expect.poll(() => childUrl(page).then(u => new URL(u).search)).toBe('?a=1')
  })

  test('should set the sync-path attribute with the syncPath property', async ({ page }) => {
    await openParent(page)
    const frame = await mountFrame(page, { src: fixture('child.html') })
    await frame.evaluate((el: any) => { el.syncPath = 'p' })
    await expect(frame).toHaveAttribute('sync-path', 'p')
    await expect(frame).not.toHaveAttribute('sync-params')
  })

  test('should sync params with a cross-origin child', async ({ page }) => {
    await openParent(page, fixture('parent.html') + '?a=1')
    await mountFrame(page, { src: crossOriginFixture(page, 'child.html'), 'sync-params': '' })
    const child = await initializedChild(page)
    expect(new URL(child.url()).search).toBe('?a=1')
    await child.evaluate(() => { history.replaceState(null, '', '?a=2') })
    await expect.poll(() => parentSearch(page)).toBe('?a=2')
  })
})
