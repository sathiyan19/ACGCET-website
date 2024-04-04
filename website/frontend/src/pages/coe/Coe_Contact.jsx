
import React, { useEffect } from 'react';

import "./Coe_Contact.css";
import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import { coe_menu, query } from "../../constants/coe";
import { Radial_menu } from "../../components";
import { FaEmpire } from "react-icons/fa6";

const asr= "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Ece/faculties/teachingfac/ASR.webp"

const Contact = () => {
  useEffect(() => {
    document.title = 'Accet-COE | Contact';
  }, []);

  return (
    <div className="coe_dept">
      <div className="coe_bg">
      

        <div className="coe_heading">Controller of Examination</div>
        <div className="cse_sub_heading">Contact</div>
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
       
        <div className="heading">
          <Underline heading="Post your queries" />
        </div>
        <div className="contactform">
        <div className="sir">
  <img src={asr} alt="Dr. A. Sivanantha Raja" />
 
  <p className="name">Dr. A. Sivanantha Raja,</p>
  <p className="designation">Controller of Examination,</p>
  <p>ACGCET, Karaikudi.</p>
 
 
</div>

          
       
         
       
       
          <div className="textbox">
            <p>Leave Your Query Here</p>
            <form>
              <input type="text" id="name" placeholder="Your Name" required />
              <input type="email" id="email" placeholder="Email Id" required />
              <input type="text" id="Phone" placeholder="Phone no" required />
              <textarea id="message"rows="4"  placeholder="How can we help you"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Backtotop />
    </div>
  );
}

export default Contact;