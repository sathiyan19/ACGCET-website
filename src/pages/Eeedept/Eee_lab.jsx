import React from 'react'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";
import { eee_dept_menu,eee_labs} from "../../constants/eee_dept";

import { Radial_menu } from "../../components";

import { AiFillThunderbolt } from "react-icons/ai";

const Eee_lab = () => {
    return (
        <div className="eeedept">
          <div className="eeebg">
            <div className="eeeheading">
              Department of Electrical and Electronics Engineering
            </div>
            <div className="eee_sub_heading">Laboratories</div>
          </div>
          <section className="eeedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
            </div>
            <Radial_menu menu_links={eee_dept_menu} />
            <div className="eee_lab_area">
          <Underline heading="Lab Facilities"/>
          <p className="eee_dept_content indent">
          The department boasts a diverse range of exceptional lab facilities that span generations of technology. From vintage mercury arc rectifiers, serving faithfully for over seven decades, to cutting-edge Next Gen Lab (IoT, AI, and Robotics Lab), Smart Grid Lab, Advanced Drives Lab, Virtual Instrumentation Lab, 3D Printing Machines, Industrial-Grade Software, high-capacity computing, GPU-based nano processors, and more, it offers a dynamic learning environment for students. All labs are meticulously maintained, each equipped with dedicated technicians and safety features such as earth fuses, circuit breakers, and first aid boxes. This extensive array of resources underscores our commitment to providing students with hands-on, state-of-the-art learning experiences.
          </p>
          <div className="eee_labs">
            <div className="lab_cards row">
              {eee_labs.map((item) => (
                <Modal
                  heading={item.heading}
                  pic={item.pic}
                  content_1={item.content_1}
                  content_2={item.content_2}
                  link={item.link}
                  sub_text={item["sub-head"]}
                />
              ))}
            </div>
          </div>
          {/* <div className="eee_indus_labs">
            <Underline heading="Industry & Institute Labs" />
            <div className="lab_cards row">
              {ece_indus_labs.map((item) => (
                <Modal
                  heading={item.heading}
                  pic={item.pic}
                  content_1={item.content_1}
                  content_2={item.content_2}
                  link={item.link}
                  sub_text={item["sub-head"]}
                />
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <Backtotop />
    </div>
      );
}

export default Eee_lab