import React from 'react'

import {Heroimage } from '../../components'
import {Backtotop} from '../../widgets'
import {Information,Founder,Companies,Events,Paralax,News} from '../../containers'

import clgpic from '../../assets/pictures/clgpicfinal.webp'

import {Profile_display} from '../../components'
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

    </>
  )
}

export default Home;