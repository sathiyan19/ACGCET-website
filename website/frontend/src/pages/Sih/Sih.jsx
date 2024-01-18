import React,{useEffect} from "react";

import "./Sih.css";
import { Underline, Modal,Backtotop } from "../../widgets";
import { sih22, sih20 } from "../../constants/sih";

import sihlogo from "../../assets/pictures/sih/sih_logo.webp";

const Sih = () => {
  useEffect(() => {
    document.title = 'ACCET-SIH';
  }, []);
  return (
    <div>
      <Backtotop />
      <div className="sihwhole">
        <Underline heading="Smart India Hackathon" />

        <div className="sihabt">
         <div className="sihabttext">
         <p className="sihabttextp">
            The Smart India Hackathon (SIH) is an annual nationwide competition
            held in India that aims to foster innovation and problem-solving
            among students. It is one of the largest hackathons in the world and
            is organized by the Ministry of Education, Government of India,
            along with various other government departments and organizations.
            The primary goal of the Smart India Hackathon is to encourage
            students to come up with innovative solutions to real-world problems
            faced by government and industry. It provides a platform for
            students to showcase their technical skills, creativity, and
            problem-solving abilities. Participants work in teams to develop
            software and hardware solutions for challenges presented by
            different government departments and private companies. The
            hackathon typically lasts for two days, during which participating
            teams work intensively on their projects. They are provided with
            mentors and resources to help them develop their solutions. At the
            end of the event, teams present their projects to a panel of judges,
            and winning teams receive recognition and sometimes financial
            support to further develop and implement their solutions. The Smart
            India Hackathon not only promotes innovation and entrepreneurship
            among students but also helps address real-world challenges faced by
            various sectors in India, contributing to the country's development
            and technological advancement.
          </p>

          <p className="sihabttextp">
          Dr. C. Uma Rani, the Head of the Department of Computer Science and Engineering (CSE), plays a crucial role as the coordinator for the Smart India Hackathon (SIH) at our college. In this role, she leads and oversees the college's participation in the SIH, a nationwide innovation competition that challenges students to develop innovative solutions to real-world problems. Dr.C.Uma Rani's responsibilities likely include organizing teams, facilitating training and support, liaising with SIH organizers, and ensuring that our college's participants are well-prepared and have the resources they need to excel in the competition. Her leadership ensures our college's active engagement in this prestigious event and encourages students to showcase their problem-solving skills and creativity on a national platform.
          </p>
         </div>
          <div className="sih_logo_holder">
            <img className="sih_logo_img" src={sihlogo} alt="sihlogo" />
          </div>
        </div>

        {/* <Underline heading="Who can participate" /> */}
        <div className="sihparticipate">
          {/* <div className="sihsrjr">
            <Underline heading="SIH Junior (Jr)" />
            <p>
              School students from 6th to 12th class will be able to showcase
              their talent and generate out-of-the-box open innovation ideas
            </p>
          </div> */}
          <div className="sihsrjr">
            <Underline heading="SIH Senior (Sr)" />
            <p className="sihsrjrp">
              Regular Students of HEI's pursuing "Graduate/Post-Graduate/Ph.D"
              will be able to showcase their talent and generate out-of-the-box
              open innovation ideas
            </p>
          </div>
        </div>

        <Underline heading="Our Projects" />
        <div className="sihpro">
          <h3>2022</h3>
          <div className="row">
            {sih22.map((item) => (
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
        <div className="sihpro">
          <h3>2020</h3>
          <div className="row">
            {sih20.map((item) => (
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
    </div>
  );
};

export default Sih;
