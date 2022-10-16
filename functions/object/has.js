import { isString, isObject } from '../functions.js'

export const hasKey = (key = '', object = {}) => {
  if (!isObject(object)) throw new Error('Type error: must provide object')
  if (!isString(key)) throw new Error('Type error: must provide string')

  const keys = Object.keys(object) // returns an array of keys in the object

  return keys.includes(key)
}
