import React, {useState, useEffect } from 'react';
import logocolas from '../../assets/images/logocoloas.png'
import Contactbtn from '../../atoms/button/Contactbtn'
import Hamburgerbtn from '../../atoms/button/Hamburgerbtn'
import Recherche from '../../atoms/button/Recherche'
import Menutop from '../menutop/Menutop'
import './mainnavigation.css'
function Mainnavigation() {

const [clickMobileMenu, setclickMobileMenu] = useState(false)

const [clickSearchBtn, setclickSearchBtn] = useState(false);

const handleClickOpenMenu =() => {
    setclickMobileMenu(!clickMobileMenu)
}

const handleClickSearchBtn =() => {
    console.log("search click")
    setclickSearchBtn(!clickSearchBtn)
}
console.log(clickSearchBtn);

  return (
    <>
       <div className='logonav__container'>
            <Hamburgerbtn handleClickOpenMenu = {handleClickOpenMenu}/>
            <div className='colaslogo'><img src={logocolas}/></div>
            <Menutop mobilemenu = {clickMobileMenu}/>
       </div>
     
       <div className='contactrecherche__container'>
        <Contactbtn/>
        <Recherche  handleClickSearchBtn={handleClickSearchBtn} clickSearchBtn={clickSearchBtn} />
       </div>
    </>
 
  )
}

export default Mainnavigation