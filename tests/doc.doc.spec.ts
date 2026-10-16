import { test, expect, type Page } from '@playwright/test'

// the pages of the menu of the documentation site, each one is a set of live examples
const pages = ['/', '/getting-started', '/static-height', '/dynamic-height', '/loading-status', '/dynamic-src', '/nav-sync', '/nav-sync-path', '/nav-sync-prefix', '/nav-sync-top-links', '/dynamic-nav-sync', '/force-reload', '/messages', '/mouse-events', '/extra-attrs', '/v-iframe-compat', '/clipping']

const frameStates = (page: Page) => page.locator('d-frame').evaluateAll(frames => frames.map(frame => ({
  id: frame.id,
  visible: getComputedStyle(frame.shadowRoot!.querySelector('iframe')!).visibility === 'visible'
})))

test.describe('documentation examples', () => {
  for (const path of pages) {
    test(`should display the examples of ${path} without errors`, async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', err => errors.push(err.message))
      page.on('console', msg => { if (msg.type() === 'error' && !msg.text().startsWith('WebSocket connection')) errors.push(msg.text()) })
      await page.goto(path)
      await expect(page.locator('.v-application')).toBeVisible()
      // every frame of the page gets ready, whatever its loading strategy (scrolled to for loading="lazy")
      for (const frame of await page.locator('d-frame').all()) await frame.scrollIntoViewIfNeeded()
      await expect.poll(() => frameStates(page).then(states => states.filter(s => !s.visible)), { timeout: 15_000 }).toEqual([])
      expect(errors).toEqual([])
    })
  }

  test('should sync the query params of the nav-sync example', async ({ page }) => {
    await page.goto('/nav-sync')
    const child = page.locator('d-frame').first().frameLocator('iframe')
    await child.getByRole('button', { name: 'Increment' }).click()
    await child.getByRole('button', { name: 'Increment' }).click()
    await expect.poll(() => new URL(page.url()).searchParams.get('param')).toBe('2')
    // the state survives a reload of the parent
    await page.reload()
    await expect(page.locator('d-frame').first().frameLocator('iframe').getByText('Param=2.')).toBeVisible()
  })

  test('should resize the frames of the dynamic-height example', async ({ page }) => {
    await page.goto('/dynamic-height')
    const frame = page.locator('d-frame').first()
    await expect.poll(() => frame.evaluate(el => el.getBoundingClientRect().height)).toBeGreaterThan(50)
  })
})
