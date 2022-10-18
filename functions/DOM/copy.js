export const copyTextToClipboard = async text => {
  /**
   * Copy text to the clipboard
   * You must use this function inside async function and await it
   *
   * @param {string} title - The text to be copied
   * @return {undefined}
   */

  try {
    return await navigator.clipboard.writeText(text)
  } catch (error) {
    console.error(`ERROR: copyTextToClipboard => ${error}`)
  }
}
