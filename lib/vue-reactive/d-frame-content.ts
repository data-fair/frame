import DFrameContent, { type DFrameContentOptions } from '../DFrameContent.js'
import type { Reactive } from 'vue'
import { applySearchParams } from './util.js'

type VueReactiveDFrameContentOptions = Omit<DFrameContentOptions, 'updateSrc'>

export function VueReactiveDFrameContent (reactiveParams: Reactive<Record<string, string>>, options?: VueReactiveDFrameContentOptions) {
  return new DFrameContent({
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
}
export default VueReactiveDFrameContent
