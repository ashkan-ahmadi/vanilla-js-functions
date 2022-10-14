import { isNumber } from '../math/is.js'

export const removeDuplicates = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  return Array.from(new Set(array))
}

export const removeItemFromArray = (item, array, mutate = false) => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  const index = array.indexOf(item)

  // if item not found in the array (-1), return false
  if (index === -1) return false

  if (mutate === true) {
    // only splice array when item is found
    array.splice(index, 1) // 2nd parameter means remove one item only
    return array
  }

  return array.filter(ITEM => ITEM !== item)
}

export const removeNonNumberItems = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  return array.filter(item => isNumber(item))
}
