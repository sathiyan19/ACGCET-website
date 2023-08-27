import React from 'react'
import { Backtotop,Floatinmenu,Underline,Modal } from "../../widgets";
import { cse_dept_menu,cse_labs} from "../../constants/cse_dept";

import {Radial_menu } from "../../components";
import cse from "../../assets/pictures/csecover.webp";

import {FaComputer} from 'react-icons/fa6'

const Cse_lab = () => {
    return (
        <div className="csedept">
          <div className="csebg">
            <div className="cseheading">
              Department of Computer Science and Engineering
            </div>
            <div className="cse_sub_heading">Laboratories</div>
          </div>
          <section className="csedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaComputer} head="Menu" links={cse_dept_menu} />
            </div>
            <Radial_menu menu_links={cse_dept_menu} />
            <div className="cse_lab_area">
                <div className='cse_acad_labs'>
                    <Underline heading="Department Labs"/>
                    <div className='lab_cards row'>
                        {cse_labs.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Cse_lab