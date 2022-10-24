import React, { useEffect } from 'react'
import './cardnavigation.css'

function Cardnavigation(props) {
    // console.log(props.setCardNav)
    // console.log(props.mapNavid);
    // console.log(props.NavclickIndex)
    //console.log(props.cardnavlength)
     //const arrayUnderline = [];
     

  return (
    <>
        <div className='navicons__wrapper' >
            <div className='nav__icon'>
                <img src={props.item.iconpath}/>
            </div>
            <p className='nav__icon_text'>{props.item.title}</p>

            {/* {props.setCardNav ? '' : '<p>test</p>' } */}

             {/* <div className={`underline`}>
                <img src={underlineNavicon}/>
             </div>  */}
            
        </div> 
    </>
  )
}

export default Cardnavigation