import DFrameContent, { type DFrameContentOptions } from '../DFrameContent.js'
import type { Reactive } from 'vue'
import { applySearchParams } from './util.js'

type VueReactiveDFrameContentOptions = Omit<DFrameContentOptions, 'updateSrc'>

let dFrameContent: DFrameContent | null = null

export function VueReactiveDFrameContent (reactiveParams: Reactive<Record<string, string>>, options?: VueReactiveDFrameContentOptions) {
  if (dFrameContent) return dFrameContent
  dFrameContent = new DFrameContent({
    ...options,
    updateSrc: (src: string) => {
      const srcUrl = new URL(src)
      if (srcUrl.origin === window.location.origin && srcUrl.pathname === window.location.pathname) {
        applySearchParams(reactiveParams, srcUrl.searchParams)
      } else {
        window.location.href = src
      }
    }
  })
  return dFrameContent
}
export default VueReactiveDFrameContent
