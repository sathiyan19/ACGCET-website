import React from 'react'

import {Heroimage } from '../../components'
import {Backtotop} from '../../widgets'
import {Information,Founder,Companies,Events,Paralax} from '../../containers'

import clgpic from '../../assets/pictures/clgpicfinal.webp'

// import {Profilecard} from '../../widgets'
// import {profileinfo} from '../../constants/profilecards'



const Home = () => {
  return (
    <>
        <Heroimage image={clgpic} alternate="College"/>

        <Information/>

        <Founder/>

        
        <Paralax/>

        <Companies/>

        <Events/>
        {/* {profileinfo.map((item) => (
        <Profilecard
          key={item.id}
          cover={item.cover}
          dp={item.dp}
          name={item.name}
          Designation={item.Designation}
          mailid={item.mailid}
        />
      ))} */}

        <Backtotop/>

    </>
  )
}

export default Home;