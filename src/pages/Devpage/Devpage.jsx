import React from 'react'

import './Devpage.css'
import { Devcard, Underline } from '../../widgets'
import { devteam } from '../../constants/devteam'

const Devpage = () => {
  return (
    <div className='webdevpage'>
        <Underline heading="Development Team"/>
        <div className='dev_profile_holder'>
            {devteam.map((item)=><Devcard key={item.id} title={item.name} desc={item.batch} link={item.linkedin} pic={item.pic}/>)}
        </div>
    </div>
  )
}

export default Devpage