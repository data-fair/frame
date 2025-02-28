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
