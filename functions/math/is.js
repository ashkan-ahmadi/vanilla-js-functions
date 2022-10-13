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

export const isPrimeNumber = number => {
  if (typeof number !== 'number') throw new Error('Must provide a number type.')
  if (number === 1) throw new Error('1 is neither prime nor composite number.')
  if (number < 1) throw new Error('Only positive numbers bigger than 1 can be prime.')

  let isPrime = true

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false
      break
    }
  }

  return isPrime
}

export const isNumber = (number, ignoreType = false) => {
  // isNaN(1) === isNaN('1')
  // typeof 1 !== typeof '1
  return ignoreType ? !isNaN(number) : typeof number === 'number'
}
