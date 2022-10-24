import React from 'react'
import './contactbtn.css'
import contacticon  from '../../assets/images/contacticon.png'

function Contactbtn() {
  return (
    <div className='contact__btn'>
        <img src={contacticon} alt="button contact"/>
        <p>Contact</p>
    </div>
  )
}

export default Contactbtn