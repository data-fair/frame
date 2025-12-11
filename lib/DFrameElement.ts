// this is a good doc about writing web components https://web.dev/articles/custom-elements-best-practices

import { isCustomMessage, isAddParentUrlListenerMessage, isRemoveParentUrlListenerMessage, isHeightMessage, isInitChildMessage, isMouseEventMessage, isNotifMessage, isReadyMessage, isStateChangeMessage, type MouseEventMessage, type ParentMessage } from './messages.js'
import { parseSyncParams, getChildSrc, getParentUrl, type ParsedSyncParams } from './utils/sync-params.js'
import { isVIframeUiNotif, convertVIframeUiNotif } from './v-iframe-compat/ui-notif.js'

export interface StateChangeAdapter {
  stateChange (action: 'push' | 'replace', newUrl: URL, element: DFrameElement): void,
  onStateChange (callback: () => void): void
}

class WindowStateChangeAdapter implements StateChangeAdapter {
  stateChange (action: 'push' | 'replace', newUrl: URL, element: DFrameElement): void {
    element.log('debug', 'apply state change on window.history', action, newUrl.href)
    if (action === 'replace') window.history.replaceState(window.history.state, '', newUrl)
    if (action === 'push') window.history.pushState(window.history.state, '', newUrl)
  }

  onStateChange (callback: () => void): void {
    // this is only partial, for a full implementation we would have to monkeypatch window.history
    // I chose to do it in the child but not here
    // therefore support of dynamic changes performed through the history api requires an adapter
    // the idea being that the child makes itself wholly compatible with d-frame and changes its navigation logic to fit it
    // but the parent should be left as untouched as possible and uses d-frame as a black box (custom element)
    window.addEventListener('popstate', callback)
  }
}

// we try to adapt to some of the conventions found out there
const cspNonceMeta = (document.head?.querySelector('meta[property=csp-nonce]') as HTMLMetaElement | undefined) ?? (document.head?.querySelector('meta[name=csp-nonce]') as HTMLMetaElement | undefined)
const cspNonce = cspNonceMeta?.nonce ?? cspNonceMeta?.content

const template = document.createElement('template')
template.innerHTML = `<style${cspNonce ? ` nonce="${cspNonce}"` : ''}>
  :host {
    display: block;
  }
  .d-frame-wrapper {
    height: 100%;
  }
  .d-frame-wrapper .loading-placeholder {
    min-height:150px;
  }
  iframe.d-frame-iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    user-select: none;
  }
</style><div class="d-frame-wrapper"><slot name="loading"><div class="loading-placeholder"></div></slot><iframe class="d-frame-iframe"></iframe></div>`

export class DFrameElement extends HTMLElement {
  get id () { return this.getAttribute('id') ?? this.randomId }
  set id (value) {
    this.setAttribute('id', value)
  }

  get debug () { return this.hasAttribute('debug') }
  set debug (value) {
    if (value) this.setAttribute('debug', '')
    else this.removeAttribute('debug')
  }

  get src () { return this.getAttribute('src') as string }
  set src (value) { this.setAttribute('src', value) }
  get fullSrc () { return this.src.startsWith('/') ? (window.location.origin + this.src) : this.src }

  get scrolling () { return this.getAttribute('scrolling') as string }
  set scrolling (value) { this.setAttribute('scrolling', value) }

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

  get readyMessage () { return this.hasAttribute('ready-message') }
  set readyMessage (value) {
    if (value) this.setAttribute('ready-message', '')
    else this.removeAttribute('ready-message')
  }

  get mouseEvents () {
    const attr = this.getAttribute('mouse-events')
    if (attr === null) return null
    if (attr === '') return ['click', 'dblclick', 'mousedown', 'mouseup']
    return attr.split(',')
  }

  set mouseEvents (value) {
    if (value === null) this.removeAttribute('mouse-events')
    else this.setAttribute('mouse-events', value.join(','))
  }

  get reload () { return this.getAttribute('reload') as string }
  set reload (value) { this.setAttribute('reload', value) }

  get emitIFrameMessages () { return this.hasAttribute('emit-iframe-messages') }
  set emitIFrameMessages (value) {
    if (value) this.setAttribute('emit-iframe-messages', '')
    else this.removeAttribute('emit-iframe-messages')
  }

  public adapter: StateChangeAdapter
  public windowAdapter: StateChangeAdapter

