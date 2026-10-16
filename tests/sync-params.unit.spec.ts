import { test } from '@playwright/test'
import assert from 'node:assert/strict'
import { getChildSrc, getParentUrl, parseSyncParams } from '../lib/utils/sync-params.ts'

const getChildSrcShort = (src: string, parentSearch: string, syncParams: string, syncPath?: string) => {
  const parentUrl = new URL('http://te.st')
  if (parentSearch.startsWith('#') || parentSearch.startsWith('?') || parentSearch.startsWith('/')) {
    if (parentSearch.startsWith('/')) parentSearch = parentSearch.slice(1)
    parentUrl.href += parentSearch
  } else {
    parentUrl.search += parentSearch
  }
  const srcUrl = new URL('http://te.st' + src)
  return getChildSrc(srcUrl.href, parentUrl.href, parseSyncParams(syncParams), syncPath ?? null)
}

const getParentHrefShort = (src: string, childHref: string, currentParentHref: string, syncParams: string, syncPath?: string) => {
  currentParentHref = 'http://te.st' + currentParentHref
  childHref = 'http://te.st' + childHref
  const srcUrl = new URL('http://te.st' + src)
  return getParentUrl(srcUrl.href, childHref, currentParentHref, parseSyncParams(syncParams), syncPath ?? null)?.href
}

test.describe('sync-params utility functions', () => {
  test('should apply params from parent to child', () => {
    assert.equal(
      getChildSrcShort('/child?param0=0&param1=0', 'param1=1&param2=2', '*'),
      'http://te.st/child?param0=0&param1=1&param2=2'
    )
  })

  test('should apply params based on a pattern', () => {
    assert.equal(
      getChildSrcShort('/child?param0=0&_param1=0', '_param1=1&param2=2', '_*'),
      'http://te.st/child?param0=0&_param1=1'
    )
  })

  test('should apply path from parent to child', () => {
    assert.equal(
      getChildSrcShort('/child1', 'param0=0&p=child2', '*', 'p'),
      'http://te.st/child2?param0=0'
    )
  })

  test('should apply path in hash from parent to child', () => {
    assert.equal(
      getChildSrcShort('/child1', '?param0=0#child2', '*', '#'),
      'http://te.st/child2?param0=0'
    )
  })

  test('should apply path in path from parent to child', () => {
    assert.equal(
      getChildSrcShort('/children/', '/base/child2?param0=0', '*', '/base/'),
      'http://te.st/children/child2?param0=0'
    )
  })

  test('should apply path in path from parent to child when the parent is the base without trailing slash', () => {
    assert.equal(
      getChildSrcShort('/children/', '/base?param0=0', '*', '/base/'),
      'http://te.st/children/?param0=0'
    )
  })

  test('do not reflect parent state change that goes out of the base path', () => {
    assert.equal(
      getChildSrcShort('/children/', '/anotherdir', '*', '/base/'),
      null
    )
  })

  test('should reflect params from child to parent', () => {
    assert.equal(
      getParentHrefShort('/child?param0=0', '/child?param0=0&param1=1', '/parent', '*'),
      'http://te.st/parent?param1=1'
    )
  })

  test('should remove params from child to parent', () => {
    assert.equal(
      getParentHrefShort('/child', '/child', '/parent?param0=0&param1=1', '*'),
      'http://te.st/parent'
    )
  })

  test('should reflect path from child to parent in query param', () => {
    assert.equal(
      getParentHrefShort('/child?param0=0', '/child2?param0=0&param1=1', '/parent', '*', 'p'),
      'http://te.st/parent?param1=1&p=child2'
    )
  })

  test('should not reflect identical path', () => {
    assert.equal(
      getParentHrefShort('/child', '/child?param1=1', '/parent', '*', 'p'),
      'http://te.st/parent?param1=1'
    )
  })

  test('should reflect path from child to parent in hash', () => {
    assert.equal(
      getParentHrefShort('/child', '/child2', '/parent', '*', '#'),
      'http://te.st/parent#child2'
    )
  })

  test('should reflect path from child to parent in path', () => {
    assert.equal(
      getParentHrefShort('/child', '/child2', '/parent', '*', '/base/'),
      'http://te.st/base/child2'
    )
  })

  test('should reflect path from child (in a directory) to parent in path', () => {
    assert.equal(
      getParentHrefShort('/dir/', '/dir/child2', '/parent', '*', '/base/'),
      'http://te.st/base/child2'
    )
    assert.equal(
      getParentHrefShort('/dir/', '/dir', '/parent', '*', '/base/'),
      'http://te.st/base/'
    )
    assert.equal(
      getParentHrefShort('/dir/', '/dir/', '/parent', '*', '/base/'),
      'http://te.st/base/'
    )
  })

  test('do not reflect child state change that goes out of the base path', () => {
    assert.equal(
      getParentHrefShort('/dir/', '/another-dir/child', '/parent', '*', '/base/'),
      undefined
    )
  })

  test('should reflect path from child (in a directory without trailing /) to parent in path', () => {
    assert.equal(
      getParentHrefShort('/dir/', '/dir', '/parent', '*', '/base/'),
      'http://te.st/base/'
    )
  })
})

test.describe('sync-params round trips', () => {
  test('should reflect a child param going back to its value in src', () => {
    // the child moves from page=1 (its src) to page=2, then back to page=1
    const parentHref = getParentHrefShort('/child?page=1', '/child?page=2', '/parent', '*')
    assert.equal(parentHref, 'http://te.st/parent?page=2')
    const backHref = getParentHrefShort('/child?page=1', '/child?page=1', '/parent?page=2', '*')
    // the parent must not keep page=2, it would be synced back to the child
    assert.equal(getChildSrcShort('/child?page=1', new URL(backHref!).search, '*'), 'http://te.st/child?page=1')
  })
})
