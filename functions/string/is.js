export const isPalindrome = string => {
  if (typeof string !== 'string') throw new Error('Must provide a string')
  const regex = /[^A-Za-z0-9]/g
  const lowered = string.toLowerCase()
  const replaced = lowered.replace(regex, '')
  const reverseString = replaced.split('').reverse().join('')
  return replaced === reverseString
}

export const isString = string => typeof string === 'string'
