import React,{useEffect} from "react";

import {
    Backtotop,
    Floatinmenu,
    Underline,
  } from "../../widgets";
  
  import {
    mech_dept_menu,
    mech_coe_researches,
    mech_objectives_of_coe
  } from "../../constants/mech_dept";  

import {Listformat} from '../../components'

import { Radial_menu } from "../../components";

import { BsFillGearFill } from "react-icons/bs";

import Centre_of_Excellence from '../../assets/pictures/mechdept/mech_labs/Centre_of_Excellence.webp'

const Mech_coe = () => {
  useEffect(() => {
    document.title = 'ACCET-MECH | CoE';
  }, []);
  return (
    <div className="mechdept">
      <div className="mechbg">
        <div className="mechheading">
          Department of Mechanical Engineering
        </div>
        <div className="mech_sub_heading">Centre of Excellance on Smart Manufacturing</div>
      </div>
      <section className="csedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
        </div>
        <Radial_menu menu_links={mech_dept_menu} />
        <div className="mech_lab_area">
          <Underline heading="Centre of Excellence" />
          <div className="mechtwo-col">
            <p className="mech_dept_content">
              Centre of Excellence (CoE) for Smart Manufacturing (Industry 4.0) is established for the modernization of Manufacturing Lab. with the Grant-in Aid of Rs. 2 Crore by Govt. of Tamilnadu (G.O. (Ms).No.151, Higher Education (B1) Department Dated: 26.07.2019. Our state-of-the-art facility is designed to be a nexus for cutting-edge research, development, and education in the field of smart manufacturing.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={Centre_of_Excellence} />
            </div>
          </div>
          <div className="mechtwo-col1">
            <p className="cse_dept_content">
            Here, researchers and industry professionals explore the convergence of digital and physical systems to revolutionize the manufacturing landscape. Our facility features a comprehensive suite of tools and equipment, including advanced sensors, IoT devices, augmented reality systems, and artificial intelligence platforms. These resources empower researchers to design and implement innovative solutions that enhance efficiency, optimize production processes, and minimize environmental impact.
            </p>
          </div>

          <div className="mech_objectives_of_coe">
            <Underline heading="Objectives of CoE"/>
            <Listformat points={mech_objectives_of_coe}/>
          </div>

          <div className="mech_coe_researches">
              <Underline heading="Research Facilities"/>
              <Listformat points={mech_coe_researches}/>
          </div>

        </div>
      </section>

      <Backtotop />
    </div>
  );
};


export default Mech_coe;