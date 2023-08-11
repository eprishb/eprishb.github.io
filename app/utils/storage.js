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
  } else {
    return {
      'data': {
        'primary': {
          'id': 'prmry',
          'name': 'Primary',
          'colors': {
            'body': '#202945',
            'text': '#ccdbe5',
            'button': {
              'text': '#ccdbe5',
              'background': 'bf4953',
            },
            'link': {
              'text': '#bf4953',
            },
          },
          'font': 'Lato',
        },
      },
    }
  }
}
