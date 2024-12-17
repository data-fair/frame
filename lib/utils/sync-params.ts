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

export function getChildSrc (srcUrl: URL, parentHref: string, syncParams: ParsedSyncParams | undefined, syncPath: null | string) {
  if (!syncParams && !syncPath) return srcUrl.href
  const parentUrl = new URL(parentHref)
  if (syncParams) {
    parentUrl.searchParams.forEach((value, key) => {
      for (const syncParam of syncParams) {
        if (syncParam.append && !key.startsWith(syncParam.append)) continue
        if (key === syncPath) continue
        const childKey = syncParam.append ? key.replace(syncParam.append, '') : key
        if (!childKey.match(syncParam.regexp)) continue
        srcUrl.searchParams.set(childKey, value)
        break
      }
    })
  }
  if (syncPath !== null) {
    const path = parentUrl.searchParams.get(syncPath)
    if (path) {
      srcUrl.pathname = new URL(path, srcUrl).pathname
    }
  }

  return srcUrl.href
}

export function getParentUrl (srcUrl: URL | undefined, childHref: string, currentParentHref: string, syncParams: ParsedSyncParams | undefined, syncPath: null | string) {
  const parentUrl = new URL(currentParentHref)
  const childUrl = new URL(childHref)

  if (syncParams) {
  // remove existing keys that were deleted from the child
    parentUrl.searchParams.forEach((value, key) => {
      for (const syncParam of syncParams) {
        if (syncParam.append && !key.startsWith(syncParam.append)) continue
        const childKey = syncParam.append ? key.replace(syncParam.append, '') : key
        if (!childKey.match(syncParam.regexp)) continue
        if (childUrl.searchParams.get(childKey) === null) parentUrl.searchParams.delete(key)
        break
      }
    })

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
    if (path) parentUrl.searchParams.set(syncPath, path)
    else parentUrl.searchParams.delete(syncPath)
  }

  return parentUrl
}
