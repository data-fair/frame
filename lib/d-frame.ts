import DFrameElement from './DFrameElement.js'

if (!customElements.get('d-frame')) {
  customElements.define('d-frame', DFrameElement)
}
