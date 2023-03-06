import { isNumber } from './is.js'

export const formatPrice = (input, showCurrencySymbol = false, currency = 'EUR', locale = undefined) => {
  /**
   * Formats a number optionally as a currency
   *
   * @param number input - a number in cents (3892 for 38.92)
   * @param boolean showCurrencySymbol - show the currency symbol or not (default false) optional
   * @param string currency - the currency to display if showCurrencySymbol is true (default: 'EUR')
   * @param string locale - locale to us e.g. 'en-US' default: system's locale
   * @return number a formatted number
   */

  if (!isNumber(input)) throw new Error('Number must be in a number format (e.g. 323.87)')

  const options = {}

  if (showCurrencySymbol) {
    options.style = 'currency'
    options.currency = currency
  }

  return (input / 100).toLocaleString(locale, options)
}
