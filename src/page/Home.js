import React, {useState} from 'react'
import Card_block_Solution from '../component/cardblock/Card_block_Solution'
import Cardnavigation from '../component/cardnavigation/Cardnavigation_Solution'
import Card_block_votreproject from '../component/cardblock/Card_block_project';

export default function Home() {

  const [isCardActive, setCardActive] = useState(0);
  const [isCardNavToggle, setCardNavToggle] = useState(true)

  console.log(isCardNavToggle);
  const cardTabHandler = (e) => {
    console.log(e)
    let currentid = e.currentTarget.id
    setCardActive(currentid);

    if(e.currentTarget.classList.contains('active')){
      e.currentTarget.classList.remove('active')
    }else{
      e.currentTarget.classList.add('active')
    }
  }
  

  return (
    <>
      

        <Card_block_votreproject/>

       <Cardnavigation 
        cardTabHandler={cardTabHandler}
        mapNavid = {isCardActive}/>

       <Card_block_Solution mapCard={isCardActive} />
    </>
  )
}