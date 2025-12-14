import { onScopeDispose, type MaybeRefOrGetter } from 'vue'
import type { RouteLocationRaw, Router } from 'vue-router'
import { useVueRouterDFrameContent } from './d-frame-content.js'
import { toValue, ref, watch, computed } from 'vue'
import inIframe from '../utils/in-iframe.js'
import type DFrameContent from '../DFrameContent.js'

const ssr = typeof window === 'undefined'

export const useParentUrl = (
  location: MaybeRefOrGetter<RouteLocationRaw>,
  router: Router,
  dFrameContent?: DFrameContent
) => {
  if (ssr || !inIframe) {
    return computed(() => router.resolve(toValue(location)).href)
  }

  dFrameContent = dFrameContent ?? useVueRouterDFrameContent()
  let resolved: string | null = null
  let listener: null | ((result: string) => void) = null
  const parentUrl = ref<string | null>(null)

  watch(() => toValue(location), (to) => {
    if (listener && resolved) dFrameContent.removeParentUrlListener(resolved, listener)
    parentUrl.value = null
    resolved = router.resolve(to).href
    listener = (result: string) => { parentUrl.value = result }
    dFrameContent.addParentUrlListener(resolved, listener)
  }, { immediate: true })

  onScopeDispose(() => {
    if (listener && resolved) dFrameContent.removeParentUrlListener(resolved, listener)
  })

  return parentUrl
}

export default useParentUrl
