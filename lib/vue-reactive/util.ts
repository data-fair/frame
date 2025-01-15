export const applySearchParams = (reactiveParams: Record<string, string>, searchParams: URLSearchParams) => {
  const existingKeys = Object.keys(reactiveParams)
  searchParams.forEach((value, key) => {
    reactiveParams[key] = value
    existingKeys.splice(existingKeys.indexOf(key), 1)
  })
  existingKeys.forEach(key => {
    delete reactiveParams[key]
  })
}
