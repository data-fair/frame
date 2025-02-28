import { describe, it } from 'node:test'
import { strict as assert } from 'assert'
import { getPathDirectory, getUrlRelativePath } from '../lib/utils/url.js'

const getUrlRelativePathShort = (src, current) => getUrlRelativePath(new URL(src), new URL(current))

describe('getPathDirectory utility functions', () => {
  it('should return / on empty path', () => {
    assert.equal(getPathDirectory(''), '/')
  })
  it('should return / on a root file path', () => {
    assert.equal(getPathDirectory('/test'), '/')
  })
  it('should return a full directory path as it is', () => {
    assert.equal(getPathDirectory('/test/'), '/test/')
  })
  it('should return a directory path from a file path', () => {
    assert.equal(getPathDirectory('/test/test'), '/test/')
  })
})

describe('getUrlRelativePath utility function', () => {
  it('should return a relative path when the base directory it the same', () => {
    assert.equal(getUrlRelativePathShort('http://te.st/test/', 'http://te.st/test/test'), 'test')
    assert.equal(getUrlRelativePathShort('http://te.st/test/test1', 'http://te.st/test/test2'), 'test2')
  })
  it('should return a full path when the origin is the same but not base directory', () => {
    assert.equal(getUrlRelativePathShort('http://te.st/test1/test', 'http://te.st/test2/test'), '/test2/test')
  })
})
