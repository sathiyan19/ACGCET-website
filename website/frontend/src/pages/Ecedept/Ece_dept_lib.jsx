import React,{useEffect} from 'react'

import {
    Backtotop,
    Floatinmenu,
    Underline,
  } from "../../widgets";
  
  import {
    ece_dept_menu,
    ece_dept_lib,
  } from "../../constants/ece_dept";
  
  import {Timeline} from '../../components'
  
  import { Radial_menu } from "../../components";
  
  import { FaMicrochip } from "react-icons/fa6";

const Ece_dept_lib = () => {
  useEffect(() => {
    document.title = 'ACCET-ECE | Library';
  }, []);
    return (
        <div className="ecedept">
          <div className="ecebg">
            <div className="eceheading">
              Department of Electronics and Communication Engineering
            </div>
            <div className="ece_sub_heading">Library</div>
          </div>
          <section className="ecedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
            </div>
            <Radial_menu menu_links={ece_dept_menu} />
            <div className="ece_dept_lib_area">
    
              <div className="ece_dept_lib">
                <Underline heading="Department Library"/>
                {ece_dept_lib.map((item)=><Timeline key={item.id} head={item.head} house={item.house} content={item.content} pdf={item.pdf}/>)}
              </div>

            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Ece_dept_lib