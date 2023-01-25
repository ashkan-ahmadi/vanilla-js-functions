import { isArray } from './is.js'

export const formatListOfStrings = (input, opts = {}, locale = undefined) => {
  /**
   * Formats all the strings in an array as a list
   *
   * @param array input - an iterable array with strings (required)
   * @param object opts - options (optional)
   * @param string locale - locale to us e.g. 'en-US' default: system's locale
   * @return array of formatted strings
   */

  if (!isArray(input)) throw new Error('Input must be an array')

  const defaultOpts = {
    type: 'conjunction', // conjunction|disjunction|unit
    style: 'long', // long|short|narrow
  }

  const options = { ...defaultOpts, ...opts }

  return new Intl.ListFormat(locale, options).format(input)
}
