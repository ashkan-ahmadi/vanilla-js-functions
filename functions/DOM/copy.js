/**
 * You must use this function inside async function and await it
 * Permission must be accepted
 * Writes text to the system clipboard, returning a Promise which is resolved once the text is fully copied into the clipboard.
 * @note This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.
 * @async
 * @param {string} title - The text to be copied
 * @return {undefined}
 */
export const copyTextToClipboard = async text => {
  try {
    return await navigator?.clipboard?.writeText(text)
  } catch (error) {
    console.error(`ERROR: copyTextToClipboard => ${error}`)
  }
}
