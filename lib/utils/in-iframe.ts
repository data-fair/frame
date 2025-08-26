const inIframe = (() => {
  try {
    return window.top !== window.self
  } catch (e) {
    return true
  }
})()

export default inIframe
