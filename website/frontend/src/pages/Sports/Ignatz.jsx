import React,{useEffect} from 'react'

import './Sports_team.css'

import { Pic_gallery } from '../../components'

// import ignatz from "../../assets/pictures/sportsmeet/ignatz.png"
import { ignatz_list} from '../../constants/sports'
import { Underline } from '../../widgets'

const ignatz="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/Sports/Sportsmeet/Ignatz/ignatz.webp"

const Ignatz = () => {
    useEffect(() => {
        document.title = "ACCET-Ignatz";
      }, []);
  return (
    <div className='sport_team_page_cont'>
        <div className='sport_team_header_sec'>
            <div className='sport_team_header_img_holder'>
                <img className='sport_team_header_img' src={ignatz} alt="Ignatz Logo" />
            </div>
            <div className='sport_team_header_title_holder'>
                <div className='sport_team_header_title'>
                    IGNATZ
                </div>
                <div className='sports_team_header_points'>
                    105 Pts
                </div>
            </div>
        </div>

        <div className='sport_team_gallery_holder'>
            <Underline heading="Winners"/>
            <Pic_gallery img_list={ignatz_list.winners}/>
        </div>

        <div className='sport_team_gallery_holder'>
            <Underline heading="Runners"/>
            <Pic_gallery img_list={ignatz_list.runners}/>
        </div>

    </div>
  )
}

export default Ignatz