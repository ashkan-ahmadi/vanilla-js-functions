import { removeNonStringItems } from './remove.js'

export const sortStrings = (array, order = 'ASC') => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  if (order !== 'ASC' && order !== 'DESC') throw new Error('Invalid order. Use ASC (default) or DESC')

  const stringsOnly = removeNonStringItems(array)

  return stringsOnly.sort()
}
