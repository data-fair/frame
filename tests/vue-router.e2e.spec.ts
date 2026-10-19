import { test, expect, type Page, type Frame } from '@playwright/test'
import { openParent, mountFrame, initializedChild, fixture } from './support.ts'

const parentRoute = (page: Page) => page.evaluate(() => (window as any).router.currentRoute.value.fullPath)
const childRoute = (child: Frame) => child.evaluate(() => (window as any).router.currentRoute.value.fullPath)
const childNavigate = (child: Frame, query: Record<string, string>) => child.evaluate((query) => (window as any).router.replace({ query }), query)

test.describe('navigation syncing with vue-router on both sides', () => {
  test.beforeEach(async ({ page }) => {
    await openParent(page, fixture('router-parent/'))
  })

  test('should reflect the navigation of the child in the parent router', async ({ page }) => {
    await mountFrame(page, { src: fixture('router-child/'), 'sync-params': '' })
    const child = await initializedChild(page)
    await childNavigate(child, { page: '2' })
    await expect.poll(() => parentRoute(page)).toBe('/?page=2')
  })

  test('should apply a navigation of the parent router in the child router, without reloading it', async ({ page }) => {
    await mountFrame(page, { src: fixture('router-child/'), 'sync-params': '' })
    const child = await initializedChild(page)
    const loadMarker = await child.evaluate(() => (window as any).loadMarker)
    await page.evaluate(() => (window as any).router.push({ query: { page: '7' } }))
    await expect.poll(() => childRoute(child)).toBe('/?page=7')
    expect(await child.evaluate(() => (window as any).loadMarker)).toBe(loadMarker)

    // going back in the parent history goes back in the child
    await page.evaluate(() => { history.back() })
    await expect.poll(() => childRoute(child)).toBe('/')
    expect(await child.evaluate(() => (window as any).loadMarker)).toBe(loadMarker)
  })

  test('should sync the path of the child router in the path of the parent router', async ({ page }) => {
    await mountFrame(page, { src: fixture('router-child/'), 'sync-path': '/tests/fixtures/router-parent/' })
    const child = await initializedChild(page)
    await child.evaluate(() => (window as any).router.push('/sub/page'))
    await expect.poll(() => parentRoute(page)).toBe('/sub/page')
    await page.evaluate(() => (window as any).router.push('/other'))
    await expect.poll(() => childRoute(child)).toBe('/other')
  })

  test('should not lose fast navigations of the child when the parent has async guards', async ({ page }) => {
    await page.evaluate(() => { (window as any).guardDelay = 150 })
    await mountFrame(page, { src: fixture('router-child/'), 'sync-params': '' })
    const child = await initializedChild(page)
    // like clicking 5 times on "next" in a calendar
    await child.evaluate(async () => {
      for (let i = 1; i <= 5; i++) {
        (window as any).router.replace({ query: { page: String(i) } })
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    })
    await expect.poll(() => parentRoute(page)).toBe('/?page=5')
    await page.waitForTimeout(300)
    expect(await childRoute(child)).toBe('/?page=5')
    // the child never went back to a previous page
    const pages = (await child.evaluate(() => (window as any).navigations)).map((p: string) => Number(new URL(p, 'http://x').searchParams.get('page') ?? 0))
    expect(pages).toEqual([...pages].sort((a, b) => a - b))
  })

  test('should resync the child when a guard of the parent aborts its navigation', async ({ page }) => {
    await mountFrame(page, { src: fixture('router-child/'), 'sync-params': '' })
    const child = await initializedChild(page)
    await page.evaluate(() => { (window as any).guardAbort = true })
    await childNavigate(child, { page: '2' })
    await expect.poll(() => page.evaluate(() => (window as any).navigations.at(-1))).toEqual({ to: '/?page=2', failure: 4 })
    // the parent stayed on its URL, the child must not stay on a state that the parent refused
    await expect.poll(() => childRoute(child)).toBe('/')
    expect(await parentRoute(page)).toBe('/')
  })

  test('should report a guard of the parent that throws and resync the child, without an unhandled rejection', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))
    const logs: string[] = []
    page.on('console', msg => { if (msg.type() === 'error') logs.push(msg.text()) })
    await mountFrame(page, { src: fixture('router-child/'), 'sync-params': '' })
    const child = await initializedChild(page)
    await page.evaluate(() => { (window as any).guardThrow = true })
    await childNavigate(child, { page: '2' })
    await expect.poll(() => logs.some(l => l.includes('failed to apply state change on vue.router'))).toBe(true)
    // like an aborted navigation, the child must not stay on a state that the parent refused
    await expect.poll(() => childRoute(child)).toBe('/')
    expect(errors).toEqual([])
    expect(await parentRoute(page)).toBe('/')
  })
})
