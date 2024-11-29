import React,{useEffect} from "react";

import "./Ece_events.css";

import { Backtotop, Floatinmenu, Underline,Modal,Reunion_card, Content_card } from "../../widgets";
import {Timeline} from '../../components'
import { ece_dept_menu, ece_dept_events,ece_events ,sympo_data} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_events = () => {
  useEffect(() => {
    document.title = 'ACCET-ECE | Events';
  }, []);
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
        <div className="ece_sub_heading">Events</div>
      </div>
      <section className="ecedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
        </div>
        <Radial_menu menu_links={ece_dept_menu} />
        <div className="ece_event_area">
          <div className="ece_events">
            {/* <Underline heading="Association Events" /> */}
            <Underline heading="Association Events Report" />
            <div className='sympo_cards'>
              {sympo_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
          </div>
          <Underline heading="Association Events " />
            {/* {ece_dept_events.map((item)=><Timeline key={item.id} head={item.head} date={item.date} house={item.house} content={item.content}/>)} */}
            <div className=' row'>
              {/* {ece_events.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} sub_text={item["sub-head"]}/>)} */}
              {ece_events.map((item)=><Reunion_card margin_bw={20} cover={item.pic}  name={item.heading} date={item["sub-head"]}/>)}
            </div>
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Ece_events;
