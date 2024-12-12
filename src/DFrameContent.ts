import { isInitParentMessage, isUpdateSrcMessage, ChildMessage } from './messages.js'

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
  private options: DFrameContentOptions
  private pendingCheckHeight: boolean = false
  private debug: boolean = false
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

  log (level: 'debug' | 'info', ...args: any[]) {
    if (level === 'debug' && !this.debug) return
    if (level === 'debug') console.debug('d-frame-content', ...args)
    if (level === 'info') console.info('d-frame-content', ...args)
  }

  onMessage (e: MessageEvent) {
    if (e.source === window.parent && Array.isArray(e.data)) {
      const message = e.data
      if (isInitParentMessage(message)) {
        this.debug = !!message[2].debug
        if (message[2].resize !== 'no') this.initResize()
        if (message[2].syncParams) this.initSyncParams()
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

  postMessageToParent (message: ChildMessage) {
    window.parent.postMessage(message)
  }

  initResize () {
    this.log('debug', 'initResize')
    this.checkHeight()
    this.createMutationObserver()
    this.createWindowEventListeners()
  }

  initSyncParams () {
    this.log('debug', 'initSyncParams')
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

  createMutationObserver () {
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

  createWindowEventListeners () {
    for (const eventType of windowEventTypes) {
      window.addEventListener(eventType, this.throttledCheckHeight, { passive: true })
    }
  }

  checkHeight () {
    const elements = document.querySelectorAll('[data-iframe-height]')
    let max = 0
    for (const element of elements) {
      const dataAttribute = element.getAttribute('data-iframe-height')
      const bottom = element.getBoundingClientRect().bottom +
        parseFloat(getComputedStyle(element).getPropertyValue('margin-bottom')) +
        (dataAttribute ? parseFloat(dataAttribute) : 0)
      if (bottom > max) max = bottom
    }
    if (max !== this.lastHeight) {
      this.postMessageToParent(['df-child', 'height', max])
      this.lastHeight = max
    }
  }
}
