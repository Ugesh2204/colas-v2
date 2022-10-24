import React from 'react'
import './headertopnavigation.css'
import colascom from '../../assets/images/colascom.png'
import contrast from '../../assets/images/contrast.png'

function HeaderTopNavigation() {
  return (
    <div className='headertopnav__wrapper'>
        <div className="colas__link">
          <img src={colascom} alt="colas.com"/>
          <a href='#'>Colas.com</a>
        </div>
        <div className='options__wrapper'>
          <div className='accessibility'>
            <button className='access_btn'>
              <img src={contrast} alt="accessibilite"/>
               <p>Accessibilité</p>
            </button>
          </div>
          <div className='language'>
            <form>
              <select>
                <option>FR</option>
                <option>En</option>
              </select>
            </form>
          </div>
        </div>
    </div>
  )
}

export default HeaderTopNavigation