  /* internal state */
  private connected: boolean = false
  private childInitialized: boolean = false
  private currentChildSrc: string | null = null
  private parsedSyncParams: ParsedSyncParams | undefined
  private wrapperElement: HTMLDivElement
  private slotElement: HTMLSlotElement
  private iframeElement: HTMLIFrameElement
  private width: number | undefined
  private aspectRatioHeight: number | undefined
  private resizedHeight: number | undefined
  private randomId: string
  private iframeLoaded: boolean = false
  private ready: boolean = false
  private iframeExtraAttrs: { [key: string]: string } = {}
  private resizeObserver: ResizeObserver
  private boundOnMessage: (e: MessageEvent) => void = (e) => this.onMessage(e)
  private mouseEventListeners: { [key: string]: (e: any) => void } = {}
  private parentUrlListeners: Record<string, string> = {}

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
    this.wrapperElement = root.childNodes[1] as HTMLDivElement
    this.slotElement = this.wrapperElement.childNodes[0] as HTMLSlotElement

    this.iframeElement = this.wrapperElement.childNodes[1] as HTMLIFrameElement
    this.iframeElement.style.cssText = 'visibility:hidden;position:absolute;height:0px;'
    this.iframeElement.addEventListener('load', () => {
      if (this.iframeElement.getAttribute('src')) {
        this.log('debug', 'iframe loaded')
        this.iframeLoaded = true
        this.dispatchEvent(new CustomEvent('iframe-load'))
        if (this.resize !== 'yes' && !this.readyMessage) {
          this.ready = true
          this.dispatchEvent(new CustomEvent('ready'))
          this.updateStyle()
        }
      }
    })

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(root)

    this.resizeObserver = new ResizeObserver((entries) => {
      // make this callback insensitive to micro changes
      if (this.width === undefined || Math.abs(this.width - entries[0].contentRect.width) > 2) {
        this.width = entries[0].contentRect.width
        this.updateAspectRatioHeight()
      }
    })

