import DFrameContent, { type DFrameContentOptions } from './DFrameContent.js'
import type { Router } from 'vue-router'

type DFrameContentVueRouter = Omit<DFrameContentOptions, 'updateSrc'> & { router: Router }

export function dFrameContentVueRouter (options: DFrameContentVueRouter) {
  return new DFrameContent({
    updateSrc: (src: string) => {
      const urlPrefix = window.location.origin + options.router.options.history.base
      if (src.startsWith(urlPrefix)) {
        options.router.replace(src.replace(urlPrefix, ''))
      } else {
        window.location.href = src
      }
    }
  })
}
export default dFrameContentVueRouter
