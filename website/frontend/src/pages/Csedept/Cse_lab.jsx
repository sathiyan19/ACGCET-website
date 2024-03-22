import React,{useEffect} from "react";

import { Backtotop, Floatinmenu, Underline, Modal } from "../../widgets";
import { cse_dept_menu, cse_labs } from "../../constants/cse_dept";

import { Radial_menu } from "../../components";

import { FaComputer } from "react-icons/fa6";

const cse_lab_cover="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Cse/Lab_Facilities/cse_lab_cover.webp"

const Cse_lab = () => {
  useEffect(() => {
    document.title = 'ACCET-CSE | Laboratories';
  }, []);
  return (
    <div className="csedept">
      <div className="csebg">
        <div className="cseheading">
          Department of Computer Science and Engineering
        </div>
        <div className="cse_sub_heading">Laboratories</div>
      </div>
      <section className="csedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaComputer} head="Menu" links={cse_dept_menu} />
        </div>
        <Radial_menu menu_links={cse_dept_menu} />
        <div className="cse_lab_area">
          <Underline heading="Lab Facilities" />
          <div className="csetwo-col">
            <p className="cse_dept_content">
              The Department of Computer Science and Engineering (CSE) boasts a
              comprehensive array of resources to support its academic
              endeavors. With a total of approximately 200 computers, these
              resources are strategically dispersed across various well-equipped
              laboratories. These labs are furnished with essential open-source
              software required for practical courses, ensuring that students
              have access to the tools they need for their coursework.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={cse_lab_cover} />
            </div>
          </div>
          <div className="csetwo-col1">
            <p className="cse_dept_content">
              In addition, the department benefits from a robust 100Mbps NKN
              internet connection, facilitated through a single fiber under the
              NMEICT initiative, granting uninterrupted 24x7 internet access for
              research and studies. To ensure uninterrupted operations, all our
              laboratories are equipped with an ample number of UPS units,
              guaranteeing power backup during outages. Furthermore, the
              department's commitment to connectivity extends to outdoor access
              points, providing seamless WiFi internet access on every floor,
              enabling students to stay connected and engaged in their academic
              pursuits.
            </p>
          </div>
          <div className="cse_acad_labs">
            {/* <Underline heading="Department Labs" /> */}
            <div className="lab_cards row">
              {cse_labs.map((item) => (
                <Modal
                  heading={item.heading}
                  pic={item.pic}
                  content_1={item.content_1}
                  content_2={item.content_2}
                  sub_text={item["sub-head"]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Cse_lab;
