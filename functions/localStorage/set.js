export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value))
}
