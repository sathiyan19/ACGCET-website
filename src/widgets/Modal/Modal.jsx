import React, { useState, useEffect } from "react";

import "./Modal.css";

const Modal = ({ heading, sub_text, pic, content_1, content_2,link }) => {
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

  // let slideIndex = 1;

  // useEffect(() => {
  //   var mods = document.getElementsByClassName("mod");
  //   let leng = mods.length;

  //   let n = 3;

  //   showslide(1);

  //   function plusSlides() {
  //     showslide((slideIndex += n));
  //   }

  //   function minusSlides() {
  //     showslide((slideIndex -= n));
  //   }
  //   function showslide(p) {
  //     Array.from(mods).forEach((element) => {
  //       element.classList.replace("show_this", "not_show");
  //     });
  //     slideIndex = p;
  //     if (p > leng) {
  //       slideIndex = 1;
  //     }
  //     if (p < 1) {
  //       if (leng % n === 0) {
  //         slideIndex = Math.floor(leng / n) * n - (n - 1);
  //       } else {
  //         let f;
  //         f = leng + (n - (leng % n));
  //         slideIndex = Math.floor(f / n) * n - (n - 1);
  //       }
  //     }

  //     if (n === 3) {
  //       mods[slideIndex - 1].classList.replace("not_show", "show_this");
  //       mods[slideIndex].classList.replace("not_show", "show_this");
  //       mods[slideIndex + 1].classList.replace("not_show", "show_this");

  //       // dots[(Math.floor(slideIndex / 3))].className += " active";
  //     }else if(n===1){
  //       mods[slideIndex - 1].classList.replace("not_show", "show_this");
  //     }
  //   }
  //   // mods[0].classList.replace("not_show", "show_this");
  //   // mods[1].classList.replace("not_show", "show_this");
  //   // mods[2].classList.replace("not_show", "show_this");
  //   const modal_carousel = setInterval(plusSlides, 5000); // Change the interval as needed (5000ms = 5 seconds)
  //   return () => clearInterval(modal_carousel);
  // },);

  return (
    <>
      <div className="col colo mod show_this">
        <div className="contr">
          <div className="cont-pict">
            <img className="cont-pic" src={pic} alt="Contribution Picture" />
          </div>
          <div className="cont-desc">
            <div className="cont-exp">
              <div className="cont-head">{heading}</div>
              <div className="cont-abt">{sub_text}</div>
            </div>
            {(content_1 || content_2) &&(
            <button className="but" id="but" onClick={displaymodal}>
              Know more &nbsp;
              <span className="fa fa-angle-double-right yah"></span>
            </button>
            )}
          </div>
        </div>
      </div>

      {modal_flag && (
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
              <img src={pic} className="picsque" alt="Contribution Picture" />
              <div className="popcontent1">{content_1}</div>
            </div>
            <div className="popcontent2">{content_2}</div>
            {link &&(
            <div className="modal_ext_link_holder">
              <div className="modal_ext_link">
                <a href={link} className="modal_ext_link_tag">Video&nbsp;&nbsp;<span className="fa fa-angle-double-right yah"></span></a>
              </div>
            </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
