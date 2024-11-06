import React ,{useEffect} from 'react'
import "./Ece_alumni.css";
import{
    Backtotop,
    Floatinmenu,
    Underline,
    Content_card,
    Opening,   
  }from"../../widgets";
  import { FaMicrochip } from "react-icons/fa6";
  import
  {
      ece_alumni,
    ece_dept_menu,
    
 
  }from"../../constants/ece_dept";
  import { Radial_menu } from "../../components";
 
const Ece_alumni = () => {
    useEffect(()=>{
        document.title='Accet-ECE| Alumni';
      },[]);
      return (
        <div className="ecedept">
          <div className="ecebg">
            <div className="eceheading">
              Department of Electronics and Communication Engineering
            </div>
            <div className="ece_sub_heading">Alumni</div>
          </div>
          <section className="ecedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
            </div>
            <Radial_menu menu_links={ece_dept_menu} />
    
    <Underline heading ="Alumni"/>
    <div className="content_card_holder">
    {ece_alumni.map((item)=><Opening key={item.id} heading={item.program} click={item.click} />)}
    </div>
    </section>
  <Backtotop/>
</div>
  );
}

export default Ece_alumni