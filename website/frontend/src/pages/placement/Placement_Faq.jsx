import React, { useEffect } from 'react'

import "./Placement.css";
import "./Placement_Faq.css";
import { Backtotop,Floatinmenu,Underline,Deptvision,Deptmission } from "../../widgets";
import {Accordion,Hodmsg} from '../../components';
import { placement_menu,placement_faqs } from "../../constants/placement";

import {Radial_menu } from "../../components";

import { FaGraduationCap } from "react-icons/fa";
import oracle_placement from '../../assets/pictures/news_img/oracle.webp'

const cse="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cse/csecover.webp"

const Placement_Faq = () => {
    useEffect(() => {
        document.title='ACCET-Placement-FAQs';
      }, []);
  return (
    <div className='placement'>
      <div className='placementbg'>
        <div className='placementheading'>
          Placement
        </div>
        <div className='placement_sub_heading'>Frequently asked questions</div>
      </div>
      <section className='placementdark'>
        <div className='dept_float_menu'>
        <Floatinmenu logo={FaGraduationCap} head="Menu" links={placement_menu} />
        </div>
        <Radial_menu menu_links={placement_menu}/>
        <div className='placement_abt'>
        <Underline heading="Placement FAQs"/> 
        <div className='placement_faq_holder'>
            <Accordion accord_data={placement_faqs}/>
        </div>
        </div>
      </section>

      <Backtotop />
    </div>
  )
}

export default Placement_Faq