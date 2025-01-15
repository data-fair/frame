import DFrameContent from '../DFrameContent.js'
import type { Router } from 'vue-router'
import { applySearchParams } from '../vue-reactive/util.js'

export type VIframeOptions = {
  router?: Router,
  reactiveParams?: Record<string, string>
}

const dFrameContent = new DFrameContent({
  updateSrc: (src: string) => {
    const vIframeOptions = (window as Window & { vIframeOptions?: VIframeOptions }).vIframeOptions

    const reactiveParams = vIframeOptions?.reactiveParams
    if (reactiveParams) {
      const srcUrl = new URL(src)
      if (srcUrl.origin === window.location.origin && srcUrl.pathname === window.location.pathname) {
        applySearchParams(reactiveParams, srcUrl.searchParams)
        return
      }
    }

    if (vIframeOptions?.router) {
      const urlPrefix = window.location.origin + vIframeOptions.router.options.history.base
      if (src.startsWith(urlPrefix)) {
        vIframeOptions.router.replace(src.replace(urlPrefix, ''))
        return
      }
    }

    window.location.href = src
  }
});

(window as (Window & { dFrameContent?: DFrameContent })).dFrameContent = dFrameContent

export default dFrameContent
