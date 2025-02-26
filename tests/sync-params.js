import { describe, it } from 'node:test'
import { strict as assert } from 'assert'
import { getChildSrc, getParentUrl, parseSyncParams } from '../lib/utils/sync-params.js'

const getChildSrcShort = (src, parentSearch, syncParams, syncPath) => {
  const parentUrl = new URL('http://te.st')
  parentUrl.search = parentSearch
  const srcUrl = new URL('http://te.st' + src)
  return getChildSrc(srcUrl, parentUrl.href, parseSyncParams(syncParams), syncPath ?? null)
}

const getParentHrefShort = (src, childHref, currentParentHref, syncParams, syncPath) => {
  currentParentHref = 'http://te.st' + currentParentHref
  childHref = 'http://te.st' + childHref
  const srcUrl = new URL('http://te.st' + src)
  return getParentUrl(srcUrl, childHref, currentParentHref, parseSyncParams(syncParams), syncPath ?? null).href
}

describe('sync-params utility functions', () => {
  it('should apply params from parent to child', () => {
    assert.equal(
      getChildSrcShort('/child?param0=0&param1=0', 'param1=1&param2=2', '*'),
      'http://te.st/child?param0=0&param1=1&param2=2'
    )
  })

  it('should apply params based on a pattern', () => {
    assert.equal(
      getChildSrcShort('/child?param0=0&_param1=0', '_param1=1&param2=2', '_*'),
      'http://te.st/child?param0=0&_param1=1'
    )
  })

  it('should apply path from parent to child', () => {
    assert.equal(
      getChildSrcShort('/child1', 'param0=0&p=.%2Fchild2', '*', 'p'),
      'http://te.st/child2?param0=0'
    )
  })

  it('should reflect params from child to parent', () => {
    assert.equal(
      getParentHrefShort('/child?param0=0', '/child?param0=0&param1=1', '/parent', '*'),
      'http://te.st/parent?param1=1'
    )
  })

  it('should remove params from child to parent', () => {
    assert.equal(
      getParentHrefShort('/child', '/child', '/parent?param0=0&param1=1', '*'),
      'http://te.st/parent'
    )
  })

  it('should reflect path from child to parent', () => {
    assert.equal(
      getParentHrefShort('/child?param0=0', '/child2?param0=0&param1=1', '/parent', '*', 'p'),
      'http://te.st/parent?param1=1&p=.%2Fchild2'
    )
  })

  it('should not reflect identical path', () => {
    assert.equal(
      getParentHrefShort('/child', '/child?param1=1', '/parent', '*', 'p'),
      'http://te.st/parent?param1=1'
    )
  })
})
