import { useState } from 'react'
import classes from './ColorBlock.module.scss'

enum COLOR_THEME {
  LIGHT = 'light',
  DARK = 'dark'
}

const mapColorsToClasses = {
  [COLOR_THEME.LIGHT]: classes.block__light,
  [COLOR_THEME.DARK]: classes.block__dark
}

const ColorBlock = () => {
  const [colorTheme, setColorTheme] = useState<COLOR_THEME>(COLOR_THEME.LIGHT)

  const handleColorChange = () => {
    if(colorTheme === COLOR_THEME.LIGHT) {
      setColorTheme(COLOR_THEME.DARK)
    } else if (colorTheme === COLOR_THEME.DARK) {
      setColorTheme(COLOR_THEME.LIGHT)
    } else {
      throw new Error("Unknown theme")
    }

  }
  return (
    <div className={[classes.block, mapColorsToClasses[colorTheme]].join(' ')} onClick={handleColorChange} />
  )
}

export default ColorBlock