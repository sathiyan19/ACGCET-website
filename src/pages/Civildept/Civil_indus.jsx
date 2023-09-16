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
                Internship is one of the mory garments for the Techuical Busin per the AICTE sons. Our BE final year malen will undergo DOTS-during J 1362822 Agu 100 2122 Tilly Four sumbers of fim were defendin were inde Inteship In this connect, the following faculty members rapped Meuter for students wandege ilgis diffi Fi The M monter their progressing the period of intent and to guide them the hip spot pepetion. Also, you are routed momplete dissipline, self- matory and by the rules & relations of otitution.
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