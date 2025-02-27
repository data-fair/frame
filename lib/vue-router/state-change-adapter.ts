import { type StateChangeAdapter } from '../DFrameElement.js'
import type { Router } from 'vue-router'

class VueRouterDFrameStateChangeAdapter implements StateChangeAdapter {
  router: Router
  constructor (router: Router) {
    this.router = router
  }

  stateChange (action: 'push' | 'replace', newUrl: URL): void {
    // @ts-ignore vue-router v2
    const base = this.router.options?.base ?? this.router.options.history?.base as string | undefined
    if (base === null || base === undefined) {
      throw new Error('failed to access base path in router (no router.options.base nor router.options.history.base)')
    }
    const urlPrefix = window.location.origin + base
    if (!newUrl.href.startsWith(urlPrefix)) {
      throw new Error('new URL does not start with base path')
    }
    let newRoute = newUrl.href.replace(urlPrefix, '')
    if (!newRoute.startsWith('/')) newRoute = '/' + newRoute
    if (action === 'push') this.router.push(newRoute)
    if (action === 'replace') this.router.replace(newRoute)
  }

  onStateChange (callback: () => void): void {
    this.router.afterEach(callback)
  }
}

export default (router: Router) => new VueRouterDFrameStateChangeAdapter(router)
