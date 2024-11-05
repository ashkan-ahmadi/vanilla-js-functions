import { getDOMElementPosition } from './get.js'

/**
 * Scrolls the page to an element based on its id
 *
 * @param {string} id - the id of the element to scroll to
 * @return {undefined}
 */
export const scrollToElementById = (id, options = {}) => {
  const targetElement = document.getElementById(id)

  if (!targetElement) throw new Error(`No element with id ${id} was found.`)

  window.scroll(0, getDOMElementPosition(targetElement, options))
}

export const scrollToTopOfPage = () => {
  window.scrollTo(0, 0)
}
