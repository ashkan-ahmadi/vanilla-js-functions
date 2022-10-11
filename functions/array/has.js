export const hasItemInArray = (item, array) => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  return array.includes(item)
}
