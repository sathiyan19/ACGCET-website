import React, { useEffect } from "react";

import "./Sports.css";

import {
  Heroimagecarousal,
  Timeline,
  Listformat,
  Slideshow,
  Radial_menu
} from "../../components";
import { Sportcard,Underline ,Backtotop,Floatinmenu, Modal} from "../../widgets";
import {MdOutlineSportsTennis }from "react-icons/md";
import { Events } from "../../containers";
import {
  sports_meet_2k24_schedule,
  sports_slideshow,
  sport_cards,
  sport_achivement_info,
  sports_menu
} from "../../constants/sports";
// import {
//   Sports_heroimage_carousalinfo,
//   sportstime,
//   sportslist,
//   sportsvision,
//   sportsmission,
// } from "../../constants/sports";

const Sports = () => {
  useEffect(() => {
    document.title = "ACCET-Sports";
  }, []);
  return (
    <div>
      <div className="sports_slides">
        <Slideshow images={sports_slideshow} />
      </div>
      <div className='dept_float_menu'>
        <Floatinmenu logo={MdOutlineSportsTennis} head="Menu" links={sports_menu} />
        </div>
        <Radial_menu menu_links={sports_menu}/>
      <div className="sports_content_area">

        <Underline heading="Sports"/>

        <p className="sports_top_head">ACMARA RIVALRY'24</p>
        <p className="sports_head">Team Standings</p>
        <p className="sports_notification">After Men's Football matches...</p>

        <div className="sports_cards_holder">
          {sport_cards.map((team) => {
            return (
              <Sportcard
                key={team.id}
                img={team.img}
                head={team.head}
                points={team.points}
                wins={team.wins}
                link={team.link}
              />
            );
          })}
        </div>

        <a className="sports_insta_link" href="https://www.instagram.com/actech_sports/">
          <p className="sports_insta_desc">For faster updates, follow our instagram page here!</p>
        </a>

        {/* <p className="sports_head sports_page_anamoly">Sports Meet Schedule</p> */}

        {/* <Events events={sports_meet_2k24_schedule} /> */}

      

            
      </div>
    </div>
  );
};

export default Sports;
