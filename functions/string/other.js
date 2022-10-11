export const capitalizeFirstLetter = string => {
  if (typeof string !== 'string') throw new Error('Must provide a string')

  return string.charAt(0).toUpperCase() + string.slice(1)
}
