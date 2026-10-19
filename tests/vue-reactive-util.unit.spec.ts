import { test } from '@playwright/test'
import assert from 'node:assert/strict'
import { applySearchParams } from '../lib/vue-reactive/util.ts'

test.describe('vue-reactive applySearchParams', () => {
  test('should set new params and delete missing ones', () => {
    const params: Record<string, string> = { a: '1', b: '2' }
    applySearchParams(params, new URLSearchParams('a=3'))
    assert.deepEqual(params, { a: '3' })
  })

  test('should delete a missing param when another one is added at the same time', () => {
    const params: Record<string, string> = { a: '1', b: '2' }
    applySearchParams(params, new URLSearchParams('a=1&c=3'))
    assert.deepEqual(params, { a: '1', c: '3' })
  })
})
