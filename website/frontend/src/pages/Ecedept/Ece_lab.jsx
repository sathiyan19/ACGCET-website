import React,{useEffect} from "react";

import { Backtotop, Floatinmenu, Underline, Modal } from "../../widgets";
import {
  ece_dept_menu,
  ece_acad_labs,
  ece_indus_labs,
} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_lab = () => {
  useEffect(() => {
    document.title = 'ACCET-ECE | Laboratories';
  }, []);
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
        <div className="ece_sub_heading">Laboratories</div>
      </div>
      <section className="ecedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
        </div>
        <Radial_menu menu_links={ece_dept_menu} />
        <div className="ece_lab_area">
          <Underline heading="Lab Facilities"/>
          <p className="ece_dept_content indent">
            The Department of Electronics and Communication Engineering offers a
            wide range of laboratories to enhance the learning experience for
            both undergraduate (UG) and postgraduate (PG) students. UG students
            benefit from labs such as Electronic Devices & Circuits, Analog &
            Digital Communication, Networks, VLSI & Cyber Physical Systems,
            Signal Processing, RF & Microwave Electronics, and Optical
            Communication. PG students have access to specialized labs like
            Optical Networking & Simulation, RF System Design, and a PCB
            Prototyping Station. These labs provide hands-on training, enabling
            students to apply theoretical knowledge to real-world scenarios,
            develop practical skills, and engage in advanced research, preparing
            them for successful careers in the field.
          </p>
          <div className="ece_acad_labs">
            <Underline heading="Academic Labs" />
            <div className="lab_cards row">
              {ece_acad_labs.map((item) => (
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
          <div className="ece_indus_labs">
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
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Ece_lab;
