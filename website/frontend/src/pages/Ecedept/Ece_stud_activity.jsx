import React, { useEffect } from "react";

import "./Ece_stud_activity.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
  Content_card,
  Modal,
} from "../../widgets";
import {
  ece_dept_menu,
  ece_stud_activities,
  ece_cocurricular_data,
  ece_extracurricular,
} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_stud_activity = () => {
  useEffect(() => {
    document.title = "ACCET-ECE | Student Activities";
  }, []);
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
        <div className="ece_sub_heading">Student Activities</div>
      </div>
      <section className="ecedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
        </div>
        <Radial_menu menu_links={ece_dept_menu} />
        <div className="ece_activity_area">
          <div className="ece_student_activities">
            <Underline heading="Student Activities" />
            <div className="lab_cards row">
              {ece_stud_activities.map((item) => (
                <Modal
                  heading={item.heading}
                  pic={item.pic}
                  content_1={item.content_1}
                  content_2={item.content_2}
                  sub_text={item["sub-head"]}
                />
              ))}
            </div>
          </div>
        </div>


        <Underline heading="Co-Curricular Activities" />
        <div className="ece_cocurri_card_outer">
          <div className="ece_cocurri_cards">
            {ece_cocurricular_data.map((item) => (
              <Content_card
                key={item.id}
                heading={item.program}
                pdf={item.pdf}
              />
            ))}
          </div>
        </div>

        <Underline heading="Extra Curricular Activities" />
        <div className="ece_extracurri_card_outer">
          <div>
            {ece_extracurricular.map((item) => (
              <Content_card
                key={item.id}
                heading={item.program}
                pdf={item.pdf}
              />
            ))}
          </div>
        </div>

      </section>

      <Backtotop />
    </div>
  );
};

export default Ece_stud_activity;
