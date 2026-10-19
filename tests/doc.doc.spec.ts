import { test, expect, type Page } from '@playwright/test'

// the pages of the menu of the documentation site, each one is a set of live examples
// (paths are relative to the base path of the site, like on github pages)
const pages = ['', 'getting-started', 'static-height', 'dynamic-height', 'loading-status', 'dynamic-src', 'nav-sync', 'nav-sync-path', 'nav-sync-prefix', 'nav-sync-top-links', 'dynamic-nav-sync', 'force-reload', 'messages', 'mouse-events', 'extra-attrs', 'v-iframe-compat', 'clipping']

const frameStates = (page: Page) => page.locator('d-frame').evaluateAll(frames => frames.map(frame => ({
  id: frame.id,
  visible: getComputedStyle(frame.shadowRoot!.querySelector('iframe')!).visibility === 'visible'
})))

test.describe('documentation examples', () => {
  for (const path of pages) {
    test(`should display the examples of /${path} without errors`, async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', err => errors.push(err.message))
      // the websockets of the dev tools of nuxt are not part of the examples
      page.on('console', msg => { if (msg.type() === 'error' && !msg.text().startsWith('WebSocket connection')) errors.push(msg.text()) })
      await page.goto(path)
      // the first visit of the dev server compiles vuetify and nuxt
      await expect(page.locator('.v-application')).toBeVisible({ timeout: 45_000 })
      // every frame of the page gets ready, whatever its loading strategy (scrolled to for loading="lazy")
      for (const frame of await page.locator('d-frame').all()) await frame.scrollIntoViewIfNeeded()
      await expect.poll(() => frameStates(page).then(states => states.filter(s => !s.visible)), { timeout: 15_000 }).toEqual([])
      expect(errors).toEqual([])
    })
  }

  test('should sync the query params of the nav-sync example', async ({ page }) => {
    await page.goto('nav-sync')
    const child = page.locator('d-frame').first().frameLocator('iframe')
    await child.getByRole('button', { name: 'Increment' }).click()
    await child.getByRole('button', { name: 'Increment' }).click()
    await expect.poll(() => new URL(page.url()).searchParams.get('param')).toBe('2')
    // the state survives a reload of the parent
    await page.reload()
    await expect(page.locator('d-frame').first().frameLocator('iframe').getByText('Param=2.')).toBeVisible()
  })

  test('should sync the path of the children of the nav-sync-path example', async ({ page }) => {
    await page.goto('nav-sync-path')
    const frames = page.locator('d-frame')
    await expect(frames).toHaveCount(4)
    for (let i = 0; i < 4; i++) {
      await frames.nth(i).frameLocator('iframe').getByRole('button', { name: 'Go to child' }).click()
      await expect(frames.nth(i).frameLocator('iframe').getByText('This is a frame in a subdirectory')).toBeVisible()
    }
    // the navigations of the parent router are asynchronous
    await expect.poll(() => {
      const url = new URL(page.url())
      return [url.searchParams.get('path1'), url.searchParams.get('path2'), url.hash, url.pathname]
    }).toEqual(['child', 'child', '#child', '/frame/main/nav-sync-path/child'])
    // every child is back at its path when the parent page is reloaded
    await page.reload()
    for (let i = 0; i < 4; i++) {
      await expect(frames.nth(i).frameLocator('iframe').getByText('This is a frame in a subdirectory')).toBeVisible()
    }
  })

  test('should resize the frames of the dynamic-height example', async ({ page }) => {
    await page.goto('dynamic-height')
    const frame = page.locator('d-frame').first()
    const wrapper = frame.locator('.d-frame-wrapper')
    const height = () => wrapper.evaluate(el => el.getBoundingClientRect().height)
    // the wrapper only gets an explicit height from a height message of the child
    await expect(wrapper).toHaveAttribute('style', /height: ?\d+px/)
    const before = await height()
    await frame.frameLocator('iframe').getByRole('button', { name: 'Add 50px' }).click()
    await expect.poll(height).toBe(before + 50)
  })
})
