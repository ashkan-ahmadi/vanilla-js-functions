export const $ = target => document.querySelector(target)

export const $$ = target => document.querySelectorAll(target)

export const addGlobalEventListener = (type, selector, callback) => {
  // https://www.youtube.com/watch?v=XF1_MlZ5l6M
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}

export const scrollToElementById = (id, options = {}) => {
  //Finds y value of given object
  //https://stackoverflow.com/a/11986374

  /*
   * Scrolls the page to an element based on its id
   * @param id String the id of the element to scroll to
   * @return undefined
   */

  const defaultOptions = {
    topMargin: 10, // margin from the top of the viewport in pixels
  }

  const settings = { ...defaultOptions, ...options }

  const { topMargin } = settings

  const targetElement = document.getElementById(id)

  if (!targetElement) throw new Error(`No element with id ${id} was found.`)

  function findPos(obj) {
    let curtop = 0
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop
      } while ((obj = obj.offsetParent))
      return [curtop] - topMargin
    }
  }

  window.scroll(0, findPos(targetElement))
}

export const scrollToTopOfPage = () => {
  window.scrollTo(0, 0)
}

export const addParamsToURL = (baseURL, params = {}, encode = false) => {
  /**
   * Adds params to the end of a URL and returns the complete URL with
   *
   * @param {string} baseURL - the URL you want the params to be added to
   * @param {object} [params={}] - an object with keys and values to be added to the URL as params
   * @param {bool} [encode=false] - whether to return the final URL encoded or not (default not encoded)
   *
   * @return {string} complete URL
   */

  const url = new URL(baseURL)
  for (const key in params) {
    const value = params[key]
    url.searchParams.append(key, value)
  }

  return encode ? encodeURIComponent(url.href) : url.href
}

export const getFormDataAsObject = form => {
  /**
   * Returns the form's input values as an object
   * Note: Only successful form controls are included in a FormData object, i.e. those with a name and not in a disabled state.
   *
   * @param {HTMLElement} form - the form whose data you want to get
   *
   * @return {object} an object with
   */

  const formData = new FormData(form)
  return Object.fromEntries(formData)
}
