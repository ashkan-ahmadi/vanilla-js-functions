export const roundNumber = (number, options = {}) => {
  const defaultOptions = {
    round: 'nearest',
  }

  const settings = { ...defaultOptions, ...options }
  if (settings.round === 'nearest') return Math.round(number)
  if (settings.round === 'up') return Math.ceil(number)
  if (settings.round === 'down') return Math.floor(number)

  throw new Error('Invalid option. You may use: nearest|up|down')
}
