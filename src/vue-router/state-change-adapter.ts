import { type StateChangeAdapter } from '../DFrameElement.js'
import type { Router } from 'vue-router'

class VueRouterDFrameStateChangeAdapter implements StateChangeAdapter {
  router: Router
  constructor (router: Router) {
    this.router = router
  }

  stateChange (action: 'push' | 'replace', newUrl: URL): void {
    if (action === 'push') this.router.push({ query: Object.fromEntries(newUrl.searchParams) })
    if (action === 'replace') this.router.replace({ query: Object.fromEntries(newUrl.searchParams) })
  }

  onStateChange (callback: () => void): void {
    this.router.afterEach(callback)
  }
}

export default (router: Router) => new VueRouterDFrameStateChangeAdapter(router)
