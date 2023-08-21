import React from "react";

import "./Nss.css";
import gal1 from "../../assets/pictures/gal1.jpg";
import gal2 from "../../assets/pictures/gal2.jpg";
import gal3 from "../../assets/pictures/gal3.jpg";
import gal4 from "../../assets/pictures/gal4.jpg";
import gal5 from "../../assets/pictures/gal5.jpg";
import gal6 from "../../assets/pictures/gal6.jpg";
import gal7 from "../../assets/pictures/gal7.jpg";
import motto from "../../assets/pictures/mottonss.jpg";
import q1 from "../../assets/pictures/quote1.png";
import q2 from "../../assets/pictures/quote2.png";
import { Heroimagecarousal,Table } from "../../components";
import { Profilecard } from "../../widgets";
import { Backtotop } from "../../widgets";
import { Nss_heroimage_carousalinfo,profile_info } from "../../constants/Nss";

const Nss = () => {
  const columns = [
    { field: "sno", header: "sno" },
    { field: "name", header: "name" },
    { field: "noa", header: "nature of the award" },
    { field: "issue", header: "issuing authority" }
  ];
  return (
    <>
    <Backtotop/>
    <div>
      {/* hero image */}
      <Heroimagecarousal
        key={Nss_heroimage_carousalinfo.id}
        title={Nss_heroimage_carousalinfo.title}
        img_list={Nss_heroimage_carousalinfo.img_list}
      />

      <div className="nsspara">
        <h5>
          National Service Scheme (NSS) program is to provide hands on
          experience to students in delivering community service. The first NSS
          unit of the institution was started in 1972. Now the institution has 3
          NSS units with the enrollment of 300 volunteer.
        </h5>
      </div>

      <div className="nssgen"> 
      <div className="mosec">
        <div className="mottoimg">
          <img className="mottonss" src={motto} alt="Mottonss" />
        </div>
        <div className="mottoinfo">
          <div className="mottotext">
            <img className="q1" src={q1} alt="Mottonss" />
            <h2>NOT ME BUT YOU</h2>
            <img className="q2" src={q2} alt="Mottonss" />
          </div>
          <div className="mottohead">
            <h1>Our Motto</h1>
          </div>
        </div>
      </div>
      <div className="nssgencont">
      <h5>Our Commitment as a Centre of Engineering Education is to impart Technical Knowledge par excellence, motivate the learners in Research, evolve result-oriented, innovative techniques in Engineering, provide necessary career guidance, and train our learnersin leadership qualities so as to achieve better productivity and prosperity for our country.
ACGCET, a leader in higher education in engineering and technology, is committed to excellence through the delivery of outstanding undergraduate and graduate education that remains current and responsive to the diverse needs of those it serves. The institution’sfaculty and staff promote the intellectual, professional, social, and personal development of its students through innovations in learning, scholarship, and creative endeavours. Students, faculty, and staff partner to create strongengagement with the local, national, and global communities. The institution dedicates itself to academic vitality, integrity, and diversity.</h5>
      </div>
      </div>

      <div className="nssofficers">
        <div className="pohead">
          <h1>Programme Officers</h1>
        </div>
        <div className="nsscardholder">
          <div className="nsscards">
            {profile_info.map((item) => (
              <Profilecard
                key={item.id}
                cover={item.cover}
                dp={item.dp}
                name={item.name}
                Designation={item.Designation}
                mailid={item.mailid}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="nssgallerysec">
        <div className="nssgalleryhead">
          <h1>Our Activities</h1>
        </div>
        <div className="works">
        <h4>
          NSS volunteers are conducting and participated in the activities of
        </h4>
        <ul>
          <li>National Integration Camp</li>
          <li>Blood Donation Camp</li>
          <li>Plantation</li>
          <li>Immunization</li>
          <li>Disaster Management</li>
          <li>Adventure Programmes</li>
        </ul>
      </div>
      <div className="nssgallery">
        <img src={gal1} alt="we" />
        <img src={gal2} alt="we" />
        <img src={gal3} alt="we" />
        <img src={gal4} alt="we" />
        <img src={gal5} alt="we" />
        <img src={gal6} alt="we" />
        <img src={gal7} alt="we" />
      </div>
      </div>

      <div className="nssawardssec">
        <div className="awardhead">
          <h1>Our Achievements</h1>
        </div>
        <div className="row1">
          <div className="col1">
            <div className="tabs">
              <div className="tab">
                <input type="radio" id="rd1" name="rd" />
                <label className="tab-label" for="rd1">
                  2019-2020
                </label>
                <div className="tab-content">
                  <ol>
                    <li>This college NSS unit received “award of appreciation” from AICTE, NEWDELHI for ONE STUDENT ONE TREE campaign from the MHRD Minister of India.</li>
                    <li>This college NSS Unit received “Swachch Bharat Summer Internship 2018” award with First Rank at Anna University, Chennai.</li>
                    <li>Selvan S.M. Mangalam BE Mech IV year and Selvi S. Aarthy, BE EEE III year received “Best NSS Volunteer award” at Anna University, Chennai</li>
                  </ol>
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd2" name="rd" />
                <label className="tab-label" for="rd2">
                  2018-2019
                </label>
                <div className="tab-content">
                  <ol>
                    <li>Selvan S.A. Prasath, IV year EEE participated and performed well in “International Youth Exchange Programme” organized by Ministry of Youth Affairs and Sports, Govt of India, New Delhi from 02.04.2018 to 12.04.2018 at Nepal.</li>
                    <li>66 NSS Volunteers participated in “Swachch Bharat Summer Intership Programme” from 13.07.2018 to 22.07.2018 at Palavangudi Village and Secured “First Prize” in Anna University level with cash prize Rs.30,000/-.</li>
                    <li>Selvi S. Aarthi, III year EEE and Selvi S. Meena, III year EEE participated and trained well in NSS Adventure Camp for NSS Volunteers at Atal Bihari Vajpayee Institute of Mountaineering and Allied Sports, Manali from 28.10.2018 to 06.11.2018 sponsored by Ministry of Youth Affairs and Sports, Govt.of India, New Delhi.</li>
                    <li>Selvan S.A. Prasath and Selvi M. Sathiya Ruba awarded with “Best Volunteer Award” a University level award by Anna University, Chennai held on 28.09.2018.</li>
                    <li>Conducted National Integration Camp at this college from 10.12.2018 to 17.12.2018 funded by Ministry of Youth Affairs and Sports, Govt of India, New Delhi. 210 NSS Volunteers and 45 NSS Pos from 13 states participated in the camp.</li>
                    <li>Vijayalakshmi and Ms K. Suganthi NSS Volunteers in the year 2011-2013 have been appointed as Sub Inspector of Police (Technical) by receiving additional marks in participation in NSS.</li>
                    <li>Received AICTE-SAGY award from AICTE, New Delhi for the work done in water management system at Palavangudi village on 21.01.2019.</li>
                    <li>Selvan K. Karthikeyan, III year EEE participated in State level Republic Day Parade Camp at St.Fort George, Chennai in front of Chief Minister of Tamilnadu on 26.01.2019.</li>
                    <li>Conducted Special Camp from 11.03.2019 to 17.03.2019 at Palavangudi village and 180 NSS volunteers were participated in the camp.</li>
                    <li>Conducted “Swachch Bharat Mega Work Camp” from 11.03.2019 to 15.03.2019 at Palavangudi village and 100 volunteers from NSS Volunteers of ACGCET, APTC and SRRCET.</li>
                  </ol>
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd3" name="rd" />
                <label className="tab-label" for="rd3">
                  2017-2018
                </label>
                <div className="tab-content achieve">
                  <Table  data={achieve17} columns={columns} />                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd4" name="rd" />
                <label for="rd4" className="tab-close">
                  Close all
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Nss;
