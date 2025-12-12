import { isInitParentMessage, isMouseEventMessage, isUpdateSrcMessage, type MouseEventMessage, type ChildMessage, type Notif, isParentUrlMessage } from './messages.js'
import inIframe from './utils/in-iframe.js'

const windowEventTypes = [
  'animationstart',
  'webkitAnimationStart',
  'animationiteration',
  'webkitAnimationIteration',
  'animationend',
  'webkitAnimationEnd',
  'input',
  'mouseup',
  'mousedown',
  'orientationchange',
  'afterprint',
  'beforeprint',
  'readystatechange',
  'touchstart',
  'touchend',
  'touchcancel',
  'transitionstart',
  'webkitTransitionStart',
  'MSTransitionStart',
  'oTransitionStart',
  'otransitionstart', 'transitioniteration',
  'webkitTransitionIteration',
  'MSTransitionIteration',
  'oTransitionIteration',
  'otransitioniteration', 'transitionend',
  'webkitTransitionEnd',
  'MSTransitionEnd',
  'oTransitionEnd',
  'otransitionend', 'resize'
]

export type DFrameContentOptions = { updateSrc?: (src: string, instance: DFrameContent) => void }

declare global {
  interface Window { __d_frame__content: DFrameContent }
}

export default class DFrameContent {
  public initialized: boolean = false
  public options: DFrameContentOptions
  private pendingCheckHeight: boolean = false
  public debug: boolean = false
  public id?: string
  private throttledCheckHeight?: () => void
  private lastHeight = 0
  private parentUrlListeners: Record<string, ((result: string) => any)[]> = {}
  private parentUrlResults: Record<string, string> = {}

  constructor (options?: DFrameContentOptions) {
    this.options = options ?? {}

    if (typeof window === 'undefined') return
    if (window.__d_frame__content) {
      throw new Error('DFrameContent was already initialized')
    }
    window.__d_frame__content = this

    const afCallback = () => {
      this.checkHeight()
      this.pendingCheckHeight = false
    }
    this.throttledCheckHeight = () => {
      if (this.pendingCheckHeight) return
      this.pendingCheckHeight = true
      requestAnimationFrame(afCallback)
    }

    window.addEventListener('message', (e) => this.onMessage(e))
    // simple handshake for initialization
    this.postMessageToParent(['df-child', 'init'])
  }

  public log (level: 'debug' | 'info' | 'error', ...args: any[]) {
    if (level === 'debug' && !this.debug) return
    if (level === 'debug') console.timeLog(`d-frame:${this.id}:content`, ...args)
    if (level === 'info') console.info(`d-frame:${this.id}:content`, ...args)
    if (level === 'error') console.error(`d-frame:${this.id}:content`, ...args)
  }

  private onMessage (e: MessageEvent) {
    if (e.source === window.parent && Array.isArray(e.data)) {
      const message = e.data
      if (isInitParentMessage(message)) {
        this.id = message[2].id
        this.debug = !!message[2].debug
        if (this.debug) console.time(`d-frame:${this.id}:content`)
        this.log('debug', 'init handshake is ok', message, this.options)
        if (message[2].src && message[2].src !== window.location.href) {
          this.log('error', `src mismatch at init, maybe the frame navigated before the initialization handshake: ${window.location.href} !== ${message[2].src}`)
        }
        if (message[2].resize !== 'no') this.initResize()
        if (message[2].syncParams || message[2].syncPath || message[2].stateChangeEvents) this.initStateChangeWatcher()
        if (message[2].mouseEvents) this.initMouseEvents(message[2].mouseEvents)
        this.initialized = true
      }
      if (isUpdateSrcMessage(message)) {
        const newSrc = message[2].startsWith('/') ? window.location.origin + message[2] : message[2]
        if (newSrc === window.location.href) return
        this.log('debug', `update src ${window.location.href} -> ${newSrc}`)
        if (this.options.updateSrc) {
          this.options.updateSrc(newSrc, this)
        } else {
          this.log('debug', 'no updateSrc method available, falling back to updating window.location.href', newSrc)
          window.location.href = newSrc
        }
      }
      if (isMouseEventMessage(message)) {
        this.applySyncedMouseEvent(message)
      }
      if (isParentUrlMessage(message)) {
        if (!this.parentUrlListeners[message[2]]) {
          this.log('error', `received getParentUrlResponse message but no matching callback is registered: ${message[2]}`)
        } else {
          for (const listener of this.parentUrlListeners[message[2]]) {
            listener(message[3])
          }
        }
      }
    }
  }

  private postMessageToParent (message: ChildMessage) {
    window.parent.postMessage(message, '*')
  }

  public sendNotif (notif: Notif) {
    this.postMessageToParent(['df-child', 'notif', notif])
  }

  public sendMessage (msg: any) {
    this.postMessageToParent(['df-child', 'custom', msg])
  }

  public ready () {
    this.postMessageToParent(['df-child', 'ready'])
  }

  public reinitHeight () {
    this.postMessageToParent(['df-child', 'reinit-height'])
  }

