import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, fixture, knownBug } from './support.ts'

// a child that renders links must point them to the parent page, so that they can be opened in a new tab
test.describe('parent URL listeners', () => {
  test('should resolve a child URL as a parent URL, and follow the changes of the parent', async ({ page }) => {
    await openParent(page, fixture('parent.html') + '?other=1')
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': 'page' })
    const child = await initializedChild(page)
    await child.evaluate(() => {
      (window as any).results = []
      ;(window as any).dFrameContent.addParentUrlListener('?page=2', (url: string) => (window as any).results.push(url))
    })
    const parentUrl = (search: string) => new URL(fixture('parent.html') + search, page.url()).href
    await expect.poll(() => child.evaluate(() => (window as any).results)).toEqual([parentUrl('?other=1&page=2')])

    await page.evaluate(() => {
      history.pushState(null, '', '?other=2')
      window.dispatchEvent(new PopStateEvent('popstate'))
    })
    await expect.poll(() => child.evaluate(() => (window as any).results)).toEqual([parentUrl('?other=1&page=2'), parentUrl('?other=2&page=2')])
  })

  test('should call each listener of the same URL once', async ({ page }) => {
    knownBug('parentUrlResults is never filled, every new listener makes the parent answer all the listeners of the URL again')
    await openParent(page)
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': 'page' })
    const child = await initializedChild(page)
    await child.evaluate(async () => {
      const w = window as any
      w.results = { first: 0, second: 0 }
      w.dFrameContent.addParentUrlListener('?page=2', () => { w.results.first++ })
      await new Promise(resolve => setTimeout(resolve, 100))
      w.dFrameContent.addParentUrlListener('?page=2', () => { w.results.second++ })
    })
    await expect.poll(() => child.evaluate(() => (window as any).results)).toEqual({ first: 1, second: 1 })
    await page.waitForTimeout(200)
    expect(await child.evaluate(() => (window as any).results)).toEqual({ first: 1, second: 1 })
  })

  test('should stop updating a removed listener', async ({ page }) => {
    await openParent(page)
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': 'page' })
    const child = await initializedChild(page)
    await child.evaluate(async () => {
      const w = window as any
      w.count = 0
      w.listener = () => { w.count++ }
      w.dFrameContent.addParentUrlListener('?page=2', w.listener)
    })
    await expect.poll(() => child.evaluate(() => (window as any).count)).toBe(1)
    await child.evaluate(() => { (window as any).dFrameContent.removeParentUrlListener('?page=2', (window as any).listener) })
    await page.evaluate(() => {
      history.pushState(null, '', '?other=2')
      window.dispatchEvent(new PopStateEvent('popstate'))
    })
    await page.waitForTimeout(200)
    expect(await child.evaluate(() => (window as any).count)).toBe(1)
  })

  test('should resolve parent URLs with useParentUrl in a vue-router child', async ({ page }) => {
    await openParent(page, fixture('router-parent/') + '?other=1')
    await mountFrame(page, { src: fixture('router-child/'), 'sync-params': 'page' })
    const child = await initializedChild(page)
    const result = await child.evaluate(() => new Promise(resolve => {
      const { vue, useParentUrl, router, dFrameContent } = window as any
      vue.effectScope().run(() => {
        const parentUrl = useParentUrl({ query: { page: '3' } }, router, dFrameContent)
        vue.watch(parentUrl, (value: string) => { if (value) resolve(value) }, { immediate: true })
      })
    }))
    expect(result).toBe(new URL(fixture('router-parent/') + '?other=1&page=3', page.url()).href)
  })
})
