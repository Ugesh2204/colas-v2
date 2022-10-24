import React, {useState, useEffect, useMemo} from 'react'
import Cardsolution from '../../molecules/cardsolution/Cardsolution'
import Cardtitle from '../../molecules/cardsolution/Cardtitle'
import './card_block_solution.css'
import dataNoSolutionNested from '../../utils/dataNosolutionsNested'

function Card_block_Solution(props) {

  const [mapID, setMapID] = useState(0)

  useEffect(() => {
    setMapID(props.mapCard)
  },[props.mapCard])

  return (
    <>
        <section className={`main card`} dataid={`card`}>
          <div className='container'>
            <div className='heading__card'>
              <Cardtitle type={dataNoSolutionNested[mapID].type} variant={dataNoSolutionNested[mapID].details}/>
            </div>
            <div className='wrapper'>
              <Cardsolution card={dataNoSolutionNested[mapID].details}/>
            </div>
          </div>
        </section>
    </>
   
  )
}

export default Card_block_Solution