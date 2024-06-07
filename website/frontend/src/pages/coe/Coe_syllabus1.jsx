import React , { useEffect }from 'react'
import "./Coe_syllabus1.css";
import { Backtotop, Syllabuscard, Underline,Floatinmenu} from "../../widgets";
import { coe_syllabus, coe_menu,coe_syllabus22,coe_syllabus221} from "../../constants/coe";
import { Radial_menu } from "../../components";
import { FaEmpire } from "react-icons/fa6";

const Coe_syllabus1 = () => {
    useEffect(() => {
        document.title = 'Accet-COE |  2022 Syllabus';
      }, []);
  return (
    <div className="coe_dept">
    <div className="coe_bg">
      <div className="coe_heading">Controller of Examination</div>
      <div className="cse_sub_heading">2022 Syllabus</div>
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
  <div className="content">
  <Underline heading="UG Syllabus(Full And Part Time )"></Underline>
    
  <div className="syllabus_card_holder">
          {coe_syllabus22.map((item) => 
            <Syllabuscard key={item.id} heading={item.program} pdf={item.pdf} />
          )}
        </div>
        <Underline heading="PG Syllabus"></Underline>
        <div className="syllabus_card_holder">
        {coe_syllabus221.map((item) => 
            <Syllabuscard key={item.id} heading={item.program} pdf={item.pdf} />
          )}
        </div>


        </div>
      </section>
      <Backtotop />
    </div>
  );
}

export default Coe_syllabus1