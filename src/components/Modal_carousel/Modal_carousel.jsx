import React, { useEffect } from "react";

import "./Modal_carousel.css";

import { Modal } from "../../widgets";

import touch_effect from "../../Functions/touch_detect";

const Modal_carousel = ({info}) => {
  let slideIndex = 1;
  let n = 3,
    width;
  calcul();

  function calcul() {
    width = window.innerWidth;
    if (width < 770) {
      n = 1;
    } else if (width > 770 && width < 1100) {
      n = 2;
    } else if (width > 1400) {
      n = 3;
    }
  }
  window.addEventListener("resize", calcul);

  function plusSlides() {
    showslide((slideIndex += n));
  }

  function minusSlides() {
    showslide((slideIndex -= n));
  }

  function showslide(p) {
    var mods = document.getElementsByClassName("mod");
    let leng = mods.length;
    Array.from(mods).forEach((element) => {
      element.classList.replace("show_this", "not_show");
    });
    slideIndex = p;
    if (p > leng) {
      slideIndex = 1;
    }
    if (p < 1) {
      if (leng % n === 0) {
        slideIndex = Math.floor(leng / n) * n - (n - 1);
      } else {
        let f;
        f = leng + (n - (leng % n));
        slideIndex = Math.floor(f / n) * n - (n - 1);
      }
    }

    if (n === 3) {
      mods[(slideIndex - 1) % leng].classList.replace("not_show", "show_this");
      mods[slideIndex % leng].classList.replace("not_show", "show_this");
      mods[(slideIndex + 1) % leng].classList.replace("not_show", "show_this");
    } else if (n === 2) {
      mods[(slideIndex - 1) % leng].classList.replace("not_show", "show_this");
      mods[slideIndex % leng].classList.replace("not_show", "show_this");
    } else if (n === 1) {
      mods[(slideIndex - 1) % leng].classList.replace("not_show", "show_this");
    }
  }

  useEffect(() => {
    touch_effect(".gyro", minusSlides, plusSlides);
    function showslide(p) {
      var mods = document.getElementsByClassName("mod");
      let leng = mods.length;
      Array.from(mods).forEach((element) => {
        element.classList.replace("show_this", "not_show");
      });
      slideIndex = p;
      if (p > leng) {
        slideIndex = 1;
      }
      if (p < 1) {
        if (leng % n === 0) {
          slideIndex = Math.floor(leng / n) * n - (n - 1);
        } else {
          let f;
          f = leng + (n - (leng % n));
          slideIndex = Math.floor(f / n) * n - (n - 1);
        }
      }
      if (n === 3) {
        mods[(slideIndex - 1) % leng].classList.replace(
          "not_show",
          "show_this"
        );
        mods[slideIndex % leng].classList.replace("not_show", "show_this");
        mods[(slideIndex + 1) % leng].classList.replace(
          "not_show",
          "show_this"
        );
      } else if (n === 2) {
        mods[(slideIndex - 1) % leng].classList.replace(
          "not_show",
          "show_this"
        );
        mods[slideIndex % leng].classList.replace("not_show", "show_this");
      } else if (n === 1) {
        mods[(slideIndex - 1) % leng].classList.replace(
          "not_show",
          "show_this"
        );
      }
    }

    showslide(1);

    const modal_carousel = setInterval(plusSlides, 5000);
    return () => clearInterval(modal_carousel);
  }, [slideIndex]);
  return (
    <>
    <div className="container-fluid marketing">
      <div>
        <a className="prev_slide" onClick={minusSlides}>
          ❮
        </a>
      </div>
      <div className="gyro row g-4">
        {info.map((item) => (
          <Modal
            key={item.id}
            heading={item.heading}
            sub_text={item["sub-head"]}
            pic={item.pic}
            content_1={item.content_1}
            content_2={item.content_2}
          />
        ))}
      </div>
      <div>
        <a className="next_slide" onClick={plusSlides}>
          ❯
        </a>
      </div>
      
    </div>
    <div className="hint_text">Swipe left or right!</div>
    </>
  );
};

export default Modal_carousel;
