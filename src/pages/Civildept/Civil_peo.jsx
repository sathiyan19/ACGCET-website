import React from 'react'

import "./Civil_peo.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
} from "../../widgets";

import {
  civ_dept_menu,
  civ_peo,
  civ_outcomes,
  civ_spec_outcomes
} from "../../constants/civil_dept";

import {Listformat, Timeline} from '../../components'

import { Radial_menu } from "../../components";

import { BsFillBuildingsFill } from "react-icons/bs";

const Civil_peo = () => {
    return (
        <div className="civdept">
          <div className="civbg">
            <div className="civheading">
              Department of Civil Engineering
            </div>
            <div className="civ_sub_heading">Objectives & Outcomes</div>
          </div>
          <section className="civdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillBuildingsFill} head="Menu" links={civ_dept_menu} />
            </div>
            <Radial_menu menu_links={civ_dept_menu} />
            <div className="civ_peo_area">
    
              <div className="civ_peo">
                <Underline heading="Program Education Objectives"/>
                {civ_peo.map((item)=><Timeline key={item.id} head={item.head} house={item.house} content={item.content}/>)}
              </div>
    
              <div className="civ_outcomes">
                <Underline heading="Program Outcomes"/>
                <Listformat points={civ_outcomes}/>
              </div>
              <div className="civ_spec_outcomes">
                <Underline heading="Program Specific Outcomes"/>
                <Listformat points={civ_spec_outcomes}/>
              </div>
    
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Civil_peo