export const setCookie = (cookieName, value, options = {}) => {
  const defaults = {
    expires: 'Thu, 18 Dec 2023 12:00:00 UTC',
    path: '/',
  }

  const settings = { ...defaults, ...options }

  const { expires, path } = settings

  document.cookie = `${cookieName}=${value}; expires=${expires}; path=${path}`
}
