
import React, { useEffect,useState } from 'react';

import "./Coe_Contact.css";
import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import { coe_menu, query } from "../../constants/coe";
import { Radial_menu } from "../../components";
import { FaEmpire } from "react-icons/fa6";
import axios from 'axios';

const asr= "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Ece/faculties/teachingfac/ASR.webp"

const Contact = () => {
  useEffect(() => {
    document.title = 'Accet-COE | Contact';
  }, []);
  const [loading, setLoading]=useState(false);
  const [coename, setCoename]=useState();
  const [coeemail, setcoeemail]=useState();
  const [coephno, setcoephno]=useState();
  const [coequery, setcoequery]=useState();
  const sendQuery = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post('/backend/sendquery', { coename:coename,coeemail:coeemail,coephno:coephno,coequery:coequery,});
      console.log(response.data); 

    setCoename('');
    setcoeemail('');
    setcoephno('');
    setcoequery('');
    alert("Query sent successfully");
    } catch (error) {
      console.error('Error:', error);
      alert("Sorry, Something went wrong");
    }finally{
      setLoading(false);
    }
  };

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
        <div className="coe-contactform">
        <div className="coe-sir">
          <img className='coe-sir-img' src={asr} alt="Dr. A. Sivanantha Raja" />
          <p className="coe-sir-name">Dr. A. Sivanantha Raja,</p>
          <p className="coe-sir-designation">Controller of Examination,</p>
          <p>ACGCET, Karaikudi.</p>
 
        </div> 
          <div className="coe-textbox">
            <p className='coe-textbox-p'>Leave Your Query Here</p>
            <form id='coe-form' onSubmit={sendQuery}>
              <input className='coe-input' value={coename} type="text" id="name" placeholder="Your Name" required onChange={(e)=> setCoename(e.target.value.trim())}/>
              <input className='coe-input' value={coeemail} type="email" id="email" placeholder="Email Id" required onChange={(e)=> setcoeemail(e.target.value.trim())}/>
              <input className='coe-input' value={coephno} type="text" id="Phone" placeholder="Phone no" minLength={10} required onChange={(e)=> setcoephno(e.target.value.trim())}/>
              <textarea className='coe-textarea' value={coequery} id="message"rows="4"  placeholder="How can we help you" onChange={(e)=>setcoequery(e.target.value.replace(/ /g, ' '))}></textarea>
              <button className='coe-submit' type="submit" disabled={loading}>
              {loading ? 'Sending Query...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Backtotop />
    </div>
  );
}

export default Contact;