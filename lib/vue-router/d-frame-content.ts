import DFrameContent, { type DFrameContentOptions } from '../DFrameContent.js'
import type { Router } from 'vue-router'

type VueRouterDFrameContentOptions = Omit<DFrameContentOptions, 'updateSrc'>

let dFrameContent: DFrameContent | null = null

export function vueRouterDFrameContent (router: Router, options?: VueRouterDFrameContentOptions) {
  if (dFrameContent) return dFrameContent
  dFrameContent = new DFrameContent({
    ...options,
    updateSrc: (src: string, instance: DFrameContent) => {
      // @ts-ignore vue-router v2
      const base = router.options?.base ?? router.options.history?.base
      if (base === null || base === undefined) {
        instance.log('error', 'failed to access base path in router (no router.options.base nor router.options.history.base)', router)
      } else {
        const urlPrefix = window.location.origin + base
        if (!src.startsWith(urlPrefix)) {
          instance.log('info', 'src does not start with base path', src, urlPrefix)
        } else {
          let newRoute = src.replace(urlPrefix, '')
          if (!newRoute.startsWith('/')) newRoute = '/' + newRoute
          instance.log('debug', 'applying router.replace', newRoute)
          router.replace(newRoute)
          return
        }
      }
      instance.log('info', 'falling back to updating window.location.href', src)
      window.location.href = src
    }
  })
  return dFrameContent
}
export default vueRouterDFrameContent
