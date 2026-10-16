import { test } from '@playwright/test'
import { knownBug } from './support.ts'
import assert from 'node:assert/strict'
import { applySearchParams } from '../lib/vue-reactive/util.ts'

test.describe('vue-reactive applySearchParams', () => {
  test('should set new params and delete missing ones', () => {
    const params: Record<string, string> = { a: '1', b: '2' }
    applySearchParams(params, new URLSearchParams('a=3'))
    assert.deepEqual(params, { a: '3' })
  })

  test('should delete a missing param when another one is added at the same time', () => {
    knownBug('indexOf returns -1 for a new key, splice(-1, 1) then drops the last existing key from the list of keys to delete')
    const params: Record<string, string> = { a: '1', b: '2' }
    applySearchParams(params, new URLSearchParams('a=1&c=3'))
    assert.deepEqual(params, { a: '1', c: '3' })
  })
})
