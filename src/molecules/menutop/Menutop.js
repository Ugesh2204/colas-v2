import React from 'react'
import './menutop.css'

function Menutop(props) {
  return (

        <ul  className={props.mobilemenu ? 'menutop_wrapper active' : 'menutop_wrapper'}>
            <a href="">QUI SOMMES-NOUS ?</a>
            <a href="">Nos SOLUTIONS</a>
            <a href="">VOTRE PROJECT</a>
        </ul>
  
 
  )
}

export default Menutop