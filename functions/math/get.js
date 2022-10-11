export const getLargestNumber = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.reduce((a, b) => Math.max(a, b), -Infinity)
}

export const getSmallestNumber = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return Math.min(...array)
}
