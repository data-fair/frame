import { type StateChangeAdapter } from '../DFrameElement.js'
import type { Reactive } from 'vue'
import { watch } from 'vue'
import { applySearchParams } from './util.js'

class VueReactiveDFrameStateChangeAdapter implements StateChangeAdapter {
  reactiveParams: Reactive<Record<string, string>>
  constructor (reactiveParams: Reactive<Record<string, string>>) {
    this.reactiveParams = reactiveParams
  }

  stateChange (action: 'push' | 'replace', newUrl: URL): void {
    applySearchParams(this.reactiveParams, newUrl.searchParams)
  }

  onStateChange (callback: () => void): void {
    watch(this.reactiveParams, callback)
  }
}

export default (reactiveParams: Reactive<Record<string, string>>) => new VueReactiveDFrameStateChangeAdapter(reactiveParams)
