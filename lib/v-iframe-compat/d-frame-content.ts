import DFrameContent from '../DFrameContent.js'
import type { Router } from 'vue-router'

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
        const existingKeys = Object.keys(reactiveParams)
        srcUrl.searchParams.forEach((value, key) => {
          reactiveParams[key] = value
          existingKeys.splice(existingKeys.indexOf(key), 1)
        })
        existingKeys.forEach(key => {
          delete reactiveParams[key]
        })
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
