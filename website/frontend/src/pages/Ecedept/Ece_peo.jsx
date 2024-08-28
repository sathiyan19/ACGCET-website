import React,{useEffect} from "react";

import "./Ece_peo.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
} from "../../widgets";

import {
  ece_dept_menu,
  ece_peo,
  ece_outcomes,
  ece_spec_outcomes
} from "../../constants/ece_dept";

import {Listformat, Timeline} from '../../components'

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_peo = () => {
  useEffect(() => {
    document.title = 'ACCET-ECE | Objectives & Outcomes';
  }, []);
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
        <div className="ece_sub_heading">Objectives & Outcomes</div>
      </div>
      <section className="ecedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
        </div>
        <Radial_menu menu_links={ece_dept_menu} />
        <div className="ece_peo_area">

          <div className="ece_peo">
            <Underline heading="Program Education Objectives"/>
            {ece_peo.map((item)=><Timeline key={item.id} head={item.head} house={item.house} content={item.content}/>)}
          </div>

          <div className="ece_outcomes">
            <Underline heading="Program Outcomes"/>
            <Listformat points={ece_outcomes}/>
          </div>

          <div className="ece_spec_outcomes">
              <Underline heading="Program Specific Outcomes"/>
              <Listformat points={ece_spec_outcomes}/>
          </div>

        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Ece_peo;
