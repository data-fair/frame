import { describe, it } from 'node:test'
import { strict as assert } from 'assert'
import createAdapter from '../lib/vue-router/state-change-adapter.js'

describe('vue-router state change adapter', () => {
  it('should only notify successful navigations', () => {
    let guard
    const adapter = createAdapter({ afterEach: (g) => { guard = g; return () => {} } })
    let calls = 0
    adapter.onStateChange(() => { calls++ })
    guard({}, {}, { type: 8 }) // cancelled navigation
    assert.equal(calls, 0)
    guard({}, {}, undefined)
    assert.equal(calls, 1)
  })
})
