import React from 'react'

import './Office.css'

import principal from '../../assets/pictures/principal.webp'
import org_struc from '../../assets/pictures/org_str.webp'

const Office = () => {
  return (
    <div className="whole_content">
      <div className="heading1">Office</div>

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
          Our institution is a result of noble philanthropist  Dr. RM. Alagappa Chettiar’s vision. He aimed to take the fountain of knowledge to rural population and intended to make a change in their life and that of the society by creating quality engineers. His vision is being realised by many noble hearts  who are teachers, administrators and alumini who have joined hands to create an environment that is professional and result oriented.

The institution has been awarded a Best Engineering College for the year 2008 by Government of Tamilnadu. The institution is accredited by NBA for various programmes from the year 2006 and reaccredited in subsequent years. The institution is awarded with B++ Grade  by NAAC since march 2020.

Students are encouraged to participate in various co-curricular and extracurricular activities and they bring laurels to the college through active participation in district, state and national level competitions and tournaments.

The college with its team of academicians, technical and non technical staff along with alumni support takes every step to realise the vision and mission of the college. With the blessings of almighty we hope to reach greater heights, achieve major milestones, making our institution the best, producing graduates who are ethically upright individuals.
          </div>
        </div>
      </div>

      <div className="org_structure">
        <div className="org_heading princ_msg_head">Organisation Structure:</div>
        <div className="org_text">
        The college is a Government Institution and comes under the direct  control of the state head, Honorable Chief Minister, followed by the Higher Education Minister, Chief Secretary and Additional Chief Secretary and Commissioner who involve in the administrative policies directly. The Commissioner of Directorate of Technical Education is ex-officio head of all the Technical Education Institutes in Tamilnadu. The Commissioner governs and controls all activities related to the recruitment of faculty & staff, promotions, transfer of job of the teachers and non-teaching staff members and the admission and transfer of students.
        </div>
        <div className="org_pic">
          <img className="ord_str_img" src={org_struc} alt="Organisation Structure" />
        </div>
      </div>
    </div>
  )
}

export default Office