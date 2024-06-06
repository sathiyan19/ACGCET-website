import React,{useEffect} from 'react'

import {Heroimage} from '../../components'
import {Backtotop} from '../../widgets'
import {Information,Founder,Companies,Events,Paralax,News} from '../../containers'
import { events } from "../../constants/events";

import './Home.css';


// import clgpic from '../../assets/pictures/clgpicfinal.webp'

const clgpic="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Homepage_pics/clgpicfinal.webp"
const clgvdo="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Homepage_pics/R.M+Alagappa+Chettiar.mp4"

const Home = () => {
  useEffect(() => {
    document.title = 'ACCET-Karaikudi | Alagappa Chettiar Government College of Engineering and Technology';
  }, []);
  return (
    <>
        <Heroimage image={clgpic} alternate="College"/>

        <Information/>

        <Founder/>

        <div className='home_clg_vdo_holder'>
          <video className='home_clg_vdo' controls autoPlay muted>
            <source src={clgvdo} type="video/mp4" />
          </video>
        </div>

        <News/>

        <Paralax/>

        <Companies/>

        <Events events={events} head="Events"/>
        
        <Backtotop/>

    </>
  )
}

export default Home;