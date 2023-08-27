import React from 'react'

import "./Mech_peo.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
} from "../../widgets";

import {
  mech_dept_menu,
  mech_peo,
  mech_outcomes,
  mech_spec_outcomes
} from "../../constants/mech_dept";

import {Listformat, Timeline} from '../../components'

import { Radial_menu } from "../../components";

import { BsFillGearFill } from "react-icons/bs";

const Mech_peo = () => {
    return (
        <div className="mechdept">
          <div className="mechbg">
            <div className="mechheading">
              Department of Mechanical Engineering
            </div>
            <div className="mech_sub_heading">Objectives & Outcomes</div>
          </div>
          <section className="mechdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
            </div>
            <Radial_menu menu_links={mech_dept_menu} />
            <div className="mech_peo_area">
    
              <div className="mech_peo">
                <Underline heading="Program Education Objectives"/>
                {mech_peo.map((item)=><Timeline key={item.id} head={item.head} house={item.house} content={item.content}/>)}
              </div>
    
              <div className="mech_outcomes">
                <Underline heading="Program Outcomes"/>
                <Listformat points={mech_outcomes}/>
              </div>

              <div className="mech_spec_outcomes">
                <Underline heading="Program Specific Outcomes"/>
                <Listformat points={mech_spec_outcomes}/>
              </div>
    
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Mech_peo