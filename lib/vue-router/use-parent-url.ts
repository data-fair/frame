import { onScopeDispose, type MaybeRefOrGetter } from 'vue'
import type { RouteLocationRaw, Router } from 'vue-router'
import { useVueRouterDFrameContent } from './d-frame-content.js'
import { toValue, ref, watch, computed } from 'vue'
import inIframe from '../utils/in-iframe.js'
import type DFrameContent from '../DFrameContent.js'

const ssr = typeof window === 'undefined'

export const useParentUrl = (
  location: MaybeRefOrGetter<RouteLocationRaw | undefined>,
  router: Router,
  dFrameContent?: DFrameContent
) => {
  if (ssr || !inIframe) {
    return computed(() => {
      const to = toValue(location)
      if (to === undefined) return to
      return router.resolve(to).href
    })
  }

  dFrameContent = dFrameContent ?? useVueRouterDFrameContent()
  let resolved: string | null | undefined = null
  let listener: null | ((result: string) => void) = null
  const parentUrl = ref<string | null | undefined>(null)

  watch(() => toValue(location), (to) => {
    const href = to === undefined ? undefined : router.resolve(to).href
    // a getter can return a new location object for the same target: keep the listener and its result
    if (href === resolved) return
    if (listener && resolved) dFrameContent.removeParentUrlListener(resolved, listener)
    resolved = href
    listener = null
    if (href === undefined) {
      parentUrl.value = undefined
    } else {
      parentUrl.value = null
      listener = (result: string) => { parentUrl.value = result }
      dFrameContent.addParentUrlListener(href, listener)
    }
  }, { immediate: true })

  onScopeDispose(() => {
    if (listener && resolved) dFrameContent.removeParentUrlListener(resolved, listener)
  })

  return parentUrl
}

export default useParentUrl
