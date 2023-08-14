import React, {useState } from "react";

import "./Modal.css";



const Modal = ({heading,sub_text,pic,content_1,content_2}) => {
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
      <div className="col colo not_show">
        <div className="contr">
          <div className="cont-pict">
            <img
              className="cont-pic"
              src={pic}
              alt="Contribution Picture"
            />
          </div>
          <div className="cont-desc">
            <div className="cont-exp">
              <div className="cont-head">{heading}</div>
              <div className="cont-abt">{sub_text}</div>
            </div>
            <button className="but" id="but" onClick={displaymodal}>
              Know more &nbsp;<span className="fa fa-angle-double-right yah"></span>
            </button>
          </div>
        </div>
      </div>

      {(modal_flag && 
        <div
          className="modal-container"
          onClick={handleWindowClick}
          id="modal-1"
        >
          <div className="modal1">
            <div className="modal-head">
              <div className="modal-title">{heading}</div>
              <div
                id="close-1"
                className="close-container"
                onClick={closemodal}
              >
                <span className="close">&times;</span>
              </div>
            </div>
            <div className="first-flex">
              <img
                src={pic}
                className="picsque"
                alt="Contribution Picture"
              />
              <div className="popcontent1">
                {content_1}
              </div>
            </div>
            <div className="popcontent2">
              {content_2}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
