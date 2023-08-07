import { useEffect, useState } from 'react'
import { setToLS, getFromLS } from '../utils/storage'

// Custom Hook for Theme
export const useTheme = () => {
  // Get Theme
  const themes = getFromLS('all-themes')
  // Set Theme
  const [theme, setTheme] = useState(themes?.data.primary)
  // Check if Theme is Loaded
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setMode = (mode) => {
    setToLS('theme', mode)
    setTheme(mode)
  }

  const getFonts = () => {
    // const allFonts = _.values(_.mapValues(themes.data, 'font'));
    const allFonts = Object.values(
      Object.fromEntries(
        Object.entries(themes?.data).map(([key, { font }]) => [key, font])
      )
    )
    return allFonts
  }

  useEffect(() => {
    const localTheme = getFromLS('theme')
    localTheme ? setTheme(localTheme) : setTheme(themes?.data.primary)
    setThemeLoaded(true)
  }, [])

  return { theme, themeLoaded, setMode, getFonts }
}
