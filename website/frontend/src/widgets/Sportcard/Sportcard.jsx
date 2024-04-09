import React, { useState } from "react";

import "./Sportcard.css";

const Sportcard = ({ img, head, points,wins,link }) => {
  const [modal_flag, setmodal_flag] = useState(false);
  const displaymodal = () => {
    setmodal_flag(true);
  };

  const closemodal = () => {
    setmodal_flag(false);
  };

  const handleWindowClick = (event) => {
    if (event.target === event.currentTarget) {
      closemodal();
    }
  };
  return (
    <>
      <a href={link} className="sport_card_frame">
        <div className="sport_card_topsec">
          <div className="sport_card_img_holder">
            <img className="sport_card_img" src={img} />
          </div>
          <div className="sport_card_team_head">{head}</div>
        </div>

        <div className="sport_card_point_sec">{points}pts</div>
        <div className="sport_card_click">Click for images!</div>
      </a>

      {modal_flag && (
        <div
          className="modal-container"
          onClick={handleWindowClick}
          id="modal-1"
        >
          <div className="modal1">
            <div className="modal-head">
              <div className="modal-title">{head}</div>
              <div
                id="close-1"
                className="close-container"
                onClick={closemodal}
              >
                <span className="close">&times;</span>
              </div>
            </div>

            <div className="sport_content">
              <div className="sport_content_layout">
                { (wins.winners) &&
                (<>
                <p className="sport_content_head">Winners: </p>
                  <ul className="sports_win_list">
                    {wins.winners.map((item)=><li className="sports_win_list_item">{item}</li>)}
                  </ul>
                </>
                )}

                { (wins.runners)&&
                (<>
                <p className="sport_content_head">Runners: </p>
                <ul className="sports_win_list">
                {wins.runners.map((item)=><li className="sports_win_list_item">{item}</li>)}
                </ul>
                </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sportcard;
