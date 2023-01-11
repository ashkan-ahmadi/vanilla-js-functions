import { isNumber } from './is.js'

export const convertKgToLbs = weight => {
  if (!isNumber(weight)) throw new Error('Type error: must pass number')
  return weight * 2.20462
}

export const convertKmToMiles = distance => {
  if (!isNumber(distance)) throw new Error('Type error: must pass number')
  return distance * 0.621371
}

export const convertLbsToKg = weight => {
  if (!isNumber(weight)) throw new Error('Type error: must pass number')
  return weight / 2.20462
}

export const convertMilesToKm = distance => {
  if (!isNumber(distance)) throw new Error('Type error: must pass number')
  return distance * 1.60934
}

export const convertMtpsToKmps = speed => {
  if (!isNumber(speed)) throw new Error('Type error: must pass number')
  return speed * 3.6
}
