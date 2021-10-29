import {ButtonStyle} from '../styles/Bouton'

const Calculator = () => {

  return (
    <>
      <ButtonStyle/>
      <div className='wrapperButton'>
        {[...Array(10).keys()].map((num, index) => (<button className='numberButton' value={num} key={index}>{num}</button>))}
        <button>+</button>
        <button>-</button>
        <button>X</button>
        <input type="text"/>
      </div>

    </>
  )
}

export default Calculator