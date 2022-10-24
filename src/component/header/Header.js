import React from 'react'
import HeaderTopNavigation from '../../molecules/headertopnavigation/HeaderTopNavigation'
import Mainnavigation from '../../molecules/mainnavigation/Mainnavigation'
import './header.css'

function Header() {
  return (
    <header className='header'>
      <HeaderTopNavigation/>
      <nav className='nav__wrapper'>
        <Mainnavigation/>
      </nav>
      
    </header>
  )
}

export default Header