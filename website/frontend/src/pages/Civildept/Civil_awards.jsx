import React,{useEffect} from 'react'

import {
    Backtotop,
    Floatinmenu,
    Underline,
    Modal
  } from "../../widgets";
  
  import {
    civ_dept_menu,
    civ_awards,
    civ_patents,
    civ_stud_achivement
  } from "../../constants/civil_dept";

  import {Listformat, Timeline} from '../../components'

import { Radial_menu } from "../../components";

import { BsFillBuildingsFill } from "react-icons/bs";

const Civil_awards = () => {
  useEffect(() => {
    document.title = 'ACCET-Civil | Achievements';
  }, []);
    return (
        <div className="civdept">
          <div className="civbg">
            <div className="civheading">
              Department of Civil Engineering
            </div>
            <div className="civ_sub_heading">Achievements</div>
          </div>
          <section className="civdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillBuildingsFill} head="Menu" links={civ_dept_menu} />
            </div>
            <Radial_menu menu_links={civ_dept_menu} />

            <div className="civ_award_area">
    
              <div className="civ_award">
                <Underline heading="Awards"/>
                {civ_awards.map((item)=><Timeline key={item.id} pdf={item.pdf} head={item.head} house={item.house} content={item.content}/>)}
              </div>

              <div className="civ_patents">
                <Underline heading="Patents & Copyrights"/>
                {civ_patents.map((item)=><Timeline key={item.id} pdf={item.pdf} head={item.head} house={item.house} content={item.content}/>)}
              </div>

              <div className="civ_stud_achievement">
                <Underline heading="Students Achievements"/>
                {civ_stud_achivement.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} link={item.link} sub_text={item["sub-head"]}/>)}
              </div>
    
            </div>

          </section>
    
          <Backtotop />
        </div>
      );
}

export default Civil_awards