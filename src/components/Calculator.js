import {ButtonStyle} from '../styles/Bouton'
import {useState} from 'react'

const Calculator = () => {
  const [result, setResult] = useState(0)
  const [operator, setOperator] = useState('')

  return (
    <>
      <ButtonStyle/>
      <div className='wrapperButton'>
        {[...Array(10).keys()].map((num, index) => (<button className='numberButton' onClick={(e) => console.log(e.target.value)} value={num} key={index}>{num}</button>))}

        <button value="+" onClick={(e) => setOperator(e.target.value)}>+</button>
        <button value="-" onClick={(e) => setOperator(e.target.value)}>-</button>
        <button value="*" onClick={(e) => setOperator(e.target.value)}>X</button>

        <h2>{result}</h2>
        <button ontype="submit" onClick={() => console.log(1, 5, operator)}>Calcul</button>
      </div>

    </>
  )
}

export default Calculator