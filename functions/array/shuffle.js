import { removeNonNumberItems } from './remove.js'

export const shuffleItems = array => {
  // The Fisher Yates Method: https://www.w3schools.com/js/js_array_sort.asp
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  const items = array

  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let k = items[i]
    items[i] = items[j]
    items[j] = k
  }

  return items
}

export const shuffleNumbers = array => {
  // The Fisher Yates Method: https://www.w3schools.com/js/js_array_sort.asp
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  const items = removeNonNumberItems(array)

  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let k = items[i]
    items[i] = items[j]
    items[j] = k
  }

  return items
}
