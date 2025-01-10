import DFrameContent, { type DFrameContentOptions } from '../DFrameContent.js'
import type { Router } from 'vue-router'

type VueRouterDFrameContentOptions = Omit<DFrameContentOptions, 'updateSrc'>

export function vueRouterDFrameContent (router: Router, options?: VueRouterDFrameContentOptions) {
  return new DFrameContent({
    ...options,
    updateSrc: (src: string) => {
      const urlPrefix = window.location.origin + router.options.history.base
      if (src.startsWith(urlPrefix)) {
        router.replace(src.replace(urlPrefix, ''))
      } else {
        window.location.href = src
      }
    }
  })
}
export default vueRouterDFrameContent
