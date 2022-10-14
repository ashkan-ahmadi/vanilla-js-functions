import { isString } from './is.js'

export const removeNonStringItems = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  return array.filter(item => isString(item))
}
