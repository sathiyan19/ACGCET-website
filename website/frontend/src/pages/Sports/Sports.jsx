import React, { useEffect } from "react";

import "./Sports.css";

import {
  Heroimagecarousal,
  Timeline,
  Listformat,
  Slideshow,
} from "../../components";
import { Sportcard,Underline } from "../../widgets";

import { Events } from "../../containers";
import {
  sports_meet_2k24_schedule,
  sports_slideshow,
  sport_cards,
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
        <p className="sports_notification"></p>

        <div className="sports_cards_holder">
          {sport_cards.map((team) => {
            return (
              <Sportcard
                key={team.id}
                img={team.img}
                head={team.head}
                points={team.points}
              />
            );
          })}
        </div>

        <p className="sports_head sports_page_anamoly">Sports Meet Games</p>

        <Events events={sports_meet_2k24_schedule} />

      </div>
    </div>
  );
};

export default Sports;
