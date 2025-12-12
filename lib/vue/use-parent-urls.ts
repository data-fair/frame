import { type Ref, onScopeDispose, toRef, reactive } from 'vue'
import type DFrameContent from '../DFrameContent.js'
import type { Router } from 'vue-router'

export const useDFrameParentUrls = (dFrameContent: DFrameContent, router?: Router) => {
  let parentUrls: Record<string, string | null> = reactive({})
  let listeners: Record<string, (result: string) => void> = {}

  const get = (childHref: string): Ref<string | undefined> => {
    if (parentUrls[childHref] === undefined) {
      const resolvedChildHref = router ? router.resolve(childHref).href : childHref

      parentUrls[childHref] = null
      const listener = (result: string) => {
        parentUrls[childHref] = result
      }
      listeners[resolvedChildHref] = listener
      dFrameContent.addParentUrlListener(resolvedChildHref, listener)
    }
    return toRef(() => parentUrls[childHref] ?? undefined)
  }

  const clear = () => {
    for (const [resolvedChildHref, listener] of Object.entries(listeners)) {
      dFrameContent.removeParentUrlListener(resolvedChildHref, listener)
    }
    parentUrls = {}
    listeners = {}
  }

  onScopeDispose(clear)

  return { get, clear, parentUrls }
}

export default useDFrameParentUrls
