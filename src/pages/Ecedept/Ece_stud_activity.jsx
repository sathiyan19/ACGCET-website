import React from 'react'

import './Ece_stud_activity.css'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";
import { ece_dept_menu,ece_stud_activities} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_stud_activity = () => {
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
                <div className='ece_student_activities'>
                    <Underline heading="Student Activities"/>
                    <div className='lab_cards row'>
                        {ece_stud_activities.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Ece_stud_activity