import React ,{useEffect}from 'react'
import "./Coe_FeeStruct.css";
import{
    Backtotop,
    Floatinmenu,
    Underline,
    
    
  }from"../../widgets";
  
  import
  {
    coe_menu,
   fees_structure,
    
  }from"../../constants/coe";
  import { Radial_menu,Table } from "../../components";
  import { FaEmpire } from "react-icons/fa6";

const Coe_FeeStruct = () => {
  useEffect(()=>{
    document.title='Accet-COE| Claim Bills';
  },[]);
  const columns=[
    {field:"sno",header:"s no"},
    {field:"Fees for",header:"Fees For"},
    {field:"Amount in Ruppes",header:"Amount in Rupees"}
   
  ];

  return (
    <div className="coe_dept">
    <div className="coe_bg">
      <div className="coe_heading">Controller of Examination</div>
      <div className="cse_sub_heading">Fees Structure</div>
    </div>
    <section className="coe_dark">
      <div className="dept_float_menu">
        <Floatinmenu
        logo={FaEmpire }
        head="Menu"
        links={coe_menu}
        />
  
      </div>
      <Radial_menu menu_links={coe_menu} />
      <Underline heading="Fees Structure"/>
      <div className="fees">
      <Table data={fees_structure} columns={columns}/>
      </div>
      </section>
  <Backtotop/>
</div>

  );
}

export default Coe_FeeStruct