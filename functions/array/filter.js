export const filterOutNegativeNumbers = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.filter(item => item >= 0)
}
