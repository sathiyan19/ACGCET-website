import React,{useEffect} from "react";

import { Backtotop, Floatinmenu, Underline, Reunion_card } from "../../widgets";
import { cse_dept_menu, cse_asso_events } from "../../constants/cse_dept";

import { Radial_menu } from "../../components";

import { FaComputer } from "react-icons/fa6";

import './Cse_events.css';

const Cse_events = () => {
  useEffect(() => {
    document.title = 'ACCET-CSE | Events';
  }, []);
  return (
    <div className="csedept">
      <div className="csebg">
        <div className="cseheading">
          Department of Electronics and Communication Engineering
        </div>
        <div className="cse_sub_heading">Events</div>
      </div>
      <section className="csedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaComputer} head="Menu" links={cse_dept_menu} />
        </div>
        <Radial_menu menu_links={cse_dept_menu} />
        <div className="cse_event_area">
          <div className="cse_events">
            <Underline heading="Department Events" />
            
            <div className=' row cse_events_holder'>
              {cse_asso_events.map((item)=><Reunion_card margin_bw={20} cover={item.pic}  name={item.heading} date={item["sub-head"]}/>)}
            </div>

          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Cse_events;
