import React, { useEffect } from 'react';
import "./Coe_syllabuss.css";
import { Backtotop, Syllabuscard, Underline,Floatinmenu} from "../../widgets";
import { coe_syllabus, coe_menu,coe_syllabus1,coe_syllabus2} from "../../constants/coe";
import { Radial_menu } from "../../components";
  import { BsFillGearFill} from "react-icons/bs";
const Coe_syllabuss = () => {
  useEffect(() => {
    document.title = 'Accet-COE |  2019 Syllabus';
  }, []);

  return (
    <div className="coe_dept">
      <div className="coe_bg">
        <div className="coe_heading">Controller of Examination</div>
        <div className="cse_sub_heading">2019 and 2019A Syllabus</div>
      </div>

      <section className="coe_dark">
      

      <div className="dept_float_menu">
      <Floatinmenu
      logo={BsFillGearFill}
      head="Menu"
      links={coe_menu}
      />
          

    </div>
    <Radial_menu menu_links={coe_menu} />
    <div className="content">
    <Underline heading="UG Syllabus"></Underline>

        <div className="syllabus_card_holder">
          {coe_syllabus.map((item) => 
            <Syllabuscard key={item.id} heading={item.program} pdf={item.pdf} />
          )}
        </div>
        <Underline heading="UG Syllabus(Part Time) "></Underline>

        <div className="syllabus_card_holder">
        {coe_syllabus1.map((item) => 
            <Syllabuscard key={item.id} heading={item.program} pdf={item.pdf} />
          )}
        </div>
        <Underline heading="PG Syllabus"></Underline>
        <div className="syllabus_card_holder">
        {coe_syllabus2.map((item) => 
            <Syllabuscard key={item.id} heading={item.program} pdf={item.pdf} />
          )}
        </div>
        </div>
      </section>
      <Backtotop />
    </div>
  );
}

export default Coe_syllabuss;
