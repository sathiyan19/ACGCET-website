import React, { useEffect } from "react";
import "./Coe_Adminstration.css";
import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import { Listformat } from "../../components";
import {
  coe_menu,
  Coe_adminstration,
  Coe_adminstration1,
} from "../../constants/coe";
import { Profile_display } from "../../components";
import { Radial_menu } from "../../components";
import { FaEmpire } from "react-icons/fa6";
const mech="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/mech/mech_cover.webp"

const Coe_Adminstration = () => {
  useEffect(() => {
    document.title = "ACCET-COE | Administration";
  }, []);

  return (
    //coe changes
    <div className="coe_dept">
      <div className="coe_bg">
        <div className="coe_heading">Controller of Examination</div>
        <div className="cse_sub_heading">Administration</div>
      </div>
      <section className="coe_dark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={FaEmpire}
            head="Menu"
            links={coe_menu}
          />
        </div>
        <Radial_menu menu_links={coe_menu} />
        <div className="coe">
          <div className="coe-heading">
            <Underline heading="COE Administration" />
            <Profile_display list_info={Coe_adminstration} />
          </div>
        </div>
        <div className="coe">
          <div className="coe-heading">
            <Underline heading="COE Supporting Staff" />
            <div className="coe_admin_staff_outer">
            <div className="coe_admin_staff_inner">
            <div className="coe_list">
            <Listformat points={Coe_adminstration1}  />
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <Backtotop />
    </div>
  );
};

export default Coe_Adminstration;


