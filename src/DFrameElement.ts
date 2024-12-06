// this is a good doc about writing web components https://web.dev/articles/custom-elements-best-practices

import { isHeightMessage, isInitChildMessage, type Message } from './message-types'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    :host {
      display: block;
    }
    iframe.d-frame-iframe {
      width: 100%;
      border: none;
      max-height: 100%;
    }
  </style>
`

export default class DFrameElement extends HTMLElement {
  /* reflected attributes */
  static get observedAttributes () { return ['src', 'aspect-ratio'] }

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

  /* internal state */
  private iframe: HTMLIFrameElement
  private width: number | undefined
  private height: number | undefined
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
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))
    this.iframe = document.createElement('iframe')
    this.iframe.setAttribute('class', 'd-frame-iframe')
    this.iframe.setAttribute('frameborder', '0')
    this.iframe.setAttribute('scrolling', 'auto')
    this.iframe.setAttribute('loading', this.lazy ? 'lazy' : 'eager')
    shadowRoot.appendChild(this.iframe)

    const resizeObserver = new ResizeObserver((entries) => {
      if (this.width !== entries[0].contentRect.width) {
        this.width = entries[0].contentRect.width
        this.updateHeight()
      }
    })
    // TODO: should we use unobserve or disconnect on cleanup ?
    resizeObserver.observe(this)

    window.addEventListener('message', (e) => this.onMessage(e))
  }

  onMessage (e: MessageEvent) {
    if (e.source === this.iframe?.contentWindow && typeof e.data === 'object' && e.data.dFrame === 'child') {
      const message = e.data as Message
      this.log('debug', 'received message from child', message)
      if (isInitChildMessage(message)) {
        // simple handshake for initialization
        this.postMessageToIframe('init', { debug: this.debug })
      }
      if (isHeightMessage(message)) {
        this.resizedHeight = this.height = message.data
        this.updateStyle()
      }
    }
  }

  postMessageToIframe (type: string, data?: any) {
    const message: Message = { dFrame: 'parent', type, data }
    this.log('debug', 'send message to child', message)
    this.iframe?.contentWindow?.postMessage(message)
  }

  updateSrc () {
    this.iframe.setAttribute('src', this.src)
  }

  updateStyle () {
    let style = ''
    if (this.height) {
      this.iframe.setAttribute('scrolling', 'no')
      style += `height:${this.height}px;`
    }
    this.iframe.setAttribute('style', style)
  }

  updateHeight () {
    if (!this.width) return
    if (this.resizedHeight) return
    this.height = this.width / this.actualAspectRatio
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
    if (name === 'aspect-ratio') this.updateHeight()
    if (name === 'src') this.updateSrc()
  }
}
