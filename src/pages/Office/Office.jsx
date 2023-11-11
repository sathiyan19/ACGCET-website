import React,{useEffect} from "react";

import "./Office.css";

import principal from "../../assets/pictures/principal.webp";
import {office_admin_staffs} from '../../constants/office.js';

import { Backtotop,Underline } from "../../widgets";
import { Profile_display } from "../../components";

const Office = () => {
  useEffect(() => {
    document.title = 'ACCET-Office';
  }, []);
  return (
    <>
      <Backtotop />
      <div className="whole_content">
        <Underline heading="Principal Office"/>

        <div className="princ">
          <div className="princ_msg_head">Principal's message:</div>
          <div className="princ_msg_content">
            <div className="princ_msg_content_img">
              <div className="princ_msg_content_img_pic">
                <img className="princ_pic" src={principal} alt="Principal" />
              </div>
              <div className="princ_msg_content_desig">
                <div className="princ_name">Dr.P.K.Palani M.E. Ph.D.</div>
                <div className="princ_desig">Principal</div>
              </div>
            </div>
            <div className="princ_msg_content_text">
              Our institution is a result of noble philanthropist Dr. RM.
              Alagappa Chettiar’s vision. He aimed to take the fountain of
              knowledge to rural population and intended to make a change in
              their life and that of the society by creating quality engineers.
              His vision is being realised by many noble hearts who are
              teachers, administrators and alumini who have joined hands to
              create an environment that is professional and result oriented.
              The institution has been awarded a Best Engineering College for
              the year 2008 by Government of Tamilnadu. The institution is
              accredited by NBA for various programmes from the year 2006 and
              reaccredited in subsequent years. The institution is awarded with
              B++ Grade by NAAC since march 2020. Students are encouraged to
              participate in various co-curricular and extracurricular
              activities and they bring laurels to the college through active
              participation in district, state and national level competitions
              and tournaments. The college with its team of academicians,
              technical and non technical staff along with alumni support takes
              every step to realise the vision and mission of the college. With
              the blessings of almighty we hope to reach greater heights,
              achieve major milestones, making our institution the best,
              producing graduates who are ethically upright individuals.
            </div>
          </div>
        </div>

        <div className="admin_staff">
          <Underline heading="Admistrative Staffs"/>
          <Profile_display list_info={office_admin_staffs}/>
        </div>

      </div>
    </>
  );
};

export default Office;
