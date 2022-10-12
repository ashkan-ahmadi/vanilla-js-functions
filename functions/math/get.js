export const getLargestNumber = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.reduce((a, b) => Math.max(a, b), -Infinity)
}

export const getSmallestNumber = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return Math.min(...array)
}

export const getEvenNumbers = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.filter(number => number % 2 === 0)
}

export const getOddNumbers = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.filter(number => number % 2 !== 0)
}

export const getPositiveNumbers = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.filter(number => number >= 0)
}

export const getNegativeNumbers = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.filter(number => number < 0)
}
