import { getUrlRelativePath } from './url.js'

const escapeRegExp = (str: string) => str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&')

export type ParsedSyncParams = {
  regexp: RegExp,
  append?: string
}[]

export function parseSyncParams (syncParamsStr: string) {
  const syncParams: ParsedSyncParams = []
  for (const syncParam of syncParamsStr.split(',')) {
    const [pattern = '*', append] = syncParam.split(':')
    const regexpStr = '^' + escapeRegExp(pattern).replace(/\\\*/g, '(.*)') + '$'
    syncParams.push({
      regexp: new RegExp(regexpStr),
      append
    })
  }
  return syncParams
}

export function getChildSrc (fullSrc: string, parentHref: string, syncParams: ParsedSyncParams | undefined, syncPath: null | string) {
  if (!syncParams && !syncPath) return fullSrc
  const childUrl = new URL(fullSrc)
  const parentUrl = new URL(parentHref)
  if (syncParams) {
    parentUrl.searchParams.forEach((value, key) => {
      for (const syncParam of syncParams) {
        if (syncParam.append && !key.startsWith(syncParam.append)) continue
        if (key === syncPath) continue
        const childKey = syncParam.append ? key.replace(syncParam.append, '') : key
        if (!childKey.match(syncParam.regexp)) continue
        childUrl.searchParams.set(childKey, value)
        break
      }
    })
  }
  if (syncPath !== null) {
    let path
    if (syncPath === '#') {
      path = parentUrl.hash.slice(1)
    } else if (syncPath.startsWith('/')) {
      if (parentUrl.pathname.startsWith(syncPath) || (parentUrl.pathname + '/') === syncPath) {
        path = getUrlRelativePath(new URL(syncPath, parentHref), parentUrl)
      } else {
        return null
      }
    } else {
      path = parentUrl.searchParams.get(syncPath)
    }
    if (path) {
      childUrl.pathname = new URL(path, fullSrc).pathname
    }
  }

  return childUrl.href
}

export function getParentUrl (fullSrc: string, childHref: string, currentParentHref: string, syncParams: ParsedSyncParams | undefined, syncPath: null | string) {
  const srcUrl = new URL(fullSrc)
  const parentUrl = new URL(currentParentHref)
  const childUrl = new URL(childHref)

  if (syncParams) {
    // remove existing keys that were deleted from the child
    // use toArray instead of iterator as we mutate parentUrl in the loop
    for (const key of parentUrl.searchParams.keys().toArray()) {
      for (const syncParam of syncParams) {
        if (syncParam.append && !key.startsWith(syncParam.append)) continue
        const childKey = syncParam.append ? key.replace(syncParam.append, '') : key
        if (!childKey.match(syncParam.regexp)) continue
        if (childUrl.searchParams.get(childKey) === null) parentUrl.searchParams.delete(key)
        break
      }
    }

    // apply params from child to parent
    childUrl.searchParams.forEach((value, key) => {
      for (const syncParam of syncParams) {
        if (!key.match(syncParam.regexp)) continue
        if (srcUrl?.searchParams.get(key) === value) continue
        const parentKey = syncParam.append ? (syncParam.append + key) : key
        parentUrl.searchParams.set(parentKey, value)
        break
      }
    })
  }

  if (syncPath !== null && srcUrl) {
    const path = getUrlRelativePath(srcUrl, childUrl)
    if (syncPath === '#') {
      parentUrl.hash = path
    } else if (syncPath.startsWith('/')) {
      // a full path is not accepted, only a path child of the base
      if (path.startsWith('/')) return null
      if (path === '') parentUrl.pathname = syncPath
      else parentUrl.pathname = new URL(path, new URL(syncPath, currentParentHref)).pathname
    } else {
      if (path) parentUrl.searchParams.set(syncPath, path)
      else parentUrl.searchParams.delete(syncPath)
    }
  }

  return parentUrl
}
