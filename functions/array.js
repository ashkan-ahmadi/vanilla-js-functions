export const isArray = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return Array.isArray(array)
}

export const hasItemInArray = (item, array) => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  return array.includes(item)
}

export const removeItemFromArray = (item, array) => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  const index = array.indexOf(item)

  if (index > -1) {
    // only splice array when item is found
    array.splice(index, 1) // 2nd parameter means remove one item only
    return true
  }

  return false
}
