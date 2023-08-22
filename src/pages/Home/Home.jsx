import React from 'react'

import {Heroimage,Radial_menu} from '../../components'
import {Backtotop} from '../../widgets'
import {Information,Founder,Companies,Events,Paralax,News} from '../../containers'


import clgpic from '../../assets/pictures/clgpicfinal.webp'

import {Profile_display} from '../../components'
import {profileinfo} from '../../constants/profilecards'
import {dept_menu} from '../../constants/cse_dept'



const Home = () => {
  return (
    <>
        <Heroimage image={clgpic} alternate="College"/>

        <Information/>

        <Founder/>

        <News/>

        <Paralax/>

        <Companies/>

        <Events/>
        
        <Backtotop/>

        {/* <Profile_display list_info={profileinfo}/> */}

        <Radial_menu menu_links={dept_menu}/>
    </>
  )
}

export default Home;