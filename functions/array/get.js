import { isArray } from './is.js'

export const getRandomItem = array => {
  if (!isArray(array)) throw new Error('Argument must be an array')
  return array[Math.floor(Math.random() * array.length)]
}
export const getLastItem = array => {
  if (!isArray(array)) throw new Error('Argument must be an array')
  return array.at(-1)
}
