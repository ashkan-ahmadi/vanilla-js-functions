export const calculateSum = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.reduce((total, currentItem) => total + currentItem, 0)
}

export const calculateAverage = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  const total = array.reduce((total, currentItem) => total + currentItem, 0)
  const count = array.length
  return total / count
}

export const calculateProduct = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.reduce((total, currentItem) => total * currentItem, 1)
}

export const calculateFactorial = number => {
  if (number < 0) throw new Error('Number provided cannot be negative')
  if (number === 0 || number === 1) return 1
  if (number !== Math.floor(number)) throw new Error('You must use whole numbers. Use the Gamma Function for demicals.')

  // starting at 1
  let total = 1

  for (let i = 1; i <= number; i++) {
    total = total * i
  }

  return total
}

export const calculateAreaOfCircle = (radius = 1) => {
  if (typeof radius !== 'number') throw new Error('Must provide a number type.')
  return Math.PI * Math.pow(radius, 2)
}

export const calculateAreaOfRectangle = (width = 10, height = 1) => {
  if (typeof width !== 'number' || typeof height !== 'number') throw new Error('Must provide a number type.')
  return width * height
}

export const calculateHypotenuse = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Must provide a number type.')
  return Math.sqrt(a * a + b * b)
}

export const calculateDeviationFromMean = (array, mean) => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  if (typeof mean !== 'number') throw new Error('Must provide a number type.')

  return array.map(number => number - mean)
}

export const calculateStandardDeviation = (array, sample = false) => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  // https://www.scribbr.com/statistics/standard-deviation/
  const mean = calculateAverage(array)
  const deviated = calculateDeviationFromMean(array, mean)
  const squared = deviated.map(number => number ** 2)
  const sum = calculateSum(squared)
  const length = array.length
  const variance = sample ? sum / (length - 1) : sum / length
  return Math.sqrt(variance)
}
