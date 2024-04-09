import React,{useEffect} from 'react'

import './Sports_team.css'

import { Pic_gallery } from '../../components'

// import typhonz from "../../assets/pictures/sportsmeet/Typhonz.png"
import { typhonz_list} from '../../constants/sports'
import { Underline } from '../../widgets'

const typhonz="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/Sports/Sportsmeet/Typhonz/Typhonz.webp"

const Typhonz_page = () => {
    useEffect(() => {
        document.title = "ACCET-Typhonz";
      }, []);
  return (
    <div className='sport_team_page_cont'>
        <div className='sport_team_header_sec'>
            <div className='sport_team_header_img_holder'>
                <img className='sport_team_header_img' src={typhonz} alt="Typhonz Logo" />
            </div>
            <div className='sport_team_header_title_holder'>
                <div className='sport_team_header_title typhonz_title'>
                    Typhonz
                </div>
                <div className='sports_team_header_points'>
                    85 Pts
                </div>
            </div>
        </div>

        <div className='sport_team_gallery_holder'>
            <Underline heading="Winners"/>
            <Pic_gallery img_list={typhonz_list.winners}/>
        </div>

        <div className='sport_team_gallery_holder'>
            <Underline heading="Runners"/>
            <Pic_gallery img_list={typhonz_list.runners}/>
        </div>

    </div>
  )
}

export default Typhonz_page