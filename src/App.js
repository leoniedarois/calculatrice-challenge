import './App.css'
import GlobalStyle from './styles/Global'
import Calculator from './components/Calculator'

function App() {
  return (
    <>
      <GlobalStyle/>
      <div>
        <h1>Calcul something :)</h1>
        <Calculator/>
      </div>
    </>
  )
}

export default App
