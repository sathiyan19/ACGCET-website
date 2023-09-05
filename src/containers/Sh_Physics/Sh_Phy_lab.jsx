import React from 'react'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";
import { ece_dept_menu,ece_acad_labs,ece_indus_labs} from "../../constants/ece_dept";
import { Sh_dept_fmenu } from '../../constants/Sh_dept_menu';
import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";


const Sh_Phy_lab = () => {
  return (
    <div>
      <section className="shengdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={Sh_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Sh_dept_fmenu} />
            <div className="sheng_lab_area">
                <div className='sheng_acad_labs'>
                    <Underline heading="Academic Labs"/>
                    <div className='lab_cards row'>
                        {ece_acad_labs.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
                <div className='sheng_indus_labs'>
                    <Underline heading="Industry & Institute Labs"/>
                    <div className='lab_cards row'>
                        {ece_indus_labs.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
            </div>
          </section>
    
          <Backtotop />
    </div>
  )
}

export default Sh_Phy_lab