    this.adapter = this.windowAdapter = new WindowStateChangeAdapter()
  }

  onMessage (e: MessageEvent) {
    if (this.emitIFrameMessages) {
      this.dispatchEvent(new CustomEvent('iframe-message', { detail: e.data }))
    }
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
            stateChangeEvents: this.stateChangeEvents,
            mouseEvents: this.mouseEvents,
            src: this.currentChildSrc
          }])
          this.childInitialized = true
        }
        if (isHeightMessage(message)) {
          this.resizedHeight = message[2]
          if (this.resize === 'yes' && !this.ready && !this.readyMessage) {
            this.ready = true
            this.dispatchEvent(new CustomEvent('ready'))
          }
          this.updateStyle()
        }
        if (isStateChangeMessage(message)) {
          this.currentChildSrc = message[3]
          if ((this.parsedSyncParams || this.syncPath)) {
            const newParentUrl = getParentUrl(this.fullSrc, message[3], window.location.href, this.parsedSyncParams, this.syncPath)
            if (newParentUrl === null) {
              this.log('debug', 'failed to process newParentUrl, ignore state change')
            } else {
              if (newParentUrl.href !== window.location.href) {
                this.log('debug', 'apply state change to parent', message[2], newParentUrl.href)
                try {
                  this.adapter.stateChange(message[2], newParentUrl, this)
                } catch (err) {
                  this.log('error', 'failed to apply state change to parent using custom adapter', err)
                  this.windowAdapter.stateChange(message[2], newParentUrl, this)
                }
              }
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
        if (isReadyMessage(message)) {
          this.ready = true
          this.dispatchEvent(new CustomEvent('ready'))
          this.updateStyle()
        }
        if (isMouseEventMessage(message)) {
          this.applySyncedMouseEvent(message)
        }
        if (isAddParentUrlListenerMessage(message)) {
          const parentUrl = getParentUrl(this.fullSrc, message[2], window.location.href, this.parsedSyncParams, this.syncPath)
          if (parentUrl) {
            this.parentUrlListeners[message[2]] = parentUrl.href
            this.postMessageToChild(['df-parent', 'parentUrl', message[2], parentUrl.href])
          }
        }
        if (isRemoveParentUrlListenerMessage(message)) {
          delete this.parentUrlListeners[message[2]]
        }
      } else if (isVIframeUiNotif(message)) {
        // maintain compatibility with v-iframe notifications sent through postMessage
        this.dispatchEvent(new CustomEvent('notif', { detail: convertVIframeUiNotif(message.uiNotification) }))
      }
    }
  }

  postMessageToChild (message: ParentMessage) {
    this.log('debug', 'send message to child', message)
    this.iframeElement?.contentWindow?.postMessage(message, '*')
  }

  updateSrc () {
    if (!this.connected) return

    for (const [childHref, existingParentUrl] of Object.entries(this.parentUrlListeners)) {
      const parentUrl = getParentUrl(this.fullSrc, childHref, window.location.href, this.parsedSyncParams, this.syncPath)
      if (parentUrl) {
        if (parentUrl.href !== existingParentUrl) {
          this.parentUrlListeners[childHref] = parentUrl.href
          this.postMessageToChild(['df-parent', 'parentUrl', childHref, parentUrl.href])
        }
      }
    }

    const iframeSrc = getChildSrc(this.fullSrc, window.location.href, this.parsedSyncParams, this.syncPath)
    if (!iframeSrc) return
    if (iframeSrc === this.currentChildSrc) return
    this.currentChildSrc = iframeSrc
    if (this.childInitialized) {
      this.postMessageToChild(['df-parent', 'updateSrc', iframeSrc])
    } else {
      this.log('debug', 'set src attribute of iframe: ' + iframeSrc)
      this.iframeElement.setAttribute('src', iframeSrc)
    }
  }

  updateStyle () {
    if (!this.connected) return

    // manage height of iframe wrapper
    let wrapperHeight: string | undefined
    if (this.resizedHeight) {
      this.log('debug', 'height of iframe based on resize message: ' + this.resizedHeight)
      wrapperHeight = this.resizedHeight + 'px'
    } else {
      if (this.height) {
        this.log('debug', 'height of iframe based on direct attribute: ' + this.height)
        wrapperHeight = this.height
      } else if (this.aspectRatio !== null) {
        this.log('debug', 'height of iframe based on aspect ratio: ' + this.aspectRatioHeight)
        wrapperHeight = this.aspectRatioHeight + 'px'
      }
    }
    if (wrapperHeight !== undefined) {
      this.log('debug', 'set height iframe wrapper: ' + wrapperHeight)
      this.wrapperElement.style.cssText = `height:${wrapperHeight};min-height:0;`
    } else {
      this.wrapperElement.style.cssText = ''
    }

    // set scrolling attribute of iframe
    if (this.scrolling) {
      this.log('debug', 'explicitly set of scrolling attribute of iframe: ' + this.scrolling)
      this.iframeElement.setAttribute('scrolling', this.scrolling)
    } else {
      if (this.resize === 'yes' || (this.resize === 'auto' && this.resizedHeight)) {
        if (this.iframeElement.getAttribute('scrolling') !== 'no') {
          this.log('debug', 'implicitly set scrolling attribute of iframe: no')
          this.iframeElement.setAttribute('scrolling', 'no')
        }
      } else {
        if (this.iframeElement.getAttribute('scrolling') !== 'auto') {
          this.log('debug', 'implicitly set scrolling attribute of iframe: auto')
          this.iframeElement.setAttribute('scrolling', 'auto')
        }
      }
    }

    // toggle loading slot vs iframe visibility
    if (this.ready && this.iframeElement.getAttribute('style') !== '') {
      this.log('debug', 'toggle loading slot and iframe visibility')
      this.iframeElement.style.cssText = ''
      this.slotElement.style.cssText = 'display:none;'
    }
  }

  updateAspectRatioHeight () {
    if (!this.width) return
    if (this.aspectRatio === null) return
    if (this.resizedHeight) return
    if (this.height) return
    this.aspectRatioHeight = Math.ceil(this.width / this.actualAspectRatio)
    this.updateStyle()
  }

  updateIframeExtraAttrs () {
    const previousAttrs = this.iframeExtraAttrs
    const newAttrs: { [key: string]: string } = {}
    for (const name of this.getAttributeNames()) {
      if (name.startsWith('iframe-')) {
        const value = this.getAttribute(name)
        if (value !== null) {
          const attrName = name.slice(7)
          newAttrs[attrName] = value
        }
      }
    }
    this.log('debug', 'update iframe extra attributes', previousAttrs, newAttrs)
    for (const key of Object.keys(previousAttrs)) {
      if (!(key in newAttrs)) {
        this.iframeElement.removeAttribute(key)
      }
    }
    for (const key of Object.keys(newAttrs)) {
      if (newAttrs[key] !== previousAttrs[key]) {
        this.iframeElement.setAttribute(key, newAttrs[key])
      }
    }
  }

  private currentSyncedMouseEvents: Set<MouseEvent['type']> = new Set()

  private initMouseEvents (types: MouseEvent['type'][]) {
    this.log('debug', 'initMouseEvents')
    for (const eventType of types) {
      if (!this.mouseEventListeners[eventType]) {
        const listener = (e: any) => {
          if (!(e instanceof MouseEvent)) return
          this.transmitSyncedMouseEvent(['df-global', 'mouse', eventType, { altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, metaKey: e.metaKey }])
        }
        this.mouseEventListeners[eventType] = listener
        document.addEventListener(eventType, listener, true)
      }
    }
  }

  private transmitSyncedMouseEvent (message: MouseEventMessage) {
    if (this.currentSyncedMouseEvents.has(message[2])) {
      this.currentSyncedMouseEvents.delete(message[2])
    } else {
      this.postMessageToChild(message)
    }
  }

  private applySyncedMouseEvent (message: MouseEventMessage) {
    this.currentSyncedMouseEvents.add(message[2])
    const event = new MouseEvent(message[2], { bubbles: true, cancelable: true, view: window, ...message[3] })
    this.dispatchEvent(event)
  }

  log (level: 'debug' | 'info' | 'error', ...args: any[]) {
    if (level === 'debug' && !this.debug) return
    if (level === 'debug') console.timeLog(`d-frame:${this.id}`, ...args)
    if (level === 'info') console.info(`d-frame:${this.id}`, ...args)
    if (level === 'error') console.error(`d-frame:${this.id}`, ...args)
  }

  /* standard custom element callbacks */
  connectedCallback () {
    if (!this.debug) {
      const globalDebug = window.localStorage.getItem('debug')
      if (globalDebug) {
        const debugParts = globalDebug.split(',')
        if (debugParts.includes('d-frame') || debugParts.includes('d-frame:' + this.id)) this.debug = true
      }
    }
    if (this.debug) console.time(`d-frame:${this.id}`)
    if (!this.hasAttribute('src')) throw new Error('src is a required attribute')
    this.log('debug', 'connected')
    this.connected = true

    if (this.adapter.onStateChange) {
      this.adapter.onStateChange(() => { this.updateSrc() })
    }
    this.resizeObserver.observe(this)
    window.addEventListener('message', this.boundOnMessage)

    if (this.syncParams !== null) this.parsedSyncParams = parseSyncParams(this.syncParams || '*')

    this.updateStyle()
    this.updateIframeExtraAttrs()
    this.updateSrc()
    if (this.mouseEvents) this.initMouseEvents(this.mouseEvents)
  }

  disconnectedCallback () {
    this.log('debug', 'disconnected')
    this.resizeObserver.disconnect()
    window.removeEventListener('message', this.boundOnMessage)
    for (const [eventType, listener] of Object.entries(this.mouseEventListeners)) {
      document.removeEventListener(eventType, listener, true)
      delete this.mouseEventListeners[eventType]
    }
  }

  /* reflected attributes */
  static get observedAttributes () { return ['src', 'aspect-ratio', 'height', 'sync-params', 'sync-path', 'reload'] }
  attributeChangedCallback (name: string, oldValue: any, newValue: any) {
    if (name === 'aspect-ratio') this.updateAspectRatioHeight()
    // if (name.startsWith('iframe-')) this.updateIframeExtraAttrs()
    if (!this.connected) return
    this.log('debug', 'attribute change', name, oldValue, newValue)
    if (name === 'src') this.updateSrc()
    if (name === 'height') this.updateStyle()
    if (name === 'sync-params') this.updateSrc()
    if (name === 'sync-path') this.updateSrc()
    if (name === 'reload') {
      if (!this.currentChildSrc) {
        this.log('error', 'reload attribute changed but the iframe has no current src')
        return
      }
      if (!this.iframeElement.contentWindow?.location) {
        this.log('debug', 'reload attribute changed but no iframe contentWindow, is this a cross domain iframe ?')
        return
      }
      if (!this.iframeLoaded) {
        this.log('debug', 'reload attribute changed before initial loading was complete, ignore it')
        return
      }
      this.log('debug', 'reload iframe with current src', this.currentChildSrc)
      this.childInitialized = false
      this.iframeElement.setAttribute('src', this.currentChildSrc)
      this.iframeElement.contentWindow.location.reload()
    }
  }
}

export default DFrameElement
