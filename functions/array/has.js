export const hasItem = (item, array) => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  return array.includes(item)
}

export const HasAllItems = (subset, reference) => {
  if (!Array.isArray(subset) || !Array.isArray(reference)) throw new Error('Argument must be an array')
  if (subset.length > reference.length) throw new Error('The subset array is bigger than ')

  for (let i = 0; i < subset.length; i++) {
    const item = subset[i]
    // return false is subset contains any item that doesn't exist in the reference array
    if (!reference.includes(item)) return false
  }

  // return true if reference the items in the subset array are found in the reference array
  return true
}
