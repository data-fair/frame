import { isInitParentMessage, isUpdateSrcMessage, type ChildMessage, type Notif } from './messages.js'

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

export type DFrameContentOptions = { updateSrc?: (src: string) => void }

export default class DFrameContent {
  public initialized: boolean = false
  public options: DFrameContentOptions
  private pendingCheckHeight: boolean = false
  public debug: boolean = false
  public id?: string
  private throttledCheckHeight: () => void
  private lastHeight = 0

  constructor (options?: DFrameContentOptions) {
    this.options = options ?? {}
    const afCallback = () => {
      this.checkHeight()
      this.pendingCheckHeight = false
    }
    this.throttledCheckHeight = () => {
      if (this.pendingCheckHeight) return
      this.pendingCheckHeight = true
      requestAnimationFrame(afCallback)
    }

    if (typeof window === 'undefined') return
    window.addEventListener('message', (e) => this.onMessage(e))
    // simple handshake for initialization
    this.postMessageToParent(['df-child', 'init'])
  }

  private log (level: 'debug' | 'info', ...args: any[]) {
    if (level === 'debug' && !this.debug) return
    if (level === 'debug') console.timeLog(`${this.id}:d-frame-content`, ...args)
    if (level === 'info') console.info(`${this.id}:d-frame-content`, ...args)
  }

  private onMessage (e: MessageEvent) {
    if (e.source === window.parent && Array.isArray(e.data)) {
      const message = e.data
      if (isInitParentMessage(message)) {
        this.id = message[2].id
        this.debug = !!message[2].debug
        if (this.debug) console.time(`${this.id}:d-frame-content`)
        if (message[2].resize !== 'no') this.initResize()
        if (message[2].syncParams || message[2].syncPath || message[2].stateChangeEvents) this.initStateChangeWatcher()
        this.initialized = true
      }
      if (isUpdateSrcMessage(message)) {
        if (this.options.updateSrc) {
          this.options.updateSrc(message[2].startsWith('/') ? window.location.origin + message[2] : message[2])
        } else {
          window.location.href = message[2]
        }
      }
    }
  }

  private postMessageToParent (message: ChildMessage) {
    window.parent.postMessage(message)
  }

  public sendNotif (notif: Notif) {
    this.postMessageToParent(['df-child', 'notif', notif])
  }

  public sendMessage (msg: any) {
    this.postMessageToParent(['df-child', 'custom', msg])
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
      // do a replace instead of a push, the push will be done in the parent window if sync-state is activated
      const ret = oldReplaceState.apply(window.history, args)
      this.postMessageToParent(['df-child', 'stateChange', 'push', window.location.href])
      return ret
    }
    window.history.pushState = newPushState

    const newReplaceState: typeof window.history.replaceState = (...args) => {
      const ret = oldReplaceState.apply(window.history, args)
      this.postMessageToParent(['df-child', 'stateChange', 'replace', window.location.href])
      return ret
    }
    window.history.replaceState = newReplaceState
  }

  private createMutationObserver () {
    const body = document.querySelector('body')
    if (!body) throw new Error('DFrameContentManager was initialized before the HTML body')
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
    for (const eventType of windowEventTypes) {
      window.addEventListener(eventType, this.throttledCheckHeight, { passive: true })
    }
  }

  private checkHeight () {
    const elements = document.querySelectorAll('[data-iframe-height]')
    let max = 0
    for (const element of elements) {
      const dataAttribute = element.getAttribute('data-iframe-height')
      const bottom = element.getBoundingClientRect().bottom +
        parseFloat(getComputedStyle(element).getPropertyValue('margin-bottom')) +
        (dataAttribute ? parseFloat(dataAttribute) : 0)
      if (bottom > max) max = bottom
    }
    max = Math.ceil(max)
    if (max !== this.lastHeight) {
      this.postMessageToParent(['df-child', 'height', max])
      this.lastHeight = max
    }
  }
}
