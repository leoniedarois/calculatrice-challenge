import {ButtonStyle} from "../styles/Bouton"
import {useDispatch, useSelector} from "react-redux"
import {setKeyboardValue, setOperator, setResult} from "../actions/actions-types"

const Calculator = () => {
  const dispatch = useDispatch()
  const {screen} = useSelector((state) => state)

  const getKeyboardValue = (e) => {
    dispatch(setKeyboardValue(e.target.value))
  }

  const getOperatorValue = (e) => {
    dispatch(setOperator(e.target.value))
  }

  const getResult = () => {
    dispatch(setResult())
  }

  return (
    <>
      <ButtonStyle/>
      <input type="text" placeholder="Result" value={screen}/>
      <div className='wrapperButton'>
        {[...Array(10).keys()].map((num, index) => (
          <button className='btn' onClick={(e) => getKeyboardValue(e)} value={num} key={index}>{num}</button>)
        )}

        <button className="btn" value="+" onClick={(e) => getOperatorValue(e)}>+</button>
        <button className="btn" value="-" onClick={(e) => getOperatorValue(e)}>-</button>
        <button className="btn" value="*" onClick={(e) => getOperatorValue(e)}>X</button>

        <button className="btn" onClick={() => getResult()}>=</button>

      </div>

    </>
  )
}

export default Calculator