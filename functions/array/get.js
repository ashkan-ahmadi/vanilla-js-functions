export const getRandomItem = array => {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return array[Math.floor(Math.random() * array.length)]
}
