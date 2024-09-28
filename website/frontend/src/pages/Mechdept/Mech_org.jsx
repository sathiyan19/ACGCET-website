import React,{useEffect} from 'react'
import "./Mech_org.css";
import { Backtotop,Floatinmenu, Underline} from "../../widgets";

import { mech_dept_menu,mech_organised} from "../../constants/mech_dept";
import { Radial_menu,Table } from "../../components";
import { BsFillGearFill } from "react-icons/bs";
const Mech_org = () => {
    useEffect(() => {
    document.title = 'ACCET-Mech | Events Organised';
      }, []);
      const columns=[
        {field:"sno",header:"s no"},
        {field:"title",header:"Title of the Program"},
        {field:"Date",header:"Date"},
        {field:"resource",header:"Resource"},
        {field:"beneficiary",header:"Benificiary"},
        {field:"co-ordinator",header:"Co-ordinator"}

      ];
  return (
    <div className="mechdept">
    <div className="mechbg">
      <div className="mechheading">
        Department of Mechanical Engineering
      </div>
      <div className="mech_sub_heading">Events</div>
    </div>
    <section className="mechdark">
      <div className="dept_float_menu">
        <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
      </div>
      <Radial_menu menu_links={mech_dept_menu} />
      <Underline heading ="Department Events"/>
      <div className="orgcontent">
        <p className="content">
        The Mechanical Department at ACGCET, Karaikudi, boasts a rich history of organizing an extensive array of academic and technical events, reinforcing its commitment to fostering knowledge and skill development among students and faculty. The department hosts inter and intra-college technical symposiums like "SHACKLES" and "FUELS," providing a platform for students to engage with cutting-edge advancements and industry professionals.








        </p>
        <p className="content1">
        Webinars on outcome-based education and leveraging platforms like Science Direct demonstrate the department's commitment to holistic learning. Initiatives like the TEQIP-sponsored workshops on entrepreneurship, surface protection, and manufacturing techniques underscore the department's efforts to instill innovation and continuous learning.

The department's focus extends beyond routine academic events to encompass national conferences, fire safety awareness programs, and skill development initiatives. Seminars on material characterization and first aid, along with conferences on contemporary design approaches, exemplify the department's diverse offerings.


        </p>
        <p className="content2">
        Moreover, the department actively collaborates with experts from prestigious institutions such as Multimedia University, Malaysia, and IIT Bombay, enriching the academic experience. These events not only contribute to the intellectual growth of students but also align with the broader goal of preparing them for real-world challenges in the field of mechanical engineering. The robust calendar of activities showcases the department's dedication to academic excellence, industry relevance, and the overall development of its students and faculty.







        </p>
      </div>
      <Underline heading ="Events organised"/>
      <div className="organised">

        <Table data={mech_organised} columns={columns}/>
      </div>
      </section>

    <Backtotop />
    </div>
  );
}

export default Mech_org