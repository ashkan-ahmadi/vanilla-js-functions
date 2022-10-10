export const getLocalStorage = name => {
  localStorage.getItem(name)
}

export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value))
}
