import { removeNonNumberItems, isNumber, sortNumbers, isObject } from '../functions.js'

export const calculateAreaOfCircle = (radius = 1) => {
  if (typeof radius !== 'number') throw new Error('Must provide a number type.')
  return Math.PI * Math.pow(radius, 2)
}

export const calculateAreaOfRectangle = (width = 10, height = 1) => {
  if (typeof width !== 'number' || typeof height !== 'number') throw new Error('Must provide a number type.')
  return width * height
}

export const calculateAverage = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  const total = array.reduce((total, currentItem) => total + currentItem, 0)
  const count = array.length
  return total / count
}

export const calculateBMI = (weight, height) => {
  if (!isNumber(weight) || !isNumber(height)) throw new Error('Type error: must pass number')
  return weight / height ** 2
}

export const calculateCorrelation = (x, y) => {
  if (!Array.isArray(x) || !Array.isArray(y)) throw new Error('Argument must be an array')
  if (x.length !== y.length) throw new Error('The arrays do not have the same length.')

  // https://corporatefinanceinstitute.com/resources/knowledge/finance/correlation/
  const length = x.length

  // step 2: calculate means
  const meanX = calculateAverage(x)
  const meanY = calculateAverage(y)

  // step 3: calculate deviation of each value
  const a = x.map(number => number - meanX)
  const b = y.map(number => number - meanY)

  // step 4: cross-multiply and then sum
  let multiplied = []
  for (let i = 0; i < length; i++) {
    multiplied.push(a[i] * b[i])
  }
  const sumMultiplied = calculateSum(multiplied)

  // step 5: square each value
  const a2 = a.map(number => number ** 2)
  const b2 = b.map(number => number ** 2)
  const suma2 = calculateSum(a2)
  const sumb2 = calculateSum(b2)

  return sumMultiplied / Math.sqrt(suma2 * sumb2)
}

export const calculateDeviationFromMean = (array, mean) => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  if (typeof mean !== 'number') throw new Error('Must provide a number type.')

  return array.map(number => number - mean)
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

export const calculateHypotenuse = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Must provide a number type.')
  return Math.sqrt(a * a + b * b)
}

export const calculateMedian = array => {
  // https://stackoverflow.com/a/45309555
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  if (array.length === 0) throw new Error('Array is empty')

  const items = removeNonNumberItems([...array])

  const sortedItems = sortNumbers(items)

  const half = Math.floor(sortedItems.length / 2)

  if (sortedItems.length % 2) return sortedItems[half]

  return (sortedItems[half - 1] + sortedItems[half]) / 2.0
}

/**
 * Calculates the monthly payment amount of a loan
 *
 * @source https://www.mymove.com/mortgage/mortgage-calculation/
 * @param {number} values.loanAmount - The total amount of loan borrowed
 * @param {number} values.years - The total number of years to pay back the loan
 * @param {number} values.paymentsPerYear - The number of payments per year
 * @param {number} values.annualInterestRate - The interest rate per period/payment
 * @return {number} amount to pay per period
 */
export const calculatePMT = values => {
  if (!isObject(values)) throw new Error('Type error: must provide an object')

  const { loanAmount, years, paymentsPerYear, annualInterestRate } = values

  const totalPeriods = years * paymentsPerYear
  const interestPerPeriod = annualInterestRate / paymentsPerYear

  const numerator = loanAmount * (interestPerPeriod * (1 + interestPerPeriod) ** totalPeriods)
  const denominator = (1 + interestPerPeriod) ** totalPeriods - 1

  return numerator / denominator
}

export const calculateProduct = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.reduce((total, currentItem) => total * currentItem, 1)
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

export const calculateSum = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  let count = 0

  array.forEach(num => {
    if (isNumber(num)) {
      count = count + num
    }
  })

  return count
}
