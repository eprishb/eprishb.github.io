import React, { useState, useEffect } from 'react'
import { useTheme } from './theme/useTheme'
import { getFromLS } from '~/utils/storage'
import { themeIcons } from '~/assets/img/images'
import styled from 'styled-components'

const ThemeSelector = (props) => {
  const themesFromStore = getFromLS('all-themes')
  const [data, setData] = useState(themesFromStore.data)
  const [themes, setThemes] = useState([])
  const { setMode } = useTheme()

  const themeSwitcher = (selectedTheme) => {
    console.log(selectedTheme)
    setMode(selectedTheme)
    props.setter(selectedTheme)
  }

  useEffect(() => {
    setThemes(Object.keys(data))
  }, [data])

  useEffect(() => {
    props.newTheme && updateThemeIcon(props.newTheme)
  }, [props.newTheme])

  const updateThemeIcon = (theme) => {
    const key = Object.keys(theme)[0]
    const updated = { ...data, [key]: theme[key] }
    setData(updated)
  }

  const ThemeIcon = (props) => {
    console.log(props)
    return (
      <>
        <img
          src={props.icon.src}
          alt="Theme Icon"
          key={props.icon.id}
          style={{ width: 25, height: 25 }}
          onClick={(theme) => themeSwitcher(props.theme)}
        />
      </>
    )
  }
  return (
    <Wrapper>
      {themes.length > 0 &&
        themes.map((theme, index) => (
          <ThemeIcon
            theme={data[theme]}
            icon={themeIcons[index]}
            key={data[theme].id}
          />
        ))}
    </Wrapper>
  )
}

export default ThemeSelector

const Wrapper = styled.div`
	width: 120px;
	height: 39px;
	margin 3px;
`
