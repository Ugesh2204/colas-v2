import React from 'react'
import dataNosolution from '../../utils/dataNosolutions'
import './cardtitle.css'
import arrowtitle from '../../assets/images/arrow_bluetitle.png'

function Cardtitle({type,variant}) {
const counter = variant.length
  return (
    <div className='block__titlewrapper'>
        <img src={arrowtitle} alt=""></img>
        <div className='block__title'>
            <h2>{type}</h2>
            <div className='sub__title'>
              <span>{counter}</span>
              { counter > 1 ? <p>solutions</p>:<p>solution</p>}
            </div>
            
        </div>
    </div>
  )
  
}


export default Cardtitle