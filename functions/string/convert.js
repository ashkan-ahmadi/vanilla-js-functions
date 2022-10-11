import { capitalizeFirstLetter } from './other.js'

export const convertToCamelCase = string => {
  if (typeof string !== 'string') throw new Error('Must provide a string')

  let array = []

  if (string.includes('-')) {
    array = string.split('-')
  } else if (string.includes('_')) {
    array = string.split('_')
  } else {
    throw new Error('Unknown format')
  }

  const arrayWithCapitalLetters = array.map((item, index) => {
    return index === 0 ? item : capitalizeFirstLetter(item)
  })

  return arrayWithCapitalLetters.join('')
}
