import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, events, wrapperHeight, fixture, crossOriginFixture } from './support.ts'

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

  test('should not let a child inject css in the parent with a height message', async ({ page }) => {
    await mountFrame(page, { src: crossOriginFixture(page, 'child.html'), resize: '' })
    const child = await initializedChild(page)
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    await child.evaluate(() => {
      for (const height of ['1px;position:fixed;inset:0;height:100vh', -1, null, Infinity]) window.parent.postMessage(['df-child', 'height', height], '*')
      // messages keep their order: once this one is received the others were handled
      ;(window as any).dFrameContent.sendMessage('after')
    })
    await expect.poll(() => events(page, 'message')).toEqual(['after'])
    expect(await page.locator('d-frame .d-frame-wrapper').getAttribute('style')).not.toContain('position')
    expect(await wrapperHeight(page)).toBe(200)
  })

  test('should ignore malformed messages of the child without errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))
    await mountFrame(page, { src: fixture('child.html'), 'sync-params': '' })
    const child = await initializedChild(page)
    await child.evaluate(() => {
      for (const message of [
        ['df-child', 'stateChange', 'replace', 'not a url'],
        ['df-child', 'stateChange', 'replace', null],
        ['df-child', 'stateChange', 'other', window.location.href + '?x=1'],
        ['df-child', 'addParentUrlListener', 'not a url'],
        ['df-child', 'addParentUrlListener', 42],
        ['df-global', 'mouse', null, {}],
        { vIframe: true, uiNotification: null }
      ]) window.parent.postMessage(message, '*')
      history.replaceState(null, '', '?valid=1')
    })
    await expect.poll(() => new URL(page.url()).search).toBe('?valid=1')
    expect(errors).toEqual([])
  })

  test('should not dispatch mouse events that the d-frame did not ask for', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), 'mouse-events': 'mouseup', height: '100px' })
    const child = await initializedChild(page)
    await child.evaluate(() => {
      for (const type of ['click', 'ready', 'mouseup']) window.parent.postMessage(['df-global', 'mouse', type, {}], '*')
    })
    await expect.poll(() => events(page, 'mouseup')).toHaveLength(1)
    expect(await events(page, 'click')).toHaveLength(0)
    // the real ready event of the load, not a fake one dispatched as a mouse event
    expect(await events(page, 'ready')).toHaveLength(1)
  })

  test('should not replay mouse events in the child that it did not ask for', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), 'mouse-events': 'mouseup', height: '100px' })
    const child = await initializedChild(page)
    await page.evaluate(() => {
      const iframe = document.querySelector('d-frame')!.shadowRoot!.querySelector('iframe')!
      for (const type of ['click', 'mouseup']) iframe.contentWindow!.postMessage(['df-global', 'mouse', type, {}], '*')
    })
    await expect.poll(() => child.evaluate(() => (window as any).mouseEvents)).toEqual(['mouseup'])
  })

  test('should resolve a protocol-relative src and a relative src', async ({ page }) => {
    await mountFrame(page, { src: crossOriginFixture(page, 'child.html').replace('http:', ''), 'sync-params': '' })
    const crossOriginChild = await initializedChild(page)
    expect(new URL(crossOriginChild.url()).hostname).toBe('localhost')
    await page.evaluate(() => document.querySelector('d-frame')!.remove())
    await mountFrame(page, { src: 'child.html', 'sync-params': '' })
    const relativeChild = await initializedChild(page)
    expect(new URL(relativeChild.url()).pathname).toBe(fixture('child.html'))
  })

  test('should never give the iframe a src that is not http(s) sent by the child', async ({ page }) => {
    // the iframe is reloaded from the last src of the child (reload attribute, element moved):
    // a javascript: src would run in the parent when the new iframe starts from about:blank
    const frame = await mountFrame(page, { src: crossOriginFixture(page, 'child.html') })
    const child = await initializedChild(page)
    await child.evaluate(() => {
      window.parent.postMessage(['df-child', 'stateChange', 'replace', 'javascript:parent.document.body.dataset.pwned="1"'], '*')
      ;(window as any).dFrameContent.sendMessage('after')
    })
    await expect.poll(() => events(page, 'message')).toEqual(['after'])
    await frame.evaluate(el => el.setAttribute('reload', '1'))
    expect(await page.locator('d-frame iframe').getAttribute('src')).toMatch(/^http:/)
    expect(await page.evaluate(() => document.body.dataset.pwned)).toBeUndefined()
  })
})
