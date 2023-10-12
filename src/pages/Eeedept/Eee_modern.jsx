import React from 'react'

import "./Eeedept.css";
import {
  Backtotop,
  Floatinmenu,
  Modal,
  Underline,
} from "../../widgets";
import {
    eee_dept_menu,
    features,
    feedback
  } from "../../constants/eee_dept";
  
  import drives from '../../assets/pictures/eee_dept/eee_labs/drives.webp'
import { Radial_menu,Hodmsg, Listformat } from "../../components";
// import eee from "../../assets/pictures/eee_about.webp";

import { AiFillThunderbolt } from "react-icons/ai";

const Eee_modern = () => {
  return (
    <div className="eeedept">
      <div className="eeebg">
        <div className="eeeheading">
          Department of Electrical and Electronics Engineering
        </div>
        <div className='eee_sub_heading'>Modern Electric Drives System</div>
      </div>
      <section className="eeedark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={AiFillThunderbolt}
            head="Menu"
            links={eee_dept_menu}
          />
        </div>
        <Radial_menu menu_links={eee_dept_menu} />


        <div className="eee_abt">
          <Underline heading="Modern Electric Drives System" />
          <div className="eeetwo-col">
            <p className="eee_dept_content">
              Modern Electric Drive System facility with industrial grade
              gives industrial feel to our students in addition to the Laboratory
              environment. It is being utilized by our students for their projects and by the faculty
              for demonstration classes. Since the above system is industrial grade, the scholars working with this 
              industrial grade system will be 'the ready man power' for the industries.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={drives} />
            </div>
          </div>
        </div> 
        <Underline heading="Unique Features" />
        <Listformat points={features} />
        <Underline heading="Feedback from the Student Users" />
        <div className="feedback">
        {feedback.map((item) => (
        <Modal
         heading={item.heading}
         pic={item.pic}
         content_1={item.content_1}
         content_2={item.content_2}
         sub_text={item.sub_text}
         />
        ))}
        </div>
      </section>

      <Backtotop />
    </div>
  )
}

export default Eee_modern;