import { describe, it } from 'node:test'
import { strict as assert } from 'assert'
import { getChildSrc, getParentHref, parseSyncParams } from '../src/sync-params.js'

const getChildSrcShort = (src, syncParams, parentSearch) => {
  const parentUrl = new URL('http://te.st')
  parentUrl.search = parentSearch
  const srcUrl = new URL('http://te.st' + src)
  return getChildSrc(srcUrl, parseSyncParams(syncParams), parentUrl.href)
}

const getParentHrefShort = (src, syncParams, childHref, currentParentHref) => {
  currentParentHref = 'http://te.st' + currentParentHref
  childHref = 'http://te.st' + childHref
  const srcUrl = new URL('http://te.st' + src)
  return getParentHref(srcUrl, parseSyncParams(syncParams), childHref, currentParentHref)
}

describe('sync-params utility functions', () => {
  it('should apply params from parent to child', () => {
    assert.equal(
      getChildSrcShort('/child?param0=0&param1=0', '*', 'param1=1&param2=2'),
      'http://te.st/child?param0=0&param1=1&param2=2'
    )
  })

  it('should apply params based on a pattern', () => {
    assert.equal(
      getChildSrcShort('/child?param0=0&_param1=0', '_*', '_param1=1&param2=2'),
      'http://te.st/child?param0=0&_param1=1'
    )
  })

  it('should reflect params from child to parent', () => {
    assert.equal(
      getParentHrefShort('/child?param0=0', '*', '/child?param0=0&param1=1', '/parent'),
      'http://te.st/parent?param1=1'
    )
  })
})
