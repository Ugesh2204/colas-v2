import React, {useState, useEffect} from 'react'
import './cardsolution.css';
import vshape from '../../assets/images/vshape.svg'
import underline from '../../assets/images/underline.png'
import Cardbtn from '../../atoms/button/Cardbtn';


function Card({card}) {
  
  return (
    <>
     {card.map((item,Index)=>{
      const heading = item.title;
        return (
          <div className='card__wrapper' key={item.id}>
            <div className="card__contenttop">
              <img src={item.pathImg} alt="images"/>
              <div className='card__vshape'>
                <img src={vshape} alt=""/>
              </div>  
              <div className='card__info'>
                <div className='content_title'>
                  <div
                   dangerouslySetInnerHTML={{__html: heading}}
                  />
                  <span className='title__underline'>
                    <img src={underline} alt=""/>
                  </span>
                </div>
                <div className='content__subtitle'>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
            <div className='card__contentbottom'>
              <div className='card__description'>
                <p>{item.description}</p>
              </div>
            <Cardbtn/>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card

