import React,{useEffect} from 'react'

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

const AL1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Civil/Industry_interaction/consulting/civil_AL_1.jpg"
const AL2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Civil/Industry_interaction/consulting/civil_AL_2.jpg"
const CVP1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Civil/Industry_interaction/consulting/civil_CVP_1.jpg"
const KMS1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Civil/Industry_interaction/consulting/civil_KMS_1.jpg"
const KMS2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Civil/Industry_interaction/consulting/civil_KMS_2.jpg"
const KMS3="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Civil/Industry_interaction/consulting/civil_KMS_3.jpg"
const SRS1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Civil/Industry_interaction/consulting/civil_SRS_1.jpg"
const SRS2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Civil/Industry_interaction/consulting/civil_SRS_2.jpg"

const Civil_indus = () => {
  useEffect(() => {
    document.title = 'ACCET-Civil | Industry Interaction';
  }, []);
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

               <Underline heading="Consultancy Activities"/>
               <div className='civ_consult_content'>Standard Penetration Test conducted for various construction works to investigate the Safe Bearing Capacity of Soil.</div>
               <div className='civ_consult_layout'>

                <div className='civ_consult_img_holder'>
                  <img className='civ_consult_img' src={AL1}/>
                </div>

                <div className='civ_consult_img_holder'>
                  <img className='civ_consult_img' src={CVP1}/>
                </div>

                <div className='civ_consult_img_holder'>
                  <img className='civ_consult_img' src={KMS1}/>
                </div>

                <div className='civ_consult_img_holder'>
                  <img className='civ_consult_img' src={KMS2}/>
                </div>

                <div className='civ_consult_img_holder'>
                  <img className='civ_consult_img' src={KMS3}/>
                </div>

               </div>

               <div className='civ_consult_layout'>

                <div className='civ_consult_img_holder_pot'>
                  <img className='civ_consult_img' src={AL2}/>
                </div>

                <div className='civ_consult_img_holder_pot'>
                  <img className='civ_consult_img' src={SRS1}/>
                </div>

                <div className='civ_consult_img_holder_pot'>
                  <img className='civ_consult_img' src={SRS2}/>
                </div>

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