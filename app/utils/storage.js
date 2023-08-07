// Store Data in Local Browser
export const setToLS = (key, value) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

// Retrieve Data from Local Browser
export const getFromLS = (key) => {
  let value

  if (typeof window !== 'undefined') {
    value = window.localStorage.getItem(key)
  }

  if (value) {
    return JSON.parse(value)
  }
}
