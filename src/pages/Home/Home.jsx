import React from 'react'

import {Heroimage} from '../../components'
import {Backtotop} from '../../widgets'
import {Information,Founder,Companies,Events,Paralax,News} from '../../containers'


import clgpic from '../../assets/pictures/clgpicfinal.webp'

import {Profilecard} from '../../widgets'
import {profileinfo} from '../../constants/profilecards'




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
    </>
  )
}

export default Home;