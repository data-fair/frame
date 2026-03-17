import type { Router } from 'vue-router'

// vue-router 4 stores base in router.options.history.base
// vue-router 5 stores base in router.options.base
type RouterOptionsCompat = { base?: string, history?: { base?: string } }
export function getRouterBase (router: Router): string | undefined {
  const options = router.options as RouterOptionsCompat
  return options.base ?? options.history?.base
}
