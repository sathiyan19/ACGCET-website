import React from 'react'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";
import { civ_dept_menu,civ_labs} from "../../constants/civil_dept";

import { Radial_menu } from "../../components";

import { BsFillBuildingsFill } from "react-icons/bs";

const Civil_lab = () => {
    return (
        <div className="civdept">
          <div className="civbg">
            <div className="civheading">
              Department of Civil Engineering
            </div>
            <div className="civ_sub_heading">Laboratories</div>
          </div>
          <section className="civdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillBuildingsFill} head="Menu" links={civ_dept_menu} />
            </div>
            <Radial_menu menu_links={civ_dept_menu} />
            <div className="civ_lab_area">
                <div className='civ_acad_labs'>
                    <Underline heading="Lab Facilities"/>
                    <div className='lab_cards row'>
                        {civ_labs.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Civil_lab