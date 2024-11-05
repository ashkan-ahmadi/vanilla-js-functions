/**
 * Run a function with a delay
 */
export const debounce = (callback, delay = 1) => {
  let timeout
  timeout = setTimeout(() => {
    callback()
  }, delay * 1000)
}
