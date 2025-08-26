import { type Ref, onScopeDispose, ref } from 'vue'
import type DFrameContent from '../DFrameContent.js'

export const useDFrameParentUrls = (dFrameContent: DFrameContent) => {
  let computedParentUrls: Record<string, Ref<string | undefined>> = {}
  let listeners: Record<string, (result: string) => void> = {}

  const get = (childHref: string): Ref<string | undefined> => {
    if (computedParentUrls[childHref]) return computedParentUrls[childHref]
    const parentUrl = computedParentUrls[childHref] = ref<string>()
    const listener = (result: string) => {
      parentUrl.value = result
    }
    listeners[childHref] = listener
    dFrameContent.addParentUrlListener(childHref, listener)
    return parentUrl
  }

  const clear = () => {
    for (const [childHref, listener] of Object.entries(listeners)) {
      dFrameContent.removeParentUrlListener(childHref, listener)
    }
    computedParentUrls = {}
    listeners = {}
  }

  onScopeDispose(clear)

  return { get, clear }
}

export default useDFrameParentUrls
