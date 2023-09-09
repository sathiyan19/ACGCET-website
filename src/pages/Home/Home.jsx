import React from 'react'

import {Heroimage} from '../../components'
import {Backtotop} from '../../widgets'
import {Information,Founder,Companies,Events,Paralax,News} from '../../containers'


// import clgpic from '../../assets/pictures/clgpicfinal.webp'

const clgpic="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Homepage_pics/clgpicfinal.webp"

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