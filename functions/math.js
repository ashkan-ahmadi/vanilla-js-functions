export const round = (number, options = {}) => {
  const defaultOptions = {
    round: 'nearest',
  }

  const settings = { ...defaultOptions, ...options }
  if (settings.round === 'nearest') return Math.round(number)
  if (settings.round === 'up') return Math.ceil(number)
  if (settings.round === 'down') return Math.floor(number)

  throw new Error('Invalid option. You may use: nearest|up|down')
}

export const sum = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.reduce((total, currentItem) => total + currentItem, 0)
}

export const average = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  const total = array.reduce((total, currentItem) => total + currentItem, 0)
  const count = array.length
  return total / count
}

export const product = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.reduce((total, currentItem) => total * currentItem, 1)
}

export const factorial = number => {
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

export const largest = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array.reduce((a, b) => Math.max(a, b), -Infinity)
}

export const smallest = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return Math.min(...array)
}

export const randomNumber = (min = 1, max = 100) => {
  if (min > max) throw new Error('Minimum value cannot be bigger than maximum value')
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
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

export const isOdd = number => {
  if (typeof number !== 'number') throw new Error('Must provide a number type.')
  return number % 2 !== 0
}

export const isEven = number => {
  if (typeof number !== 'number') throw new Error('Must provide a number type.')
  return number % 2 === 0
}

export const isWholeNumber = number => {
  if (typeof number !== 'number') throw new Error('Must provide a number type.')
  return number === Math.trunc(number)
}

export const isFloatNumber = number => {
  if (typeof number !== 'number') throw new Error('Must provide a number type.')
  return number !== Math.trunc(number)
}

export const isNegativeNumber = number => {
  if (typeof number !== 'number') throw new Error('Must provide a number type.')
  return number < 0
}

export const isPositiveNumber = number => {
  if (typeof number !== 'number') throw new Error('Must provide a number type.')
  return number >= 0
}
