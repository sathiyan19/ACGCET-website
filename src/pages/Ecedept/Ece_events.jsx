import React from "react";

import "./Ece_events.css";

import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import {Timeline} from '../../components'
import { ece_dept_menu, ece_dept_events } from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_events = () => {
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
        <div className="ece_sub_heading">Events</div>
      </div>
      <section className="ecedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
        </div>
        <Radial_menu menu_links={ece_dept_menu} />
        <div className="ece_event_area">
          <div className="ece_events">
            <Underline heading="Association Events" />
            {ece_dept_events.map((item)=><Timeline key={item.id} head={item.head} date={item.date} house={item.house} content={item.content}/>)}
          
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Ece_events;
