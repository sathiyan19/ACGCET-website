import React from 'react'

import {Heroimage } from '../../components'
import {Backtotop} from '../../widgets'
import {Information,Founder,Companies,Events,Paralax} from '../../containers'

import clgpic from '../../assets/pictures/clgpicfinal.webp'


const Home = () => {
  return (
    <>
        <Heroimage image={clgpic} alternate="College"/>

        <Information/>

        <Founder/>

        <Paralax/>

        <Companies/>

        <Events/>

        <Backtotop/>

    </>
  )
}

export default Home