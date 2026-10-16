import { test } from '@playwright/test'
import assert from 'node:assert/strict'
import { getPathDirectory, getUrlRelativePath } from '../lib/utils/url.ts'

const getUrlRelativePathShort = (src: string, current: string) => getUrlRelativePath(new URL(src), new URL(current))

test.describe('getPathDirectory utility functions', () => {
  test('should return / on empty path', () => {
    assert.equal(getPathDirectory(''), '/')
  })
  test('should return / on a root file path', () => {
    assert.equal(getPathDirectory('/test'), '/')
  })
  test('should return a full directory path as it is', () => {
    assert.equal(getPathDirectory('/test/'), '/test/')
  })
  test('should return a directory path from a file path', () => {
    assert.equal(getPathDirectory('/test/test'), '/test/')
  })
})

test.describe('getUrlRelativePath utility function', () => {
  test('should return a relative path when the base directory it the same', () => {
    assert.equal(getUrlRelativePathShort('http://te.st/test/', 'http://te.st/test/test'), 'test')
    assert.equal(getUrlRelativePathShort('http://te.st/test/test1', 'http://te.st/test/test2'), 'test2')
  })
  test('should return a full path when the origin is the same but not base directory', () => {
    assert.equal(getUrlRelativePathShort('http://te.st/test1/test', 'http://te.st/test2/test'), '/test2/test')
  })
})
