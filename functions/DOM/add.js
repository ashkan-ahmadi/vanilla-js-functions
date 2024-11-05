export const addGlobalEventListener = (type, selector, callback) => {
  // https://www.youtube.com/watch?v=XF1_MlZ5l6M
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}

/**
 * Adds params to the end of a URL and returns the complete URL with
 *
 * Important: searchParams.append automatically encodes
 *
 * @param {string} baseURL - the URL you want the params to be added to
 * @param {object} [params={}] - an object with keys and values to be added to the URL as params
 * @param {bool} [encode=false] - whether to return the final URL encoded or not (default not encoded)
 *
 * @return {string} complete URL
 */
export const addParamsToURL = (baseURL, params = {}, encode = false) => {
  const url = new URL(baseURL)
  for (const key in params) {
    const value = params[key]
    url.searchParams.append(key, value)
  }

  return encode ? encodeURIComponent(url.href) : url.href
}
