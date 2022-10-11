export const hasNumbers = string => {
  if (typeof string !== 'string') throw new Error('Must provide a string')
  const regex = /\d/g
  return regex.test(string)
}
