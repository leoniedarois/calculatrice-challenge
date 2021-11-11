import {ButtonStyle} from "../styles/Bouton"
import {useDispatch, useSelector} from "react-redux"
import {setKeyboardValue, setOperator, setResult} from "../actions/actions-types"

const Calculator = ({theme, setTheme}) => {
  const dispatch = useDispatch()
  const {screen} = useSelector((state) => state)

  const getKeyboardValue = (e) => dispatch(setKeyboardValue(e.target.value))
  const getOperatorValue = (e) => dispatch(setOperator(e.target.value))
  const getResult = () => dispatch(setResult())

  const changeTheme = () => {
    if(theme === 'light')
      setTheme('dark')
    else
      setTheme('light')
  }

  return (
    <>
      <ButtonStyle/>
      <div className="result">
        <input type="text" placeholder="Result.." value={screen} readOnly/>
            <div className="switch-container">
                <label>
                    <input className="switch" type="checkbox" onChange={changeTheme} />
                    <div>
                        <div></div>
                    </div>
                </label>
            </div>
      </div>
      <div className='wrapperBtn'>
        <button className="btn operator" value="+" onClick={(e) => getOperatorValue(e)}>+</button>
        <button className="btn operator" value="-" onClick={(e) => getOperatorValue(e)}>-</button>
        <button className="btn operator" value="*" onClick={(e) => getOperatorValue(e)}>x</button>
        {[...Array(10).keys()].map((num, index) => (
          <button className='btn' onClick={(e) => getKeyboardValue(e)} value={num} key={index}>{num}</button>)
        )}

        <button className="btn operator resultBtn" onClick={() => getResult()}>=</button>
      </div>
    </>
  )
}

export default Calculator