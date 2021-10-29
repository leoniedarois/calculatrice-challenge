import {ButtonStyle} from '../styles/Bouton'

const Calculator = () => {

  return (
    <>
      <ButtonStyle/>
      <div className='wrapperButton'>
        {[...Array(10).keys()].map((num, index) => (<button className='numberButton' key={index}>{num}</button>))}

        <button>+</button>
        <button>-</button>
        <button>X</button>
      </div>

    </>
  )
}

export default Calculator