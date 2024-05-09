import React,{useEffect} from 'react'

import './Sports_team.css'

import { Pic_gallery } from '../../components'

// import akkadians from "../../assets/pictures/sportsmeet/AKKADIANS.png"

import { akkadians_list} from '../../constants/sports'
import { Underline } from '../../widgets'

const akkadians="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/Sports/Sportsmeet/Akkadians/AKKADIANS.webp"

const Akkadians = () => {
    useEffect(() => {
        document.title = "ACCET-Akkadians";
      }, []);
  return (
    <div className='sport_team_page_cont'>
        <div className='sport_team_header_sec'>
            <div className='sport_team_header_img_holder'>
                <img className='sport_team_header_img' src={akkadians} alt="Akkadians Logo" />
            </div>
            <div className='sport_team_header_title_holder'>
                <div className='sport_team_header_title akkadians_title'>
                    AKKADIANS
                </div>
                <div className='sports_team_header_points'>
                    15 Pts
                </div>
            </div>
        </div>

        {/* <div className='sport_team_gallery_holder'>
            <Underline heading="Winners"/>
            <Pic_gallery img_list={akkadians_list.winners}/>
        </div> */}

        <div className='sport_team_gallery_holder'>
            <Underline heading="Runners"/>
            <Pic_gallery img_list={akkadians_list.runners}/>
        </div>

    </div>
  )
}

export default Akkadians