export const generateRandomNumber = (min = 1, max = 100) => {
  if (min > max) throw new Error('Minimum value cannot be bigger than maximum value')
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
