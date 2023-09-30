import React from 'react'

import "./Civil_indus.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
  Content_card

} from "../../widgets";

import {
  civ_dept_menu,
  civ_indus_slide,
  intern_data,
  mou_data
} from "../../constants/civil_dept";

import { Radial_menu,Slideshow} from "../../components";


import { BsFillBuildingsFill } from "react-icons/bs";

const Civil_indus = () => {
    return (
        <div className="civdept">
          <div className="civbg">
            <div className="civheading">
              Department of Civil Engineering
            </div>
            <div className="civ_sub_heading">Industry Interaction</div>
          </div>
          <section className="civdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillBuildingsFill} head="Menu" links={civ_dept_menu} />
            </div>
            <Radial_menu menu_links={civ_dept_menu} />


            <div className="civ_indus">
    
               <Underline heading="Internship"/>
               <div className='civ_intern'>
                <div className='civ_intern_content'>
                Internship is one of the mandatory requirements for the Technical Education students as per the AICTE norms. Our B.E final year students will undergo DOTE-Internship during July 13th 2022 to August 10th 2022. Totally Four members of firm were identified and permission were obtained for internship. In this connection, the following faculty members are appointed as Mentor for the students who undergone internship in different firms. The Mentors are requested to monitor their progress during the entire period of internship and to guide them for the internship report preparation. Also, you are requested to monitor complete discipline, self-mastery and abide by the rules and regulations of our Institution.
                </div>
                <div className='civ_intern_slide'>
                    <Slideshow images={civ_indus_slide} flag="true" />      
                </div>
               </div>

              
               <Underline heading="Internship Details"/>
               

               <div className='civil_intern_cards'>
                {intern_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
               </div>

               <Underline heading="Mou"/>

               <div className='civil_mou_cards'>
                {mou_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
               </div>



            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Civil_indus