import DFrameContent from '../DFrameContent.js'
import type { Router } from 'vue-router'
import { applySearchParams } from '../vue-reactive/util.js'

export type VIframeOptions = {
  router?: Router,
  reactiveParams?: Record<string, string> | boolean
}

const dFrameContent = new DFrameContent({
  updateSrc (src: string, instance: DFrameContent) {
    const vIframeOptions = (window as Window & { vIframeOptions?: VIframeOptions }).vIframeOptions

    const reactiveParams = vIframeOptions?.reactiveParams
    if (reactiveParams && typeof reactiveParams === 'object') {
      const srcUrl = new URL(src)
      if (srcUrl.origin === window.location.origin && srcUrl.pathname === window.location.pathname) {
        instance.log('debug', 'applying reactive params', srcUrl.searchParams)
        applySearchParams(reactiveParams, srcUrl.searchParams)
        return
      }
    }

    const router = vIframeOptions?.router
    if (router) {
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
    }

    instance.log('info', 'falling back to updating window.location.href', src)
    window.location.href = src
  }
});

(window as (Window & { dFrameContent?: DFrameContent })).dFrameContent = dFrameContent

export default dFrameContent