  // this is not a single-time callback, it can be called multiple times when parent url changes
  public addParentUrlListener (partialChildHref: string, listener: (result: string) => any) {
    const childHref = new URL(partialChildHref, window.location.href).href
    if (!inIframe) {
      listener(childHref)
      return
    }
    if (this.parentUrlResults[childHref]) {
      listener(this.parentUrlResults[childHref])
    }
    this.parentUrlListeners[childHref] = this.parentUrlListeners[childHref] ?? []
    this.parentUrlListeners[childHref].push(listener)
    this.postMessageToParent(['df-child', 'addParentUrlListener', childHref])
  }

  public removeParentUrlListener (partialChildHref: string, listener: (result: string) => any) {
    const childHref = new URL(partialChildHref, window.location.href).href
    if (this.parentUrlListeners[childHref]) {
      this.parentUrlListeners[childHref] = this.parentUrlListeners[childHref].filter(cb => cb !== listener)
      if (!this.parentUrlListeners[childHref].length) {
        delete this.parentUrlListeners[childHref]
        this.postMessageToParent(['df-child', 'removeParentUrlListener', childHref])
      }
    }
  }

  private currentSyncedMouseEvents: Set<MouseEvent['type']> = new Set()

  private initMouseEvents (types: MouseEvent['type'][]) {
    this.log('debug', 'initMouseEvents')
    for (const eventType of types) {
      document.addEventListener(eventType, (e) => {
        if (!(e instanceof MouseEvent)) return
        this.transmitSyncedMouseEvent(['df-global', 'mouse', eventType, { altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, metaKey: e.metaKey }])
      }, true)
    }
  }

  private transmitSyncedMouseEvent (message: MouseEventMessage) {
    if (this.currentSyncedMouseEvents.has(message[2])) {
      this.currentSyncedMouseEvents.delete(message[2])
    } else {
      this.postMessageToParent(message)
    }
  }

  private applySyncedMouseEvent (message: MouseEventMessage) {
    this.currentSyncedMouseEvents.add(message[2])
    const event = new MouseEvent(message[2], { bubbles: true, cancelable: true, view: window, ...message[3] })
    document.body.dispatchEvent(event)
  }

  private initResize () {
    this.log('debug', 'initResize')
    this.checkHeight()
    this.createMutationObserver()
    this.createWindowEventListeners()
  }

  private initStateChangeWatcher () {
    this.log('debug', 'initStateChangeWatcher')
    // monkey patch pushState and replaceState to send all state change info to the parent window
    // this is to compensate the lack of event emission by window.history
    const oldReplaceState = window.history.replaceState

    const newPushState: typeof window.history.pushState = (...args) => {
      const before = window.location.href
      // do a replace instead of a push, the push will be done in the parent window if sync-state is activated
      const ret = oldReplaceState.apply(window.history, args)
      if (window.location.href !== before) {
        this.postMessageToParent(['df-child', 'stateChange', 'push', window.location.href])
      }
      return ret
    }
    window.history.pushState = newPushState

    const newReplaceState: typeof window.history.replaceState = (...args) => {
      const before = window.location.href
      const ret = oldReplaceState.apply(window.history, args)
      if (window.location.href !== before) {
        this.postMessageToParent(['df-child', 'stateChange', 'replace', window.location.href])
      }
      return ret
    }
    window.history.replaceState = newReplaceState
  }

  private createMutationObserver () {
    const body = document.querySelector('body')
    if (!body) throw new Error('DFrameContentManager was initialized before the HTML body')
    if (!this.throttledCheckHeight) throw new Error('throttledCheckHeight is not defined')
    const observer = new window.MutationObserver(this.throttledCheckHeight)
    observer.observe(body, {
      attributes: false,
      attributeOldValue: false,
      characterData: false,
      characterDataOldValue: false,
      childList: true,
      subtree: true,
    })
  }

  private createWindowEventListeners () {
    if (!this.throttledCheckHeight) throw new Error('throttledCheckHeight is not defined')
    for (const eventType of windowEventTypes) {
      window.addEventListener(eventType, this.throttledCheckHeight, { passive: true })
    }
  }

  private checkHeight () {
    const elements = document.querySelectorAll('[data-iframe-height]')
    let maxWithoutOffset = 0
    let max = 0
    for (const element of elements) {
      const dataAttribute = element.getAttribute('data-iframe-height')
      const bottomWithoutOffset = element.getBoundingClientRect().bottom +
        parseFloat(getComputedStyle(element).getPropertyValue('margin-bottom'))
      const bottom = dataAttribute ? (bottomWithoutOffset + parseFloat(dataAttribute)) : bottomWithoutOffset
      if (bottomWithoutOffset > maxWithoutOffset) maxWithoutOffset = bottomWithoutOffset
      if (bottom > max) max = bottom
    }

    max = Math.ceil(max)
    if (maxWithoutOffset > 0 && max !== this.lastHeight) {
      this.postMessageToParent(['df-child', 'height', max])
      this.lastHeight = max
    }
  }
}
