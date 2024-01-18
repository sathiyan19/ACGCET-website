import React from "react";
import { useEffect } from "react";

import "./Paralax.css";

const Paralax = () => {
  let flag = false;

  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".no");
    const interval = 2000;

    function scrolling() {
      if (
        document.body.scrollTop > 650 ||
        document.documentElement.scrollTop > 650
      ) {
        counting();
      }
    }

    function counting() {
      if (!flag) {
        flag = true;
        valueDisplays.forEach((valueDisplay) => {
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute("data-val"));
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
              clearInterval(counter);
            }
          }, duration);
        });
      }
    }

    window.addEventListener("scroll", scrolling);
  }, []);

  return (
    <section className="section" role="complementary">
      <div className="parallax">
        <div className="dna">
          <p className="headfoot">Explore ACGCET</p>
          <div className="content">
            <div className="boxy-1">

              <div className="figure_box">
                <div className="figure">
                  <span className="no" data-val="15"></span>
                </div>
                <div className="figure-text">Programs</div>
              </div>

              <div className="figure_box">
                <div className="figure">
                  <span className="no" data-val="71"></span>Yrs
                </div>
                <div className="figure-text">Legacy</div>
              </div>

              <div className="figure_box">
                <div className="figure">
                  <span className="no" data-val="204"></span> Acres
                </div>
                <div className="figure-text">Campus</div>
              </div>

                <div className="figure_box">
                  <div className="figure">
                    <span className="no" data-val="140"></span> +
                  </div>
                  <div className="figure-text">Staffs</div>
                </div>

                <div className="figure_box">
                  <div className="figure">
                    <span className="no" data-val="1800+"></span> +
                  </div>
                  <div className="figure-text">Students</div>
                </div>

                <div className="figure_box">
                  <div className="figure">
                    <span className="no" data-val="91"></span> %
                  </div>
                  <div className="figure-text">Placements</div>
                </div>
              
                <div className="figure_box">
                  <div className="figure">
                    <span className="no" data-val="50"></span>+
                  </div>
                  <div className="figure-text">Recruiters</div>
                </div>

                <div className="figure_box">
                  <div className="figure">
                    <span className="no" data-val="5"></span>L
                  </div>
                  <div className="figure-text">Average Salary</div>
                </div>

            </div>
            <div className="ther_gap"></div>
            <p className="fs">
              We educate, encourage and enlighten the young minds to learn more,
              do more and achieve more
            </p>
            {/* <div className="d-grip gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button className="btn jack btn-lg px-4 me-sm-3">
                Scholarships
              </button>
              <button className="btn jack btn-lg px-4 me-sm-3">
                Fee Structure
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paralax;
