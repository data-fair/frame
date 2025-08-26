import { type Ref, onScopeDispose, ref } from 'vue'
import type DFrameContent from '../DFrameContent.js'
import type { Router } from 'vue-router'

export const useDFrameParentUrls = (dFrameContent: DFrameContent, router?: Router) => {
  let computedParentUrls: Record<string, Ref<string | undefined>> = {}
  let listeners: Record<string, (result: string) => void> = {}

  const get = (childHref: string): Ref<string | undefined> => {
    if (computedParentUrls[childHref]) return computedParentUrls[childHref]
    const resolvedChildHref = router ? router.resolve(childHref).href : childHref

    const parentUrl = computedParentUrls[childHref] = ref<string>()
    const listener = (result: string) => {
      parentUrl.value = result
    }
    listeners[resolvedChildHref] = listener
    dFrameContent.addParentUrlListener(resolvedChildHref, listener)
    return parentUrl
  }

  const clear = () => {
    for (const [resolvedChildHref, listener] of Object.entries(listeners)) {
      dFrameContent.removeParentUrlListener(resolvedChildHref, listener)
    }
    computedParentUrls = {}
    listeners = {}
  }

  onScopeDispose(clear)

  return { get, clear }
}

export default useDFrameParentUrls
