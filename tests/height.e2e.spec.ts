import { test, expect } from '@playwright/test'
import { openParent, mountFrame, initializedChild, wrapperHeight, events, fixture } from './support.ts'

test.describe('height', () => {
  test.beforeEach(async ({ page }) => { await openParent(page) })

  test('should use the height attribute with a child that does not resize', async ({ page }) => {
    await mountFrame(page, { src: fixture('plain.html'), height: '300px' })
    await expect.poll(() => wrapperHeight(page)).toBe(300)
  })

  test('should compute an automatic aspect ratio from the width, synchronously on connect', async ({ page }) => {
    // the body is 800px wide: 16/9 ratio
    const height = await page.evaluate((src) => {
      const frame = (window as any).mountFrame({ src, 'aspect-ratio': '' })
      return frame.shadowRoot.querySelector('.d-frame-wrapper').getBoundingClientRect().height
    }, fixture('plain.html'))
    expect(height).toBe(450)
  })

  test('should follow width changes with an automatic aspect ratio', async ({ page }) => {
    await mountFrame(page, { src: fixture('plain.html'), 'aspect-ratio': '' })
    await page.evaluate(() => { document.body.style.width = '400px' })
    await expect.poll(() => wrapperHeight(page)).toBe(400)
    await page.evaluate(() => { document.body.style.width = '1300px' })
    await expect.poll(() => wrapperHeight(page)).toBe(Math.ceil(1300 / (21 / 9)))
  })

  test('should use an explicit aspect ratio and react to its change', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('plain.html'), 'aspect-ratio': '2' })
    await expect.poll(() => wrapperHeight(page)).toBe(400)
    await frame.evaluate(el => el.setAttribute('aspect-ratio', '4'))
    await expect.poll(() => wrapperHeight(page)).toBe(200)
  })

  test('should react to a change of the height attribute', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('plain.html'), height: '300px' })
    await expect.poll(() => wrapperHeight(page)).toBe(300)
    await frame.evaluate(el => el.setAttribute('height', '120px'))
    await expect.poll(() => wrapperHeight(page)).toBe(120)
  })

  test('should fall back to the aspect ratio when the height attribute is removed', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('plain.html'), height: '300px', 'aspect-ratio': '2' })
    await expect.poll(() => wrapperHeight(page)).toBe(300)
    await frame.evaluate(el => el.removeAttribute('height'))
    await expect.poll(() => wrapperHeight(page)).toBe(400)
  })

  test('should follow the height of the child content', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '' })
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    const child = await initializedChild(page)
    await child.evaluate(() => { document.getElementById('content')!.style.height = '350px'; document.body.appendChild(document.createElement('span')) })
    await expect.poll(() => wrapperHeight(page)).toBe(350)
    // shrinking matters as much as growing, the frame must not keep a blank area
    await child.evaluate(() => { document.getElementById('content')!.style.height = '100px'; document.body.appendChild(document.createElement('span')) })
    await expect.poll(() => wrapperHeight(page)).toBe(100)
  })

  test('should follow a height change made by a window resize of the child', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '' })
    const child = await initializedChild(page)
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    // a responsive layout: no DOM mutation, only a style change triggered by the frame width
    await child.evaluate(() => {
      const style = document.createElement('style')
      style.textContent = '@media (max-width: 500px) { #content { height: 500px !important; } }'
      document.head.appendChild(style)
    })
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    await page.evaluate(() => { document.body.style.width = '400px' })
    await expect.poll(() => wrapperHeight(page)).toBe(500)
  })

  test('should apply the offset of data-iframe-height', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '' })
    const child = await initializedChild(page)
    await child.evaluate(() => { document.getElementById('content')!.setAttribute('data-iframe-height', '20'); document.body.appendChild(document.createElement('span')) })
    await expect.poll(() => wrapperHeight(page)).toBe(220)
  })

  test('should ignore the child height with resize="no"', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: 'no', height: '120px' })
    await initializedChild(page)
    await page.waitForTimeout(200)
    expect(await wrapperHeight(page)).toBe(120)
  })

  test('should let the child height win over the height attribute in resize auto mode', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), height: '120px' })
    await expect.poll(() => wrapperHeight(page)).toBe(200)
  })

  test('should send the height again after a reinit-height, even if it did not change', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '', height: '120px' })
    const child = await initializedChild(page)
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    // the child goes to a page that fills the frame (like the full pages of portals): no measured element
    await child.evaluate(() => {
      (window as any).previousPage = document.getElementById('content')!
      ;(window as any).previousPage.remove()
      ;(window as any).dFrameContent.reinitHeight()
    })
    await expect.poll(() => wrapperHeight(page)).toBe(120)
    await page.waitForTimeout(200)
    expect(await wrapperHeight(page)).toBe(120)
    // then back to a page with the same height as before
    await child.evaluate(() => { document.body.prepend((window as any).previousPage) })
    await expect.poll(() => wrapperHeight(page)).toBe(200)
  })

  test('should set the scrolling attribute of the iframe from the resize mode', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '' })
    const iframe = page.locator('d-frame iframe')
    await expect(iframe).toHaveAttribute('scrolling', 'no')
    await page.evaluate(() => document.querySelector('d-frame')!.remove())
    await mountFrame(page, { src: fixture('plain.html'), height: '100px' })
    await expect(page.locator('d-frame iframe')).toHaveAttribute('scrolling', 'auto')
    await page.evaluate(() => document.querySelector('d-frame')!.remove())
    await mountFrame(page, { src: fixture('plain.html'), height: '100px', scrolling: 'yes' })
    await expect(page.locator('d-frame iframe')).toHaveAttribute('scrolling', 'yes')
  })

  test('should forget the aspect ratio height when the attribute is removed', async ({ page }) => {
    const frame = await mountFrame(page, { src: fixture('plain.html'), 'aspect-ratio': '2' })
    await expect.poll(() => wrapperHeight(page)).toBe(400)
    await frame.evaluate(el => el.removeAttribute('aspect-ratio'))
    await expect(page.locator('d-frame .d-frame-wrapper')).toHaveAttribute('style', '')
  })

  test('should use the current width for the aspect ratio after a reinit-height', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), 'aspect-ratio': '2' })
    const child = await initializedChild(page)
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    // the aspect ratio is not maintained while the height comes from the child
    await page.evaluate(() => { document.body.style.width = '600px' })
    await child.evaluate(() => {
      document.getElementById('content')!.remove()
      ;(window as any).dFrameContent.reinitHeight()
    })
    await expect.poll(() => wrapperHeight(page)).toBe(300)
  })

  test('should keep the height of the child after a reinit-height message with reinit-height="no"', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '', 'reinit-height': 'no', height: '120px' })
    const child = await initializedChild(page)
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    await child.evaluate(() => {
      document.getElementById('content')!.remove()
      ;(window as any).dFrameContent.reinitHeight()
      ;(window as any).dFrameContent.sendMessage('after')
    })
    await expect.poll(() => events(page, 'message')).toEqual(['after'])
    expect(await wrapperHeight(page)).toBe(200)
  })

  test('should ignore the elements with data-iframe-height="no" or "false"', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html'), resize: '' })
    const child = await initializedChild(page)
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    await child.evaluate(() => {
      for (const value of ['no', 'false']) {
        const element = document.createElement('div')
        element.setAttribute('data-iframe-height', value)
        element.style.height = '500px'
        document.body.appendChild(element)
      }
      const element = document.createElement('div')
      element.setAttribute('data-iframe-height', '')
      element.style.height = '50px'
      document.body.appendChild(element)
    })
    // only the 3rd element counts, below the 2 ignored ones
    await expect.poll(() => wrapperHeight(page)).toBe(1250)
  })

  test('should switch the scrolling of the iframe to "no" when the child sends a height in auto mode', async ({ page }) => {
    await mountFrame(page, { src: fixture('child.html') })
    await expect.poll(() => wrapperHeight(page)).toBe(200)
    await expect(page.locator('d-frame iframe')).toHaveAttribute('scrolling', 'no')
  })
})
