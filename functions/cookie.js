export const getCookie = cookieName => {
  const name = cookieName + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export const setCookie = (cookieName, value, options = {}) => {
  const defaults = {
    expires: 'Thu, 18 Dec 2023 12:00:00 UTC',
    path: '/',
  }

  const settings = { ...defaults, ...options }

  const { expires, path } = settings

  document.cookie = `${cookieName}=${value}; expires=${expires}; path=${path}`
}
