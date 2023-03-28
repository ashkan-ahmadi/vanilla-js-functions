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

export const getDOMElementPosition = (element, options = {}) => {
  /**
   * Gets the X and Y positions of an element on the page
   *
   *
   */

  //Finds y value of given object
  //https://stackoverflow.com/a/11986374
  const defaultOptions = {
    topMargin: 10,
  }

  const settings = { ...defaultOptions, ...options }

  const { topMargin } = settings

  let curtop = 0
  if (element.offsetParent) {
    do {
      curtop += element.offsetTop
    } while ((element = element.offsetParent))
    return [curtop] - topMargin
  }
}
