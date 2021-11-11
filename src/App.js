import { useState } from 'react'
import './App.css'
import GlobalStyle from './styles/Global'
import Calculator from './components/Calculator'

import { ThemeProvider } from 'styled-components'

const lightTheme = {
    fontColor: '#000',
    calcBackground: '#fff',
    background: '#f0f2ef', 
    btnColor: '#f0f2ef',
    dropShadow: 'rgb(149 157 165 / 20%) 0px 8px 24px',
}

const darkTheme = {
    fontColor: '#fff',
    calcBackground: '#000',
    background: '#323232', 
    btnColor: '#323232',
    dropShadow: 'rgb(61 65 68 / 20%) 0px 8px 24px',
}

const themes = { light: lightTheme, dark: darkTheme }

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={themes[theme]}>
        <GlobalStyle/>
        <Calculator theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  )
}

export default App