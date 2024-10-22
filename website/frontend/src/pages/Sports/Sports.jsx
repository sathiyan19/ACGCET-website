import React, { useEffect } from "react";

import "./Sports.css";

import {
  Heroimagecarousal,
  Timeline,
  Listformat,
  Slideshow,
} from "../../components";
import { Sportcard,Underline , Modal} from "../../widgets";

import { Events } from "../../containers";
import {
  sports_meet_2k24_schedule,
  sports_slideshow,
  sport_cards,
  sport_achivement_info,
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

        <div className="mech_events">
            <Underline heading="Achivements" />
            <div className="lab_cards row">
              {sport_achivement_info.map((item) => (
                <Modal
                  heading={item.heading}
                  pic={item.pic}
                 
                  sub_text={item["sub-head"]}
                />
              ))}
            </div>
          </div>

            
      </div>
    </div>
  );
};

export default Sports;
