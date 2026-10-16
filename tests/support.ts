import { test, expect, type Page, type Frame } from '@playwright/test'

export const fixture = (name: string) => `/tests/fixtures/${name}`

// the cross-origin variant of a fixture: the parent runs on 127.0.0.1, this one on localhost
export const crossOriginFixture = (page: Page, name: string) => {
  const url = new URL(page.url())
  url.hostname = 'localhost'
  url.pathname = fixture(name)
  url.search = ''
  return url.href
}

export const openParent = async (page: Page, path = fixture('parent.html')) => {
  await page.goto(path)
  await page.waitForFunction(() => (window as any).parentReady)
}

export const mountFrame = async (page: Page, attrs: Record<string, string>, props: Record<string, unknown> = {}) => {
  await page.evaluate(({ attrs, props }) => { (window as any).mountFrame(attrs, props) }, { attrs, props })
  return page.locator('d-frame').last()
}

// the browsing context of the iframe inside the shadow root of the last d-frame
export const childFrame = async (page: Page): Promise<Frame> => {
  const iframe = page.locator('d-frame').last().locator('iframe')
  await expect(iframe).toHaveAttribute('src', /.+/)
  const frame = await (await iframe.elementHandle())!.contentFrame()
  if (!frame) throw new Error('no content frame in d-frame')
  return frame
}

// wait for the child to be loaded and initialized by the handshake with the parent
export const initializedChild = async (page: Page) => {
  const frame = await childFrame(page)
  await frame.waitForFunction(() => (window as any).dFrameContent?.initialized)
  return frame
}

export const events = (page: Page, type: string) => page.evaluate((type) => (window as any).eventsOf(type), type)

export const wrapperHeight = (page: Page) => page.locator('d-frame').last().locator('.d-frame-wrapper').evaluate(el => el.getBoundingClientRect().height)

// a test that reproduces a known bug: expected to fail until the bug is fixed.
// SHOW_KNOWN_BUGS=1 runs them as normal tests, to see their actual errors
export const knownBug = (description: string) => test.fail(!process.env.SHOW_KNOWN_BUGS, description)
