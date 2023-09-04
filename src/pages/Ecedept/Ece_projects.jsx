import React from 'react'

import './Ece_projects.css'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";
import { ece_dept_menu,ece_projects} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_projects = () => {
    return (
        <div className="ecedept">
          <div className="ecebg">
            <div className="eceheading">
              Department of Electronics and Communication Engineering
            </div>
            <div className="ece_sub_heading">Projects</div>
          </div>
          <section className="ecedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
            </div>
            <Radial_menu menu_links={ece_dept_menu} />
            <div className="ece_proj_area">
                <div className='ece_projects'>
                    <Underline heading="Best Projects"/>
                    <div className='lab_cards row'>
                        {ece_projects.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Ece_projects