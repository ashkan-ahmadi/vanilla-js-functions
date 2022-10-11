export const isOddNumber = number => {
  if (typeof number !== 'number') throw new Error('Must provide a number type.')
  return number % 2 !== 0
}

export const isEvenNumber = number => {
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
