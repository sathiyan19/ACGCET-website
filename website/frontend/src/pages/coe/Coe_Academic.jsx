import React ,{useEffect} from 'react'
import "./Coe_Academic.css";
import{
    Backtotop,
    Floatinmenu,
    Underline,
    Content_card,
    Opening,
    
    
  }from"../../widgets";
  
  import
  {
    coe_menu,
    coe_syllabus,
    coe_regulation,
    newId
  }from"../../constants/coe";
  import { Radial_menu } from "../../components";
  import { FaEmpire } from "react-icons/fa6";
const Coe_Academic = () => {
    useEffect(()=>{
        document.title='Accet-COE| Academics';
      },[]);
  return (
    <div className="coe_dept">
  <div className="coe_bg">
    <div className="coe_heading">Controller of Examination</div>
    <div className="cse_sub_heading">Academics</div>
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
    <Underline heading ="Regulation"/>
    <div className="content_card_holder">
  
      {coe_regulation.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
    </div>
    <Underline heading ="Syllabus"/>
    <div className="content_card_holder">
    {newId.map((item)=><Opening key={item.id} heading={item.program} click={item.click} />)}
    </div>
    </section>
  <Backtotop/>
</div>
  );
}

export default Coe_Academic