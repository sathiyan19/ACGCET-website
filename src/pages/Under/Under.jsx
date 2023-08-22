import React from 'react'

import "./Under.css"
import bg from "../../assets/pictures/uct.png"
import bg_mob from "../../assets/pictures/uctmob.png"

const Under = () => {
  return (
    <div>
        <div className='underbg'>
            <img className='uct_bg' src={bg} alt='bg'/>
            <img className='uct_bg_mob' src={bg_mob} alt='bg_mob'/>
        </div>
    </div>
  )
}

export default Under