// import React,{useEffect} from 'react'
// import "./Cgpa_cal.css";
// import{
//   Backtotop,
//   Floatinmenu,
//   Underline,
//   Opening,
  
// }from"../../widgets";
// import { Radial_menu } from "../../components";
// import { FaEmpire } from "react-icons/fa6";
// import
// {
//   dept
// }from"../../constants/cgpa_cal";
// const Cgpa_cal = () => {
//   useEffect(()=>{
//     document.title='Accet-COE';
//   },[]);
//   return (
   
//     <div className="cgpa_cal">
//   <div className="coe_bg">
//     <div className="coe_heading">Controller of Examination</div>
//   </div>
//   <section className="coe_dark">
//     <div className="dept_float_menu">
//       {/* <Floatinmenu
//       logo={FaEmpire}
//       head="Menu"
//       links={coe_menu}
//       /> */}

//     </div>
//     {/* <Radial_menu menu_links={coe_menu} /> */}
//     <div className="content_card_holder">
//     {dept.map((item)=><Opening key={item.id} heading={item.program} click={item.click} />)}
//     </div>
//     </section>
  
// </div>
//   )
// }

// export default Cgpa_cal