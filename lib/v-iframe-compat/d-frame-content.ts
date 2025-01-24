import DFrameContent from '../DFrameContent.js'
import type { Router } from 'vue-router'
import { applySearchParams } from '../vue-reactive/util.js'

export type VIframeOptions = {
  router?: Router,
  reactiveParams?: Record<string, string> | boolean
}

const dFrameContent = new DFrameContent({
  updateSrc: (src: string) => {
    const vIframeOptions = (window as Window & { vIframeOptions?: VIframeOptions }).vIframeOptions

    const reactiveParams = vIframeOptions?.reactiveParams
    if (reactiveParams && typeof reactiveParams === 'object') {
      const srcUrl = new URL(src)
      if (srcUrl.origin === window.location.origin && srcUrl.pathname === window.location.pathname) {
        applySearchParams(reactiveParams, srcUrl.searchParams)
        return
      }
    }

    if (vIframeOptions?.router) {
      // @ts-ignore vue-router v2
      let base = vIframeOptions.router.options?.base
      if (!base && vIframeOptions.router.options?.history) base = vIframeOptions.router.options.history.base
      if (!base) {
        console.error('failed to access base path in router (no router.options.base nor router.options.history.base)')
        window.location.href = src
      } else {
        const urlPrefix = window.location.origin + base
        if (src.startsWith(urlPrefix)) {
          vIframeOptions.router.replace(src.replace(urlPrefix, ''))
          return
        }
      }
    }

    window.location.href = src
  }
});

(window as (Window & { dFrameContent?: DFrameContent })).dFrameContent = dFrameContent

export default dFrameContent
