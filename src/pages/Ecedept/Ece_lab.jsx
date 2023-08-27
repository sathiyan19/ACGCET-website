import React from 'react'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";
import { ece_dept_menu,ece_acad_labs,ece_indus_labs} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_lab = () => {
    return (
        <div className="ecedept">
          <div className="ecebg">
            <div className="eceheading">
              Department of Electronics and Communication Engineering
            </div>
            <div className="ece_sub_heading">Laboratories</div>
          </div>
          <section className="ecedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
            </div>
            <Radial_menu menu_links={ece_dept_menu} />
            <div className="ece_lab_area">
                <div className='ece_acad_labs'>
                    <Underline heading="Academic Labs"/>
                    <div className='lab_cards row'>
                        {ece_acad_labs.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
                <div className='ece_indus_labs'>
                    <Underline heading="Industry & Institute Labs"/>
                    <div className='lab_cards row'>
                        {ece_indus_labs.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Ece_lab