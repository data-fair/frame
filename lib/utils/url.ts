export function getPathDirectory (path: string) {
  if (path.endsWith('/')) return path
  if (path === '') return '/'
  return path.slice(0, path.lastIndexOf('/') + 1)
}

export function getPathWithTrailingSlash (path: string) {
  if (path.endsWith('/')) return path
  return path + '/'
}

export function getUrlRelativePath (srcUrl: URL, currentUrl: URL) {
  if (currentUrl.origin !== srcUrl.origin) return currentUrl.href
  if (getPathWithTrailingSlash(currentUrl.pathname) === getPathWithTrailingSlash(srcUrl.pathname)) return ''
  const srcDirectory = getPathDirectory(srcUrl.pathname)
  if (!currentUrl.pathname.startsWith(srcDirectory)) return currentUrl.pathname
  return currentUrl.pathname.replace(srcDirectory, '')
}

// the payloads of messages come from another window, they can be anything
export function isUrl (value: unknown): value is string {
  if (typeof value !== 'string') return false
  try {
    new URL(value) // eslint-disable-line no-new
    return true
  } catch {
    return false
  }
}

// a URL that can be navigated to or used as a link without running code (no javascript:, data:...)
export function isHttpUrl (value: unknown, base?: string): value is string {
  if (typeof value !== 'string') return false
  try {
    return ['http:', 'https:'].includes(new URL(value, base).protocol)
  } catch {
    return false
  }
}
