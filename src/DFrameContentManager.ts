import { type Message, isInitParentMessage } from './message-types'

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

export default class DFrameContentManager {
  private pendingCheckHeight: boolean = false
  private debug: boolean = false
  private throttledCheckHeight: () => void

  constructor () {
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
    this.postMessageToParent('init')
  }

  log (level: 'debug' | 'info', ...args: any[]) {
    if (level === 'debug' && !this.debug) return
    if (level === 'debug') console.debug('d-frame-content', ...args)
    if (level === 'info') console.info('d-frame-content', ...args)
  }

  onMessage (e: MessageEvent) {
    if (e.source === window.parent && typeof e.data === 'object' && e.data.dFrame === 'parent') {
      const message = e.data as Message
      if (isInitParentMessage(message)) {
        this.debug = !!message.data.debug
        this.init()
      }
    }
  }

  postMessageToParent (type: string, data?: any) {
    const message: Message = { dFrame: 'child', type, data }
    window.parent.postMessage(message)
  }

  init () {
    this.log('debug', 'init')
    this.checkHeight()
    this.createMutationObserver()
    this.createWindowEventListeners()
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
    this.postMessageToParent('height', max)
  }
}
