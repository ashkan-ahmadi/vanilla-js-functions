export const debounce = (cb, delay = 1) => {
  /**
   * Run a function with a delay
   *
   *
   */
  let timeout
  timeout = setTimeout(() => {
    cb()
  }, delay * 1000)
}
