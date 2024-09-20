import React,{useEffect} from "react";

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
import { eee_dept_menu,eee_fac_profiles,eee_sup_profiles} from "../../constants/eee_dept";

import { Radial_menu } from "../../components";


import { AiFillThunderbolt } from "react-icons/ai";

const Eee_faculties = () => {
  useEffect(() => {
    document.title = 'ACCET-EEE | Faculties';
  }, []);
  return (
    <div className="eeedept">
      <div className="eeebg">
        <div className="eeeheading">
          Department of Electrical and Electronics Engineering
        </div>
        <div className="eee_sub_heading">Faculty members</div>
      </div>
      <section className="eeedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
        </div>
        <Radial_menu menu_links={eee_dept_menu} />
        <div className="eee_fac_area">
          <div className="eee_teach_fac">
            <Underline heading="Faculty Members" />
            <Profile_display list_info={eee_fac_profiles} />
          </div>
          <div className="eee_teach_fac">
            <Underline heading="Technical Staff" />
            <Profile_display list_info={eee_sup_profiles} />
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Eee_faculties;
