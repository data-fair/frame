import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, fixture, crossOriginFixture } from './support.ts'

// parent and child can be any page: each side must resist the messages of a hostile other side
test.describe('hostile messages', () => {
  test.beforeEach(async ({ page }) => { await openParent(page) })

  test('should not let a parent run code in the child with a javascript: src', async ({ page }) => {
    await mountFrame(page, { src: crossOriginFixture(page, 'child.html') })
    const child = await initializedChild(page)
    const errors: string[] = []
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
    await page.evaluate(() => {
      const iframe = document.querySelector('d-frame')!.shadowRoot!.querySelector('iframe')!
      for (const src of ['javascript:document.body.dataset.pwned="1"', 'data:text/html,<p>pwned</p>']) {
        iframe.contentWindow!.postMessage(['df-parent', 'updateSrc', src], '*')
      }
    })
    await expect.poll(() => errors.filter(e => e.includes('refused to navigate'))).toHaveLength(2)
    expect(await child.evaluate(() => document.body.dataset.pwned)).toBeUndefined()
    expect(new URL(child.url()).pathname).toBe(fixture('child.html'))
  })

  test('should not give a javascript: parent URL to the listeners of the child', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': 'page' })
    const child = await initializedChild(page)
    await child.evaluate(() => {
      (window as any).results = []
      ;(window as any).dFrameContent.addParentUrlListener('?page=2', (url: string) => (window as any).results.push(url))
    })
    await expect.poll(() => child.evaluate(() => (window as any).results)).toHaveLength(1)
    await page.evaluate(() => {
      const iframe = document.querySelector('d-frame')!.shadowRoot!.querySelector('iframe')!
      const childHref = new URL('?page=2', iframe.contentWindow!.location.href).href
      iframe.contentWindow!.postMessage(['df-parent', 'parentUrl', childHref, 'javascript:alert(1)'], '*')
    })
    await page.waitForTimeout(200)
    expect(await child.evaluate(() => (window as any).results)).toHaveLength(1)
  })
})
