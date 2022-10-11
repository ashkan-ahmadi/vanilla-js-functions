export const isArray = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return Array.isArray(array)
}
