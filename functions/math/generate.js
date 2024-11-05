/**
 * TODO: create docblock
 */
export const generateHEXColor = () => {
  // source: https://vanillajstoolkit.com/helpers/createcolor/

  const hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   */
  const shuffle = () => {
    let currentIndex = hex.length
    let temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = hex[currentIndex]
      hex[currentIndex] = hex[randomIndex]
      hex[randomIndex] = temporaryValue
    }
  }

  /**
   * Create a six-digit hex color
   */
  const hexColor = () => {
    // Create the color
    let color = '#'

    // Shuffle the hex values and append
    for (let i = 0; i < 6; i++) {
      shuffle(hex)
      color += hex[0]
    }

    return color
  }

  return hexColor()
}

export const generateRandomNumber = (min = 1, max = 100) => {
  if (min > max) throw new Error('Minimum value cannot be bigger than maximum value')
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

export const generateRangeOfNumbers = (min = 1, max = 10, step = 1) => {
  if (min > max) throw new Error('Minimum value cannot be bigger than maximum value')
  if (step > max - min) throw new Error('Step is bigger than the difference of min and max')

  let result = []

  const round = 1 / step // getting the rounding value dynamically

  for (let i = min; i <= max; i = i + step) {
    result.push(Math.round(i * round) / round) // rounding the numbers
  }

  return result
}
