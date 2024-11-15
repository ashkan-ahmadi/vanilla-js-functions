/**
 * Creates a debounced version of a function, delaying its execution until after
 * the specified delay time has elapsed since the last time it was invoked.
 *
 * @param {Function} callback - The function to debounce. This will be executed
 *                              after the delay period.
 * @param {number} [delay=1] - The delay time in seconds before executing the
 *                             callback. Defaults to 1 second.
 *
 * @returns {void}
 *
 * @example
 * const log = () => console.log('Debounced!');
 * debounce(log, 2); // Executes `log` after 2 seconds.
 */
export const debounce = (callback, delay = 1) => {
  let timeout
  timeout = setTimeout(() => {
    callback()
  }, delay * 1000)
}

/**
 * Checks if a given variable is empty.
 *
 * A variable is considered empty if:
 * - It is a falsy value (`false`, `0`, `''`, `null`, `undefined`, `NaN`).
 * - It is an array with no elements.
 * - It is a plain object (i.e., `{}`) with no properties.
 *
 * @param {*} variable - The variable to check.
 * @returns {boolean} - Returns `true` if the variable is empty, otherwise `false`.
 *
 * @example
 * isEmpty(false); // true
 * isEmpty(''); // true
 * isEmpty(0); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty('hello'); // false
 * isEmpty([1, 2, 3]); // false
 * isEmpty({ key: 'value' }); // false
 */
export const isEmpty = variable => {
  if (!variable) return true

  if (Array.isArray(variable) && variable.length === 0) return true

  if (typeof variable === 'object' && variable !== null) {
    if (Object.getPrototypeOf(variable) === Object.prototype && Object.keys(variable).length === 0) {
      return true
    }
  }

  return false
}
