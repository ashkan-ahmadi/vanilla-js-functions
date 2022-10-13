export const hasKey = (key = '', object = {}) => {
  const keys = Object.keys(object)

  return keys.includes(key)
}
