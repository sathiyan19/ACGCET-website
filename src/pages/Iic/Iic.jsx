import React from 'react'

import "./Iic.css"

import { Content_card,Underline } from '../../widgets'

import { iic } from '../../constants/iic';


const Iic = () => {
  return (
    <div className='iic_container'>

       <Underline heading="Innovation and Startup policies"/>

        <div className='iic_cards'>
            {iic.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>

    </div>
  )
}

export default Iic