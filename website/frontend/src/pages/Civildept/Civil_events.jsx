import React,{useEffect} from 'react'

import { Backtotop, Floatinmenu, Underline, Modal } from "../../widgets";
import { civ_dept_menu, civ_dept_events } from "../../constants/civil_dept";

import { Radial_menu } from "../../components";

import { BsFillBuildingsFill } from "react-icons/bs";

const Civil_events = () => {
  useEffect(() => {
    document.title = 'ACCET-Civil | Events';
  }, []);
    return (
        <div className="civdept">
          <div className="civbg">
            <div className="civheading">
              Department of Civil Engineering
            </div>
            <div className="civ_sub_heading">Events</div>
          </div>
          <section className="civdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillBuildingsFill} head="Menu" links={civ_dept_menu} />
            </div>
            <Radial_menu menu_links={civ_dept_menu} />
            <div className="civ_event_area">
              <div className="civ_events">
                <Underline heading="Department Events" />
                <div className="lab_cards row">
                  {civ_dept_events.map((item) => (
                    <Modal
                      heading={item.heading}
                      pic={item.pic}
                      content_1={item.content_1}
                      content_2={item.content_2}
                      sub_text={item["sub-head"]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Civil_events