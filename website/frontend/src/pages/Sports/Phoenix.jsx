import React,{useEffect} from 'react'

import './Sports_team.css'

import { Pic_gallery } from '../../components'

// import phoenix from "../../assets/pictures/sportsmeet/rising.png"
import { phoenix_list} from '../../constants/sports'
import { Underline } from '../../widgets'

const phoenix="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/Sports/Sportsmeet/Phoenix/rising.webp"

const Phoenix = () => {
    useEffect(() => {
        document.title = "ACCET-Rising Phoenix";
      }, []);
  return (
    <div className='sport_team_page_cont'>
        <div className='sport_team_header_sec'>
            <div className='sport_team_header_img_holder'>
                <img className='sport_team_header_img' src={phoenix} alt="Phoenix Logo" />
            </div>
            <div className='sport_team_header_title_holder'>
                <div className='sport_team_header_title phoenix_title'>
                    RISING<br/>
                    PHOENIX
                </div>
                <div className='sports_team_header_points'>
                    65 Pts
                </div>
            </div>
        </div>

        <div className='sport_team_gallery_holder'>
            <Underline heading="Winners"/>
            <Pic_gallery img_list={phoenix_list.winners}/>
        </div>

        <div className='sport_team_gallery_holder'>
            <Underline heading="Runners"/>
            <Pic_gallery img_list={phoenix_list.runners}/>
        </div>

    </div>
  )
}

export default Phoenix