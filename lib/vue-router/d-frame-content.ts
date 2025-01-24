import DFrameContent, { type DFrameContentOptions } from '../DFrameContent.js'
import type { Router } from 'vue-router'

type VueRouterDFrameContentOptions = Omit<DFrameContentOptions, 'updateSrc'>

export function vueRouterDFrameContent (router: Router, options?: VueRouterDFrameContentOptions) {
  return new DFrameContent({
    ...options,
    updateSrc: (src: string, instance: DFrameContent) => {
      // @ts-ignore vue-router v2
      let base = router.options?.base
      if (!base && router.options?.history) base = router.options.history.base
      if (base === null || base === undefined) {
        instance.log('error', 'failed to access base path in router (no router.options.base nor router.options.history.base)', router)
      } else {
        const urlPrefix = window.location.origin + base
        if (!src.startsWith(urlPrefix)) {
          instance.log('info', 'src does not start with base path', src, urlPrefix)
        } else {
          const newRoute = src.replace(urlPrefix, '')
          instance.log('debug', 'applying router.replace', newRoute)
          router.replace(newRoute)
          return
        }
      }

      instance.log('info', 'falling back to updating window.location.href', src)
      window.location.href = src
    }
  })
}
export default vueRouterDFrameContent
