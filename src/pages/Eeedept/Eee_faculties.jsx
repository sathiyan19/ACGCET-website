import React from "react";

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
import { eee_dept_menu,eee_fac_profiles,eee_sup_profiles} from "../../constants/eee_dept";

import { Radial_menu } from "../../components";


import { AiFillThunderbolt } from "react-icons/ai";

const Eee_faculties = () => {
  return (
    <div className="eeedept">
      <div className="eeebg">
        <div className="eeeheading">
          Department of Electrical and Electronics Engineering
        </div>
        <div className="eee_sub_heading">Faculties</div>
      </div>
      <section className="eeedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
        </div>
        <Radial_menu menu_links={eee_dept_menu} />
        <div className="eee_fac_area">
          <div className="eee_teach_fac">
            <Underline heading="Teaching Faculties" />
            <Profile_display list_info={eee_fac_profiles} />
          </div>
          <div className="eee_teach_fac">
            <Underline heading="Suporting Faculties" />
            <Profile_display list_info={eee_sup_profiles} />
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Eee_faculties;