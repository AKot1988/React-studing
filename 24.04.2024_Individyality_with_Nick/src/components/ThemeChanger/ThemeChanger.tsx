import {useState, useEffect} from 'react'
import classes from './ThemeChanger.module.scss'

enum THEMES {
  LIGHT = "LIGHT",
  DARK = "DARK"
}

const mapClassesToTheme = Object.freeze({
  [THEMES.LIGHT]: classes.themeBtn__light,
  [THEMES.DARK]: classes.themeBtn__dark
})

const ThemeChanger = () => {
  const [theme, setTheme] = useState<THEMES>(localStorage.getItem('myTheme') as THEMES || THEMES.LIGHT)
  console.log('theme - ', theme)
  const buttonClasses = [classes.themeBtn, mapClassesToTheme[theme]]

  const handleThemeChange = (prevTheme:THEMES) => {
    if(prevTheme === THEMES.LIGHT) {
      return THEMES.DARK
    } else if (prevTheme === THEMES.DARK) {
      return THEMES.LIGHT
    } else {
      throw new Error("Unknown theme")
    }
  }

  useEffect(() => {
    console.log('setting theme to LS', theme)
    localStorage.setItem('myTheme', theme)
  }, [theme])
  
  return (
    <>
     <button className={buttonClasses.join(' ')} onClick={() => setTheme(handleThemeChange)}>Change theme</button>
    </>
  )
}

export default ThemeChanger