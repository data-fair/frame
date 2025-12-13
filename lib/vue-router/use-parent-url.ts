import { onScopeDispose, type MaybeRefOrGetter } from 'vue'
import type { RouteLocationRaw, Router } from 'vue-router'
import { useVueRouterDFrameContent } from './d-frame-content.js'
import { toValue, ref, watch } from 'vue'
import inIframe from '../utils/in-iframe.js'
import type DFrameContent from '../DFrameContent.js'

export const useParentUrl = (
  location: MaybeRefOrGetter<RouteLocationRaw>,
  router: Router,
  dFrameContent?: DFrameContent
) => {
  const parentUrl = ref<string | undefined>()
  if (!inIframe) return parentUrl

  dFrameContent = dFrameContent ?? useVueRouterDFrameContent()
  let resolved: string | null = null
  let listener: null | ((result: string) => void) = null

  watch(() => toValue(location), (to) => {
    if (listener && resolved) dFrameContent.removeParentUrlListener(resolved, listener)
    parentUrl.value = undefined
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
