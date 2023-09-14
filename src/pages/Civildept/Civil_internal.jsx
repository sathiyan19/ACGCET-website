import React from 'react'

import { Floatinmenu,Underline,Content_card } from '../../widgets';
import { Radial_menu } from '../../components';
import { civ_dept_menu,internal } from '../../constants/civil_dept';

import { BsFillBuildingsFill } from "react-icons/bs";


const Civil_internal = () => {
  return (
    <div>
      <div className="civdept">
      <div className="civbg">
        <div className="civheading">Department of Civil Engineering</div>
      </div>
      <div className="civ_sub_heading">Internal Revenue Generation</div>
      <section className="civdark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={BsFillBuildingsFill}
            head="Menu"
            links={civ_dept_menu}
          />
        </div>
        <Radial_menu menu_links={civ_dept_menu} />
        <div className="civ_prog_offered">
          <Underline heading="Internal Revenue Generation" />
          <div className="civ_progs">
            {internal.map((item) => (
              <Content_card
                key={item.id}
                period={item.period}
                year={item.year}
                top_head={item.top_head}
                heading={item.program}
                intake={item.intake}
                pdf={item.pdf}
              />
            ))}
          </div>
        </div>
        </section>
        </div>
    </div>
  )
}

export default Civil_internal
