/**
 * Returns the form's input values as an object
 * Note: Only successful form controls are included in a FormData object, i.e. those with a name and not in a disabled state.
 *
 * @param {HTMLElement} form - the form whose data you want to get
 *
 * @return {object} an object with
 */
export const getFormDataAsObject = form => {
  const formData = new FormData(form)
  return Object.fromEntries(formData)
}

/**
 * Gets the X and Y positions of an element on the page
 * TODO: improve docblock
 */
export const getDOMElementPosition = (element, options = {}) => {
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

/**
 * More accurately check the type of a JavaScript object
 * (c) Chris Ferdinandi, MIT License, https://gomakethings.com
 * @source https://gomakethings.com/toolkit/helpers/gettype/
 * @examples
 *  let arr = getType([]); // array
 *  let obj = getType({}); // object
 *  let str = getType(''); // string
 *  let date = getType(new Date()); // date
 *  let num = getType(1); // number
 *  let fn = getType(function () {}); // function
 *  let reg = getType(/test/i); // regexp
 *  let bool = getType(true); // boolean
 *  let nl = getType(null); // null
 *  let undef = getType(); // undefined
 * @param  {Object} obj The object
 * @return {String}     The object type
 */
export const getType = obj => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
