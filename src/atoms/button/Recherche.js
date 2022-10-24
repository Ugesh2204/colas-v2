import React from 'react'
import './recherche.css'
import rechercheicon  from '../../assets/images/searchicon.png'

function Recherche( props) {
  return (
    <div className={props.clickSearchBtn ? 'recherche__btn slider-search':'recherche__btn'} onClick ={props.handleClickSearchBtn}>
        {/* <img src={rechercheicon} alt="recherche contact"/> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="23.014" height="23.014" viewBox="0 0 23.014 23.014">
            <path id="ic_search" d="M19.448,17.474h-1.04l-.368-.355a8.566,8.566,0,1,0-.921.921l.355.368v1.04l6.579,6.566,1.961-1.961Zm-7.9,0a5.921,5.921,0,1,1,5.921-5.921A5.913,5.913,0,0,1,11.553,17.474Z" transform="translate(-3 -3)"/>
        </svg>

        <form className={ props.clickSearchBtn ? 'search__input':'hide_search'}>
            <input type="text" />
            <div className='underline_input'></div>
        </form>

        <p className='recherche_txt'>Recherche</p>
    </div>
  )
}

export default Recherche