// import React from 'react'

// const Ece_elect_test_coe = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Ece_elect_test_coe

import React ,{useEffect}from 'react'
import "./Ece_elect_test_coe.css";
import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import {
    ece_dept_menu,
    list_head,
    list_head1,
    
  } from "../../constants/ece_dept";
  import { Radial_menu, Listformat } from "../../components";
  import { FaMicrochip } from "react-icons/fa6";
  const center="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Ece/coe/CENTRE_OF_EXCELLENCE_IN_ELECTRONICS_TEST_ENGINEERING-_1_-2.webp"
const Ece_elect_test_coe = () => {
    useEffect(() => {
        document.title = 'ACCET-ECE | Center of Excellence';
      }, []);
  return (
    <div className="ecedept">
    <div className="ecebg">
      <div className="eceheading">
        Department of Electronics and Communication Engineering
      </div>
      <div className="ece_sub_heading">Electronics Test Engineering</div>
    </div>
    <section className="ecedark">
      <div className="dept_float_menu">
        <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
      </div>
      <Radial_menu menu_links={ece_dept_menu} />
      <div className="ece_abt">
          <Underline heading="Centre of Excellence in Electronics Test Engineering" />
          <div className="ecetwo-col">
            <p className="ece_dept_content">
            Centre of Excellence in Electronics Test Engineering has been established and this facility is being used for B.E., M.E and Ph.D scholars for doing their Mini project, Final year Project work and Research work. In addition to the academic usage, this centre can be used to generate revenue by the way of allowing outstation Ph.D scholars and industry persons for testing their electronic boards at a nominal fee
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={center} />
            </div>
          </div>
         </div>
         <div className="ece_coe">
            <Underline heading="Centre of Excellence focuses on the below:"/>
            <Listformat points={list_head}/>
          </div>
          <div className="ece_coe1">
            <Underline heading="Major Equipment:"/>
            <div className="ece_admin_staff_outer">
            <div className="ece_admin_staff_inner">
            <div className="ece_list"></div>
            <Listformat points={list_head1}/>
          </div>
          </div>
            </div>
          
           
      </section>

<Backtotop />
</div>
  );
};

export default Ece_elect_test_coe
