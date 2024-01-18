import React,{useEffect} from "react";

import "./Ece_antenna.css";

import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import {
  ece_dept_menu,
  ece_antenna_anechoic,
  ece_antenna_rf,
  ece_antenna_software,
} from "../../constants/ece_dept";

import { Radial_menu, Listformat } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

import antenna1 from "../../assets/pictures/ece_dept/ece_labs/ECE_Ant_Chamber_1.webp";
// import antenna2 from '../../assets/pictures/ECE_Ant_Chamber_2.webp'

const Ece_antenna = () => {
  useEffect(() => {
    document.title = 'ACCET-ECE | Antenna Testing';
  }, []);
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
        <div className="ece_sub_heading">Antenna Testing</div>
      </div>
      <section className="ecedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
        </div>
        <Radial_menu menu_links={ece_dept_menu} />
        <div className="ece_antenna_area">
          <Underline heading="Centre of Excellence in Antenna Testing Facility" />
          <div className="ece_antenna_testing">
            <div className="antenna_content_box">
              <div className="antenna_flex1">
                <div className="flex1_content_holder">
                  <div className="antenna_flex1_content antenna_content">
                    A Centre of Excellence in Antenna Testing Facility was
                    established in the Electronics & Communication Engineering
                    department in 2022 to promote the research in RF and
                    Microwave system design and RF industry consultation
                    services. This Centre primarily focuses on the analysis,
                    design, simulation, integration, antenna testing, and
                    radiation immunity testing of RF products for the
                    telecommunication industry, navigation and sensor
                    applications.
                  </div>
                  <div className="antenna_flex1_content antenna_content break_content">
                    This Centre can measure the various radiation parameters
                    such as Azimuth & Elevation Radiation Pattern /
                    Co-Polarization, Cross Polarization, Gain, Radiation
                    Efficiency, Directivity, Half Power Beam Width, Front to
                    Back Ratio, Linear Polarization, Reflection coefficient
                    (Return Loss), SWR, Transmission Parameter and Port
                    Impedance Profile.
                  </div>
                </div>
                <div className="antenna_flex1_img">
                  <img className="ant_img" src={antenna1} />
                </div>
              </div>
              <div className="antenna_second_content antenna_content">
                This Centre can measure the various radiation parameters such as
                Azimuth & Elevation Radiation Pattern / Co-Polarization, Cross
                Polarization, Gain, Radiation Efficiency, Directivity, Half
                Power Beam Width, Front to Back Ratio, Linear Polarization,
                Reflection coefficient (Return Loss), SWR, Transmission
                Parameter and Port Impedance Profile.
              </div>
              <div className="antenna_head">Testing and Consultancy Registration Forms</div>
              <div className="antenna_registration_forms">
              <a href="https://drive.google.com/file/d/1zMSGLLHfUPHZqrmfr6Afj1hQ3CbLOxEw/view?usp=drive_link" download className="antenna_forms">For Non-commercial & Unfunded Academic Research / Project</a>
              <a href="https://drive.google.com/file/d/159CyjGCCTcj8nyocDGol6Zdrq3raEQyP/view?usp=drive_link" download className="antenna_forms">For Commercial / Industrial / Funded Project</a>
              </div>
              <div className="antenna_content antenna_head">
                This Centre is equipped with the following listed state of the
                art equipment:
              </div>
              <div className="antenna_list_content antenna_content">
                <div className="antenna_list_head">
                  List of Major Equipment in Anechoic Chamber
                </div>
                <Listformat points={ece_antenna_anechoic} />
                <div className="antenna_list_head">
                  List of Major RF Equipment
                </div>
                <Listformat points={ece_antenna_rf} />
                <div className="antenna_list_head">
                  List of Simulation Software
                </div>
                <Listformat points={ece_antenna_software} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Ece_antenna;
