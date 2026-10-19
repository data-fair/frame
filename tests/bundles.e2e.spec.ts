import { test, expect } from '@playwright/test'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fixture, wrapperHeight } from './support.ts'

// the bundles of dist/ are loaded from a CDN with a script tag, by customer sites and by applications
let outDir: string
test.beforeAll(() => {
  outDir = mkdtempSync(join(tmpdir(), 'd-frame-bundles-'))
  for (const config of ['vite.config.d-frame.js', 'vite.config.d-frame-content.js', 'vite.config.v-iframe-compat-d-frame-content.js']) {
    execFileSync('npx', ['vite', 'build', '-c', config, '--outDir', outDir, '--logLevel', 'warn'])
  }
})
test.afterAll(() => { rmSync(outDir, { recursive: true, force: true }) })

// a child page that only loads a bundle, and reports the global variables it created
const childPage = (bundle: string) => `<!doctype html><html><body style="margin:0">
  <div data-iframe-height style="height:200px"></div>
  <script>window.globalsBefore = Object.keys(window)</script>
  <script src="/bundles/${bundle}"></script>
  <script>window.newGlobals = Object.keys(window).filter(k => !window.globalsBefore.includes(k) && k !== 'globalsBefore')</script>
</body></html>`

test.describe('bundles', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/bundles/**', route => route.fulfill({ contentType: 'text/javascript', body: readFileSync(join(outDir, new URL(route.request().url()).pathname.replace('/bundles/', ''))) }))
    await page.route('**/bundle-child/**', route => route.fulfill({ contentType: 'text/html', body: childPage(new URL(route.request().url()).pathname.replace('/bundle-child/', '')) }))
    await page.goto(fixture('plain.html'))
  })

  test('should not create global variables in the page of the parent', async ({ page }) => {
    const globalsBefore = await page.evaluate(() => { (window as any).$ = 'jquery'; return Object.keys(window) })
    await page.addScriptTag({ path: join(outDir, 'd-frame.min.js') })
    expect(await page.evaluate((before) => Object.keys(window).filter(k => !before.includes(k)), globalsBefore)).toEqual([])
    expect(await page.evaluate(() => (window as any).$)).toBe('jquery')
    expect(await page.evaluate(() => !!customElements.get('d-frame'))).toBe(true)
  })

  for (const [bundle, globals] of [
    ['d-frame-content.min.js', ['__d_frame__content', 'DFrameContent']],
    ['v-iframe-compat/d-frame-content.min.js', ['__d_frame__content', 'dFrameContent', 'VIframeCompatDFrameContent']]
  ] as const) {
    test(`should resize the frame from the bundles, with ${bundle} in the child`, async ({ page }) => {
      await page.addScriptTag({ path: join(outDir, 'd-frame.min.js') })
      await page.evaluate((src) => {
        const frame = document.createElement('d-frame')
        frame.setAttribute('src', src)
        frame.setAttribute('resize', '')
        document.body.appendChild(frame)
      }, '/bundle-child/' + bundle)
      await expect.poll(() => wrapperHeight(page)).toBe(200)
      const child = page.frames().find(f => f.url().includes('/bundle-child/'))!
      expect((await child.evaluate(() => (window as any).newGlobals)).sort()).toEqual([...globals].sort())
    })
  }
})
