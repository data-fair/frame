// this is a good doc about writing web components https://web.dev/articles/custom-elements-best-practices

import { isCustomMessage, isHeightMessage, isInitChildMessage, isNotifMessage, isStateChangeMessage, type ParentMessage } from './messages.js'
import { parseSyncParams, getChildSrc, getParentUrl, type ParsedSyncParams } from './utils/sync-params.js'
import { isVIframeUiNotif, convertVIframeUiNotif } from './v-iframe-compat/ui-notif.js'

export interface StateChangeAdapter {
  stateChange (action: 'push' | 'replace', newUrl: URL): void,
  onStateChange? (callback: () => void): void
}

class WindowStateChangeAdapter implements StateChangeAdapter {
  stateChange (action: 'push' | 'replace', newUrl: URL): void {
    if (action === 'replace') window.history.replaceState(null, '', newUrl)
    if (action === 'push') window.history.pushState(null, '', newUrl)
  }
}

const template = document.createElement('template')
template.innerHTML = `<style>
  :host {
    display: block;
  }
  iframe.d-frame-iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
  }
</style><slot name="loader"></slot><iframe class="d-frame-iframe" frameborder="0">`

export default class DFrameElement extends HTMLElement {
  get id () { return this.getAttribute('id') ?? this.randomId }
  set id (value) {
    this.setAttribute('id', value)
  }

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

  get aspectRatio () {
    const value = this.getAttribute('aspect-ratio')
    if (value === '') return 'auto'
    return value
  }

  set aspectRatio (value) {
    if (value !== null) this.setAttribute('aspect-ratio', value)
    else this.removeAttribute('aspect-ratio')
  }

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

  get syncParams () { return this.getAttribute('sync-params') }
  set syncParams (value) {
    if (value !== null) this.setAttribute('sync-params', value)
    else this.removeAttribute('sync-params')
  }

  get syncPath () {
    const value = this.getAttribute('sync-path')
    if (value === null) return null
    return value || 'p'
  }

  set syncPath (value) {
    if (value !== null) this.setAttribute('sync-params', value)
    else this.removeAttribute('sync-params')
  }

  get stateChangeEvents () { return this.hasAttribute('state-change-events') }
  set stateChangeEvents (value) {
    if (value) this.setAttribute('state-change-events', '')
    else this.removeAttribute('state-change-events')
  }

  public adapter: StateChangeAdapter

  /* internal state */
  private connected: boolean = false
  private initialSrc: string | undefined
  private srcUrl: URL | undefined
  private parsedSyncParams: ParsedSyncParams | undefined
  private iframeElement: HTMLIFrameElement
  private slotElement: HTMLSlotElement
  private width: number | undefined
  private aspectRatioHeight: number | undefined
  private resizedHeight: number | undefined
  private randomId: string
  get actualAspectRatio () {
    if (this.aspectRatio !== 'auto') return Number(this.aspectRatio)
    if (!this.width || this.width < 500) return 1
    if (this.width < 800) return 4 / 3
    if (this.width < 1200) return 16 / 9
    return 21 / 9
  }

  constructor () {
    super()

    this.randomId = Math.random().toString(36).slice(-6)

    const root = template.content.cloneNode(true)
    this.slotElement = root.childNodes[1] as HTMLSlotElement
    if (this.resize !== 'yes') this.slotElement.style.display = 'none'

    this.iframeElement = root.childNodes[2] as HTMLIFrameElement
    this.iframeElement.setAttribute('scrolling', this.resize === 'yes' ? 'no' : 'auto')
    this.iframeElement.setAttribute('loading', this.lazy ? 'lazy' : 'eager')

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(root)

    const resizeObserver = new ResizeObserver((entries) => {
      // make this callback insensitive to micro changes
      if (this.width === undefined || Math.abs(this.width - entries[0].contentRect.width) > 2) {
        this.width = entries[0].contentRect.width
        this.updateAspectRatioHeight()
      }
    })
    resizeObserver.observe(this)

    this.adapter = new WindowStateChangeAdapter()

    window.addEventListener('message', (e) => this.onMessage(e))
  }

  onMessage (e: MessageEvent) {
    if (e.source === this.iframeElement?.contentWindow) {
      const message = e.data
      this.log('debug', 'received message from child', message)
      if (Array.isArray(e.data)) {
        if (isInitChildMessage(message)) {
          // simple handshake for initialization
          this.postMessageToChild(['df-parent', 'init', {
            id: this.id,
            debug: this.debug,
            resize: this.resize,
            syncParams: this.syncParams !== null,
            syncPath: this.syncPath !== null,
            stateChangeEvents: this.stateChangeEvents
          }])
          this.init()
        }
        if (isHeightMessage(message)) {
          this.resizedHeight = message[2]
          this.updateStyle()
        }
        if (isStateChangeMessage(message)) {
          if ((this.parsedSyncParams || this.syncPath)) {
            const newParentHUrl = getParentUrl(this.srcUrl, message[3], window.location.href, this.parsedSyncParams, this.syncPath)
            if (newParentHUrl.href !== window.location.href) {
              this.adapter.stateChange(message[2], newParentHUrl)
            }
          } if (this.stateChangeEvents) {
            this.dispatchEvent(new CustomEvent('state-change', { detail: [message[2], message[3]] }))
          }
        }
        if (isCustomMessage(message)) {
          this.dispatchEvent(new CustomEvent('message', { detail: message[2] }))
        }
        if (isNotifMessage(message)) {
          this.dispatchEvent(new CustomEvent('notif', { detail: message[2] }))
        }
      } else if (isVIframeUiNotif(message)) {
        // maintain compatibility with v-iframe notifications sent through postMessage
        this.dispatchEvent(new CustomEvent('notif', { detail: convertVIframeUiNotif(message.uiNotification) }))
      }
    }
  }

