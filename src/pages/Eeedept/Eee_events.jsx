import React from 'react'

import { Backtotop, Floatinmenu, Underline, Modal } from "../../widgets";
import { eee_dept_menu, eee_dept_events } from "../../constants/eee_dept";

import { Radial_menu } from "../../components";

import { AiFillThunderbolt } from "react-icons/ai";

const Eee_events = () => {
    return (
        <div className="eeedept">
          <div className="eeebg">
            <div className="eeeheading">
              Department of Electrical and Electronics Engineering
            </div>
            <div className="eee_sub_heading">Events</div>
          </div>
          <section className="eeedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
            </div>
            <Radial_menu menu_links={eee_dept_menu} />
            <div className="eee_event_area">
              <div className="eee_events">
                <Underline heading="Department Events" />
                <div className="lab_cards row">
                  {eee_dept_events.map((item) => (
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

export default Eee_events