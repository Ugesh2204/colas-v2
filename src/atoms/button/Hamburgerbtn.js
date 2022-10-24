import React from 'react'
import hamburgericon from '../../assets/images/hamburgericon.png'
import './hamburgerbtn.css'

function Hamburgerbtn(props) {
  return (
    <div className='hamburger_btn' onClick = {props.handleClickOpenMenu} >
        <img src={hamburgericon} alt="mobile menu"/>
    </div>
  )
}

export default Hamburgerbtn