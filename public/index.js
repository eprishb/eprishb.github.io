'use strict'

// redirection page
document.addEventListener('DOMContentLoaded', () => {
  const trustedLinks = [
    'https://seven-times-design-9d9dc369a453.herokuapp.com/',
  ]
  const urlSelector = window.location.href.match(/url(.*)/)
    ? window.location.href.match(/url(.*)/)[0]
    : window.location.href
  const url = urlSelector.replace('url=', '')

  if (trustedLinks.includes(url)) {
    document.querySelector('#preconnect').href = url
    if (!window.InstallTrigger) {
      document.querySelector('#refresh').content = `100; URL='${url}'`
    } else {
      window.setTimeout(() => {
        window.location.href = url
      }, 6000)
    }
  }
})
