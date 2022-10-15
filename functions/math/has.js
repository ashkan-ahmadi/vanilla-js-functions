import { isEvenNumber, isNumber, isOddNumber } from './is.js'

export const hasEvenNumbers = array => {
  if (!Array.isArray(array)) throw new Error('Type error: must provide array')

  for (let i = 0; i < array.length; i++) {
    const number = array[i]
    if (isEvenNumber(number)) return true
  }

  return false
}

export const hasOddNumbers = array => {
  if (!Array.isArray(array)) throw new Error('Type error: must provide array')

  for (let i = 0; i < array.length; i++) {
    const number = array[i]
    if (isOddNumber(number)) return true
  }

  return false
}

export const hasZero = array => {
  if (!Array.isArray(array)) throw new Error('Type error: must provide array')

  for (let i = 0; i < array.length; i++) {
    const number = array[i]
    if (number === 0) return true
  }

  return false
}

export const hasBiggerThan = (number, array) => {
  if (!Array.isArray(array)) throw new Error('Type error: must provide array')
  if (!isNumber(number)) throw new Error('Type error: must provide number')

  for (let i = 0; i < array.length; i++) {
    const _number = array[i]
    if (number < _number) return true
  }

  return false
}

export const hasSmallerThan = (number, array) => {
  if (!Array.isArray(array)) throw new Error('Type error: must provide array')
  if (!isNumber(number)) throw new Error('Type error: must provide number')

  for (let i = 0; i < array.length; i++) {
    const _number = array[i]
    if (number > _number) return true
  }

  return false
}
