class DFrame extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback () {
    console.log('connected')
  }

  debug (...args) {
    if (!this.getAttribute('debug')) {
      console.log('d-frame', ...args)
    }
  }

  get src () {
    return this.getAttribute('src') as string
  }
}

customElements.define('d-frame', DFrame)