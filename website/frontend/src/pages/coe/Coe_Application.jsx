import React ,{useEffect}from 'react'
import"./Coe_Application.css";
import{
    Backtotop,
    Floatinmenu,
    Underline,
    Content_card,
    Syllabuscard
    
  }from"../../widgets";
  import
  {
    coe_menu,

    app,
    coe_syllabus2
    
  }from"../../constants/coe";
  import { Radial_menu } from "../../components";
  import { FaEmpire } from "react-icons/fa6";
const Application = () => {
    useEffect(()=>{
        document.title='Accet-COE| Application';
      },[]);
  return (
    <div className="coe_dept">
    <div className="coe_bg">
      <div className="coe_heading">Controller of Examination</div>
      <div className="cse_sub_heading">Applications</div>
      

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
      <Underline heading="Applications"/>
    <div className="content_card_holder">
        {app.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
    </div>
    
    </section>
  <Backtotop/>
</div>
  );
}

export default Application