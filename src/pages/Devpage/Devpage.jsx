import React from 'react'

import './Devpage.css'
import { Devcard, Underline } from '../../widgets'
import { devteam,guide_team } from '../../constants/devteam'

const Devpage = () => {
  return (
    <div className='webdevpage'>
        <Underline heading="Development Team"/>
        <div className='dev_profile_holder'>
            {devteam.map((item)=><Devcard key={item.id} title={item.name} desc={item.batch} link={item.linkedin} pic={item.pic} color={item.color}/>)}
        </div>
        <Underline heading="Senior Mentors"/>
        <div className='dev_profile_holder'>
            {guide_team.map((item)=><Devcard key={item.id} title={item.name} desc={item.batch} link={item.linkedin} pic={item.pic} color={item.color}/>)}
        </div>
    </div>
  )
}

export default Devpage