  init () {
    // called after initial handshake with child
    this.initialSrc = this.src
  }

  postMessageToChild (message: ParentMessage) {
    this.log('debug', 'send message to child', message)
    this.iframeElement?.contentWindow?.postMessage(message)
  }

  updateSrc () {
    if (!this.connected) return
    this.srcUrl = new URL(this.src.startsWith('/') ? (window.location.origin + this.src) : this.src)
    const fullSrc = getChildSrc(this.srcUrl, window.location.href, this.parsedSyncParams, this.syncPath)
    if (this.initialSrc) {
      this.postMessageToChild(['df-parent', 'updateSrc', fullSrc])
    } else {
      this.log('debug', 'set src attribute of iframe: ' + fullSrc)
      this.iframeElement.setAttribute('src', fullSrc)
    }
  }

  updateStyle () {
    if (!this.connected) return
    let style = ''
    if (this.resize === 'yes' || (this.resize === 'auto' && this.resizedHeight)) {
      if (this.iframeElement.getAttribute('scrolling') !== 'no') {
        this.log('debug', 'set scrolling attribute of iframe: no')
        this.iframeElement.setAttribute('scrolling', 'no')
      }
      if (this.resizedHeight) {
        this.log('debug', 'height of iframe based on resize message: ' + this.resizedHeight)
        this.slotElement.style.display = 'none'
        style += `height:${this.resizedHeight}px;`
      } else {
        if (this.height) {
          this.log('debug', 'height of iframe based on direct attribute: ' + this.height)
          this.slotElement.style.display = 'none'
          style += `height:${this.height};`
        } else if (this.aspectRatio !== 'auto' && this.aspectRatio !== null) {
          this.log('debug', 'height of iframe based on aspect ratio: ' + this.aspectRatioHeight)
          this.slotElement.style.display = 'none'
          style += `height:${this.aspectRatioHeight}px;`
        } else {
          this.log('debug', 'use slot element while waiting for resize message')
          this.slotElement.style.display = 'block'
          style += 'height:0;'
        }
      }
    }
    if (this.resize === 'no' || (this.resize === 'auto' && !this.resizedHeight)) {
      if (this.iframeElement.getAttribute('scrolling') !== 'auto') {
        this.log('debug', 'set scrolling attribute of iframe: auto')
        this.iframeElement.setAttribute('scrolling', 'auto')
      }
      if (this.height) {
        this.log('debug', 'height of iframe based on direct attribute: ' + this.height)
        style += `height:${this.height};`
      } else if (this.aspectRatio !== null) {
        this.log('debug', 'height of iframe based on aspect ratio: ' + this.aspectRatioHeight)
        style += `height:${this.aspectRatioHeight}px;`
      }
    }
    this.log('debug', 'set style attribute of iframe: ' + style)
    this.iframeElement.setAttribute('style', style)
  }

  updateAspectRatioHeight () {
    if (!this.width) return
    if (this.aspectRatio === null) return
    if (this.resizedHeight) return
    if (this.height) return
    this.aspectRatioHeight = Math.ceil(this.width / this.actualAspectRatio)
    this.updateStyle()
  }

  log (level: 'debug' | 'info', ...args: any[]) {
    if (level === 'debug' && !this.debug) return
    if (level === 'debug') console.timeLog(`${this.id}:d-frame`, ...args)
    // if (level === 'debug') console.debug(`${this.id}:d-frame`, ...args)
    if (level === 'info') console.info(`${this.id}:d-frame`, ...args)
  }

  /* standard custom element callbacks */
  connectedCallback () {
    if (this.debug) console.time(`${this.id}:d-frame`)
    if (!this.hasAttribute('src')) throw new Error('src is a required attribute')
    this.log('debug', 'connected')
    this.connected = true
    if (this.adapter.onStateChange) {
      this.adapter.onStateChange(() => { this.updateSrc() })
    }
    if (this.syncParams !== null) this.parsedSyncParams = parseSyncParams(this.syncParams || '*')
    this.updateStyle()
    this.updateSrc()
  }

  disconnectedCallback () {
    this.log('debug', 'disconnected')
    if (this.debug) console.timeEnd(`[${this.id}:d-frame]`)
    // TODO: more cleanup (resize observer, etc)
  }

  /* reflected attributes */
  static get observedAttributes () { return ['src', 'aspect-ratio', 'height', 'sync-params', 'sync-path'] }
  attributeChangedCallback (name: string, oldValue: any, newValue: any) {
    if (name === 'aspect-ratio') this.updateAspectRatioHeight()
    if (!this.connected) return
    this.log('debug', 'attribute change', name, oldValue, newValue)
    if (name === 'src') this.updateSrc()
    if (name === 'height') this.updateStyle()
    if (name === 'sync-params') this.updateSrc()
    if (name === 'sync-path') this.updateSrc()
  }
}
