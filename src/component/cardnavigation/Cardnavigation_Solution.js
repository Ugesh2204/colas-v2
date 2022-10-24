import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import  dataCarNavigation  from '../../utils/dataCardNavigation'
import CardNavigation  from '../../molecules/cardnavigation/Cardnavigation'
import './cardnavigation.css'
import {BREAKPOINTS} from '../../Responsive'
import {SWIPERSLIDEPERVIEW} from '../../Responsive'

function Cardnavigation_Solution(props) {
 const val = 8;
 const mobileSmall = BREAKPOINTS.mobileSmall;
 const mobile = BREAKPOINTS.mobile;
 const tablet = BREAKPOINTS.tablet;
 const laptop = BREAKPOINTS.laptop;

//  const [width, setWidth]   = useState(window.innerWidth);
//  const [height, setHeight] = useState(window.innerHeight);
 
//  console.log(width,height)

//  const updateDimensions = () => {
//   setWidth(window.innerWidth);
//   setHeight(window.innerHeight);
// }

// useEffect(() => {
//   window.addEventListener("resize", updateDimensions);
//   return () => window.removeEventListener("resize", updateDimensions);
// }, []);


   return (
    <section className='container'>
    <Swiper
      // spaceBetween={20}
      // slidesPerView={8}
      breakpoints={{
        360: {
          width: 360,
          slidesPerView: 2,
          spaceBetween: 10
        },

        // when window width is >= 375px
        375: {
          width: 375,
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 4,
        },
        // when window width is >= 768px
        1366: {
          width: 1366,
          slidesPerView:8,
         
        },
      }}
      // onSlideChange={() => console.log('slide change')}-
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        dataCarNavigation.map((item,index) => {
          
          return(
      
            <SwiperSlide id={index} onClick ={props.cardTabHandler} key={index} 
             className={`${props.mapNavid === item.id  ?'active': ''}`} >

              <CardNavigation
                item ={item}
                setCardNav={props.setCardNav}
                NavclickIndex= {index}
                mapNavid = {props.mapNavid}
              />

            </SwiperSlide>
          )

        })
      }

    </Swiper>
    </section>
  )
}

export default Cardnavigation_Solution