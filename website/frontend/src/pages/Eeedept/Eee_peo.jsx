import React,{useEffect} from 'react'

import "./Eee_peo.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
} from "../../widgets";

import {
  eee_dept_menu,
  eee_peo,
  eee_outcomes,
  eee_spec_outcomes
} from "../../constants/eee_dept";

import {Listformat, Timeline} from '../../components'

import { Radial_menu } from "../../components";

import { AiFillThunderbolt } from "react-icons/ai";

const Eee_peo = () => {
  useEffect(() => {
    document.title = 'ACCET-EEE | Objectives & Outcomes';
  }, []);
    return (
        <div className="eeedept">
          <div className="eeebg">
            <div className="eeeheading">
              Department of Electrical and electronics Engineering
            </div>
            <div className="eee_sub_heading">Objectives & Outcomes</div>
          </div>
          <section className="eeedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
            </div>
            <Radial_menu menu_links={eee_dept_menu} />
            <div className="eee_peo_area">
    
              <div className="eee_peo">
                <Underline heading="Program Education Objectives"/>
                {eee_peo.map((item)=><Timeline key={item.id} head={item.head} house={item.house} content={item.content}/>)}
              </div>
    
              <div className="eee_outcomes">
                <Underline heading="Program Outcomes"/>
                <Listformat points={eee_outcomes}/>
              </div>

              <div className="eee_spec_outcomes">
                <Underline heading="Program Specific Outcomes"/>
                <Listformat points={eee_spec_outcomes}/>
              </div>
    
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Eee_peo