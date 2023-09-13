import React from 'react'

import {
    Backtotop,
    Floatinmenu,
    Underline,
  } from "../../widgets";
  
  import {
    cse_dept_menu,
    cse_peo,
    cse_outcomes,
    cse_spec_outcomes
  } from "../../constants/cse_dept";
  
  import {Listformat, Timeline} from '../../components'
  
  import { Radial_menu } from "../../components";

  import {FaComputer} from 'react-icons/fa6'

import {cse_prog_time} from '../../constants/cse_dept'




const Cse_prog_org = () => {
    return (
        <div className="csedept">
          <div className="csebg">
            <div className="cseheading">
            Department of Computer Science and Engineering
            </div>
            <div className="cse_sub_heading">Objectives & Outcomes</div>
          </div>
          <section className="csedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaComputer} head="Menu" links={cse_dept_menu} />
            </div>
            <Radial_menu menu_links={cse_dept_menu} />
            <div className="cse_peo_area">
              <div className="cse_peo">
                <Underline heading="Program Organized" />
                {cse_prog_time.map((item) => (
                  <Timeline
                    key={item.id}
                    head={item.head}
                    house={item.house}
                    content={item.content}
                  />
                ))}
              </div>
    
              
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Cse_prog_org