import React from "react";

import "./Ece_peo.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
} from "../../widgets";

import {
  ece_dept_menu,
  ece_peo,
  ece_outcomes
} from "../../constants/ece_dept";

import {Listformat, Timeline} from '../../components'

import { Radial_menu } from "../../components";
// import cse from "../../assets/pictures/csecover.webp";

import { FaMicrochip } from "react-icons/fa6";

const Ece_peo = () => {
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
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
            <Underline heading="PROGRAM OUTCOMES"/>
            <Listformat points={ece_outcomes}/>
          </div>

        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Ece_peo;
