import type { RouteLocationRaw as RouteLocationRaw5 } from 'vue-router'

// Dummy Router type that only exposes the parts we actually use
// This provides compatibility with both vue-router 4 and 5 without exposing the full Router type
export type Router = {
  options: {
    base?: string
    history?: { base?: string }
  }
  push: (to: RouteLocationRaw5) => Promise<any>
  replace: (to: RouteLocationRaw5) => Promise<any>
  resolve: (to: RouteLocationRaw5) => { href: string }
  afterEach: (callback: () => any) => any
}

export type RouteLocationRaw = RouteLocationRaw5

export function getRouterBase (router: Router): string | undefined {
  return router.options.base ?? router.options.history?.base
}
