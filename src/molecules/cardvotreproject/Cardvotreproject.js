import React from 'react'
import './cardvotreproject.css'
import bgimg from '../../assets/images/road_1.jpg'
import arrowproject from '../../assets/images/arrow_project.svg'

function Cardvotreproject(props) {
 
  return (
    <div className='card__wrapper card-project' >
      <div className="card__content">
        <div className='card_imgwrapper'>
          <img src={props.item.imgpath} alt="background image"/>
        </div>
        <div className="cardtext__wrapper">
          {/* <img className='project_arrow' src={arrowproject} alt="arrow icon"/> */}
          <svg xmlns="http://www.w3.org/2000/svg" class="path" width="32.948" height="44.12" viewBox="0 0 32.948 44.12">
            <path id="project_arrow" data-name="Path 7418" d="M230.495,285.128l-.017-.019c-.02-.024-30.068-20.773-30.068-20.773-1.808,2.262-2.787,5.49-1.539,8.021,1.189,2.412,6.293,5.7,7.695,6.57,2.969,2.06,9.216,6.194,9.222,6.2.585.43.774.736.763,1.188a1.887,1.887,0,0,1-.753,1.338c-.01.01-6.17,4.089-9.113,6.128-1.2.742-6.588,4.158-7.814,6.644-1.243,2.519-.276,5.728,1.516,7.988l.023.042s30.048-20.749,30.068-20.773l.027-.029a1.887,1.887,0,0,0,.753-1.338C231.269,285.864,231.08,285.558,230.495,285.128Z" transform="translate(-198.311 -264.336)" />
          </svg>
          <p>{props.item.title}</p>
        </div>
      </div>
      <div className='card_bottom'>
        <button className='btn btn-blue'>en savoir plus</button>
      </div>
    </div>
        
  )
}

export default Cardvotreproject