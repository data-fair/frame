export const applySearchParams = (reactiveParams: Record<string, string>, searchParams: URLSearchParams) => {
  searchParams.forEach((value, key) => {
    reactiveParams[key] = value
  })
  for (const key of Object.keys(reactiveParams)) {
    if (!searchParams.has(key)) delete reactiveParams[key]
  }
}
