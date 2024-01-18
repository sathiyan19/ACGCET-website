import React from 'react'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";

import { Sh_dept_fmenu } from '../../constants/Sh_dept_menu';
import { Radial_menu } from "../../components";

import { GrTest } from "react-icons/gr";
import chemilab from "../../assets/pictures/chemilab.webp"

const Sh_Chemi_lab = () => {
  return (
    <div>
      <section className="shengdark">
        <div className="shengdept_float_menu">
          <Floatinmenu logo={GrTest} head="Menu" links={Sh_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Sh_dept_fmenu} />
        <div className="sheng_abt_area">
        <div className="sheng_abt">
        <Underline heading="Chemistry laboratory"/>
        <div className="shengtwo-col">
          <p className="sheng_dept_content">
          Laboratory, a hub for scientific exploration and research. The laboratory is divided into three distinct areas, each dedicated to specific scientific pursuits. The first area, spanning 17.7 meters in breadth, 29 meters in length, and 13.5 meters in height, provides an expansive and versatile space for a wide range of experiments and studies.
          For advanced research endeavors, the Research Laboratory, with dimensions of 3.9 meters in width, 5.3 meters in length, and 13.5 meters in height, serves as a dedicated space for innovation and experimentation.
</p>
          <div className="dept_img_holder">
            <img className="dept_img" src={chemilab} />
          </div>
        </div>
        <div className="shengtwo-col1">
          <p className="sheng_dept_content">
          
The Instrumentation Laboratory, measuring 8.3 meters in width, 9.5 meters in length, and 13.5 meters in height, is a specialized section equipped with state-of-the-art instruments tailored to meet the demands of modern analytical chemistry. Here, students and researchers have access to cutting-edge tools like the Hitachi S-3000N Scanning Electron Microscope with EDAX, the Auto Lab Electrochemical Workstation, the Thermo Scientific Atomic Absorption Spectrophotometer, and the Systronics UV-Visible Spectrophotometer, among others.
The laboratory is fully equipped with essential instruments and equipment, including digital conductometers, potentiometers, and pH meters, heating mantles, hot plates, and specialized units such as the double distillation unit and RO plant. With these resources at their disposal, students and researchers have the means to explore and contribute to the fascinating world of chemistry, advancing our understanding and applications of this fundamental science.
</p>
        </div>
        </div>
        </div>
          </section>
    
          <Backtotop />
    </div>
  )
}

export default Sh_Chemi_lab
