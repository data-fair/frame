// this is a good doc about writing web components https://web.dev/articles/custom-elements-best-practices

import { isHeightMessage, isInitChildMessage, type Message } from './message-types.js'

const template = document.createElement('template')
template.innerHTML = `<style>
  :host {
    display: block;
  }
  iframe.d-frame-iframe {
    display: block;
    width: 100%;
    border: none;
    max-height: 100%;
  }
</style><slot name="loader"></slot><iframe class="d-frame-iframe" frameborder="0">`

export default class DFrameElement extends HTMLElement {
  /* reflected attributes */
  static get observedAttributes () { return ['src', 'aspect-ratio', 'height'] }

  get debug () { return this.hasAttribute('debug') }
  set debug (value) {
    if (value) this.setAttribute('debug', '')
    else this.removeAttribute('debug')
  }

  get lazy () { return this.hasAttribute('lazy') }
  set lazy (value) {
    if (value) this.setAttribute('lazy', '')
    else this.removeAttribute('lazy')
  }

  get src () { return this.getAttribute('src') as string }
  set src (value) { this.setAttribute('src', value) }

  get aspectRatio () { return this.getAttribute('aspect-ratio') ?? 'auto' }
  set aspectRatio (value) { this.setAttribute('aspect-ratio', value) }

  get height () { return this.getAttribute('height') }
  set height (value) {
    if (value) this.setAttribute('height', value)
    else this.removeAttribute('height')
  }

  set resize (value) { this.setAttribute('resize', value) }
  get resize (): 'auto' | 'yes' | 'no' {
    const value = this.getAttribute('resize')
    if (value === null) return 'auto'
    if (value === '') return 'yes'
    return value as 'no' | 'yes' | 'auto'
  }

  /* internal state */
  private initialSrc: string | undefined
  private iframeElement: HTMLIFrameElement
  private slotElement: HTMLSlotElement
  private width: number | undefined
  private aspectRatioHeight: number | undefined
  private resizedHeight: number | undefined
  get actualAspectRatio () {
    if (this.aspectRatio !== 'auto') return Number(this.aspectRatio)
    if (!this.width || this.width < 500) return 1
    if (this.width < 800) return 4 / 3
    if (this.width < 1200) return 16 / 9
    return 21 / 9
  }

  constructor () {
    super()
    const root = template.content.cloneNode(true)
    this.slotElement = root.childNodes[1] as HTMLSlotElement
    if (this.resize !== 'yes') this.slotElement.style.display = 'none'

    this.iframeElement = root.childNodes[2] as HTMLIFrameElement
    this.iframeElement.setAttribute('scrolling', this.resize === 'yes' ? 'no' : 'auto')
    this.iframeElement.setAttribute('loading', this.lazy ? 'lazy' : 'eager')

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(root)

    const resizeObserver = new ResizeObserver((entries) => {
      if (this.width !== entries[0].contentRect.width) {
        this.width = entries[0].contentRect.width
        this.updateAspectRatioHeight()
      }
    })
    // TODO: should we use unobserve or disconnect on cleanup ?
    resizeObserver.observe(this)

    window.addEventListener('message', (e) => this.onMessage(e))
  }

  onMessage (e: MessageEvent) {
    if (e.source === this.iframeElement?.contentWindow && typeof e.data === 'object' && e.data.dFrame === 'child') {
      const message = e.data as Message
      this.log('debug', 'received message from child', message)
      if (isInitChildMessage(message)) {
        // simple handshake for initialization
        this.postMessageToIframe('init', { debug: this.debug })
        this.init()
      }
      if (isHeightMessage(message)) {
        this.resizedHeight = message.data
        this.updateStyle()
      }
    }
  }

  init () {
    // called after initial handshake with child
    this.initialSrc = this.src
  }

  postMessageToIframe (type: string, data?: any) {
    const message: Message = { dFrame: 'parent', type, data }
    this.log('debug', 'send message to child', message)
    this.iframeElement?.contentWindow?.postMessage(message)
  }

  updateSrc () {
    if (this.initialSrc) {
      this.postMessageToIframe('updateSrc', this.src)
    } else {
      this.iframeElement.setAttribute('src', this.src)
    }
  }

  updateStyle () {
    let style = ''
    if (this.resize === 'yes' || (this.resize === 'auto' && this.resizedHeight)) {
      this.iframeElement.setAttribute('scrolling', 'no')
      if (this.resizedHeight) {
        this.slotElement.style.display = 'none'
        style += `height:${this.resizedHeight}px;`
      } else {
        if (this.height) {
          this.slotElement.style.display = 'none'
          style += `height:${this.height};`
        } else if (this.aspectRatio !== 'auto') {
          this.slotElement.style.display = 'none'
          style += `height:${this.aspectRatioHeight}px;`
        } else {
          this.slotElement.style.display = 'block'
          style += 'height:0;'
        }
      }
    }
    if (this.resize === 'no' || (this.resize === 'auto' && !this.resizedHeight)) {
      this.iframeElement.setAttribute('scrolling', 'auto')
      if (this.height) {
        style += `height:${this.height};`
      } else {
        style += `height:${this.aspectRatioHeight}px;`
      }
    }
    this.iframeElement.setAttribute('style', style)
  }

  updateAspectRatioHeight () {
    if (!this.width) return
    if (this.resizedHeight) return
    if (this.height) return
    this.aspectRatioHeight = this.width / this.actualAspectRatio
    this.updateStyle()
  }

  log (level: 'debug' | 'info', ...args: any[]) {
    if (level === 'debug' && !this.debug) return
    if (level === 'debug') console.debug('d-frame', ...args)
    if (level === 'info') console.info('d-frame', ...args)
  }

  /* standard custom element callbacks */
  connectedCallback () {
    if (!this.hasAttribute('src')) throw new Error('src is a required attribute')
    this.log('debug', 'connected')
    this.updateSrc()
    this.updateStyle()
  }

  attributeChangedCallback (name: string, oldValue: any, newValue: any) {
    this.log('debug', 'attribute change', name, oldValue, newValue)
    if (name === 'aspect-ratio') this.updateAspectRatioHeight()
    if (name === 'src') this.updateSrc()
    if (name === 'height') this.updateStyle()
  }
}
