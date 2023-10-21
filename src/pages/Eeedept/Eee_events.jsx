import React from 'react'
import './Eee_events.css'

import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import { eee_dept_menu, eee_staff, events_info,eee_event, eee_events_info1, eee_events_info2, eee_events_info3, eee_events_info4, eee_events_info5, eee_events_info6} from "../../constants/eee_dept";

import { Radial_menu,Listformat,Reunion_card_display,Table } from "../../components";

import { AiFillThunderbolt } from "react-icons/ai";

const Eee_events = () => {
  const column=[
    {field:'sno',header:"Sno"},
    {field:'title',header:"Title of the Program"},
    {field:'chiefguest',header:"Chief Guest"},
    {field:'date',header:"Date"}
  ]
    return (
        <div className="eeedept">
          <div className="eeebg">
            <div className="eeeheading">
              Department of Electrical and Electronics Engineering
            </div>
            <div className="eee_sub_heading">Events</div>
          </div>
          <section className="eeedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
            </div>
            <Radial_menu menu_links={eee_dept_menu} />
            <div className="eee_event_area">
              <div className="eee_events">
                <Underline heading="EEE Association" />
                <div className="eeetwo-col1">
            <p className="eee_dept_content">
The EEE Association is vibrant association of students and faculty members of the department. Various events like Inaguration, Alconesy, Think Quest, Validiction etc.,  are organised around the year to promote technical and mangerical skills of the students, The major annual tecnhical events organised are
            </p>
            <Listformat points={events_info}/>
            <p className="eee_dept_content">Faculty In charge for the EEE Association :</p>
            <Reunion_card_display cardinfo_list={eee_staff}/>
            </div>
            <div className="eee_event">
              <div className="eee_event_table">
              <Table data={eee_event} columns={column}/>
            </div>
            </div>
            <Underline heading="Events"/>
            <div className="eee_events_info1">
              <h3>Think Quest 2K19</h3>
              <Listformat points={eee_events_info1}/>
            </div>
            <div className="eee_events_info2">
              <h3>ALCONESY’18</h3>
              <Listformat points={eee_events_info2}/>
            </div>
            <div className="eee_events_info3">
              <h3>Think Quest 2K18</h3>
              <Listformat points={eee_events_info3}/>
            </div>
            <div className="eee_events_info4">
              <h3>ALCONESY’17</h3>
              <Listformat points={eee_events_info4}/>
            </div>
            <div className="eee_events_info5">
              <h3>Think Quest 2K16</h3>
              <Listformat points={eee_events_info5}/>
            </div>
            <div className="eee_events_info6">
              <h3>ALCONESY’15</h3>
              <Listformat points={eee_events_info6}/>
            </div>
              </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Eee_events