import { isNumber } from '../math/is.js'
import { removeNonNumberItems } from './remove.js'

export const sortNumbers = (array, order = 'ASC') => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  if (order !== 'ASC' && order !== 'DESC') throw new Error('Invalid order. Use ASC (default) or DESC')

  const numbersOnly = removeNonNumberItems(array)

  return numbersOnly.sort((a, z) => {
    return order === 'ASC' ? a - z : z - a
  })
}
