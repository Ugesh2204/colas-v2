import React from 'react'
import Cardvotreproject from '../../molecules/cardvotreproject/Cardvotreproject'
import dataCardVotreProject from '../../utils/dataCardVotreProject'

function Card_block_project() {
  return (
    <div>
        <section className="main">
          <div className='container'>
            <div className='wrapper'>
             {
              dataCardVotreProject.map((item, index) =>{
                return(
                <Cardvotreproject item ={item} key={index}/>
                )
              })
             }
                  
               
               
            </div>
          </div>
        </section>
       
    </div>
  )
}

export default Card_block_project