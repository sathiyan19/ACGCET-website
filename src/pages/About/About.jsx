import React from "react";

import "./About.css";

import { Floatinmenu } from "../../widgets";

import { about_floater_menu } from "../../constants/about";
import { campus_map_keys } from "../../constants/campus_map";

import { Backtotop,Underline } from "../../widgets";

// import basketball from "../../assets/pictures/basketball.webp";
import clg_mainbuild from "../../assets/pictures/clg_mainbuild.webp";
import nehru from "../../assets/pictures/nehru.webp";
import prasad from "../../assets/pictures/prasad.webp";
// import kkdi from "../../assets/pictures/kkdi.webp";
// import bus from "../../assets/pictures/bus.jpg"

import {IoHome} from 'react-icons/io5'

// import campusmap from '../../assets/pictures/campus map.webp'

const campusmap="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/about_institute/campus+map.webp"

const basketball = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/about_institute/basketball.webp"
const bus="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/about_institute/bus.webp"
const kkdi="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/about_institute/kkdi.webp"

const About = () => {
  return (
    <div className="whole_cont">
      <Backtotop />
      <Underline heading="About the Institute"/>

      <Floatinmenu
      logo={IoHome}
        head={about_floater_menu.head}
        links={about_floater_menu.links}
        from_top={190}
      />

      <div className="why_acgcet sect" id="why_acgcet">
        <div className="div_heading">Why ACGCET?</div>

        <div className="div_content">
          <div className="flex_1">
            <p className="content">
              <span className="big_text">A</span>s one of the oldest and most
              esteemed institutions, ACGCET take pride in fostering a legacy of
              academic excellence and holistic development. Our college campus
              gives a serene and peaceful atmosphere, conducive to focused
              learning and personal growth. Being a government college, we
              believe in making quality education accessible to all. Our nominal
              fee structure doesn't compromise the excellence of education we
              provide.
            </p>
            <div className="img_holder">
              <img
                className="flex_img"
                src={basketball}
                alt="Basketball court"
              />
            </div>
          </div>

          <div className="content">
            Our experienced faculty members are dedicated to shaping
            well-rounded individuals by imparting knowledge and skills that
            extend beyond the curriculum. Our institution proudly carries
            autonomy, granting us the flexibility to design curricula that stay
            aligned with industry trends and global advancements. This allows us
            to equip our students with up-to-date knowledge and skills, ensuring
            their readiness for the ever-evolving professional landscape.
          </div>

          <div className="content">
            Associations and clubs are an integral part of campus life,
            promoting friendship, leadership, and skill enhancement. Students
            have the opportunity to engage in diverse extracurricular activities
            that complement their academic journey, fostering personality
            development. To nurture healthy competition and creativity, we
            regularly organize a variety of intra and inter-college
            competitions, providing platforms for students to showcase their
            talents and innovative ideas. Beyond the classroom, we recognize the
            significance of sports in fostering discipline, teamwork, and
            physical well-being. Our sports facilities enable the students to
            explore their passion for sports while maintaining a balanced
            academic life.
          </div>

          <div className="flex_2">
            <div>
              <p className="content">
                One of our strongest pillars is the robust support from our
                extensive alumni network. Our alumni's achievements and
                contributions across various industries are the proof to the
                quality of education they received here. Their involvement
                enhances the overall learning experience and opens up valuable
                networking opportunities for current students . We understand
                that a successful career is the ultimate goal of education.
                Hence, we strive to offer greater placement opportunities,
                connecting students with leading companies and organizations.
              </p>
              <p className="content lap_text">
                Our consistent track record of high placement rates speaks
                volumes about the competence of our graduates. With a rich
                history spanning 70 years and more, Alagappa Chettiar Government
                College of Engineering and Technology stands as the master of
                experiential education, where tradition meets innovation, and
                students are empowered to transform into competent, responsible
                and successful individuals.
              </p>
            </div>
            <div className="img_holder anomoly">
              <img
                className="flex_img"
                src={clg_mainbuild}
                alt="ACGCET Main building"
              />
            </div>
          </div>

          <div className="content responsive_text">
            Our consistent track record of high placement rates speaks volumes
            about the competence of our graduates. With a rich history spanning
            70 years and more, Alagappa Chettiar Government College of
            Engineering and Technology stands as the master of experiential
            education, where tradition meets innovation, and students are
            empowered to transform into competent, responsible and successful
            individuals.
          </div>
        </div>
      </div>

      <div className="history sect" id="history">
        <div className="div_heading">History</div>
        <div className="div_content">
          <div className="flex_1">
            <p className="content">
              <span className="big_text">A</span>lagappa Chettiar Government
              College of Engineering and Technology (ACGCET Karaikudi) is an
              autonomous (with effect from 2009) college in Karaikudi, Tamil
              Nadu, India, Dr.RM.Alagappa Chettiar, a man of rare wisdom, and
              forethought, founded Alagappa Chettiar Educational Trust with the
              sole aim of developing the backward area of Karaikudi into a
              centre for higher education. On the occasion of laying of the
              foundation stone of the Central Electro Chemical Research
              Institute by Pandit Jawaharlal Nehru on 25th July 1948, Dr.
              Alagappa Chettiar in his welcome address said that it was his
              dream to start an Engineering College immediately.
            </p>
            <div className="img_holder">
              <img className="flex_img" src={nehru} alt="Nehru at ACGCET" />
            </div>
          </div>

          <div className="content">
            In 1952, Dr. Alagappa Chettiar’s dream came true. Alagappa Chettiar
            College of Engineering and Technology started functioning from 21st
            July 1952 with three faculties – Civil Engineering, Mechanical
            Engineering, Electrical & Electronics Engineering. The Foundation
            tablet for the main building of the college was laid by Dr.Rajendra
            Prasad, the then President of India on 19th February 1953.
          </div>

          <div className="content">
            The institution was handed over to Government of TamilNadu in the
            year 1966, since then institution has been administered by the
            Government through Directorate of Technical Education, Tamilnadu. In
            1969, faculty of Electronics and Communication Engineering was
            started. Further Part-time Courses in Civil, Mechanical and
            Electrical & Electronics Engineering were introduced in 1971.
            Subsequently to keep pace with the technical advancements and to
            meet the requirements of industries M.E. in Microwave and Optical
            Engineering was started in 1983 and B.E Computer Science and
            Engineering in 2001. PG Degree courses namely M.E Structural
            Engineering, M.E Computer Aided Design, M.E Manufacturing
            Engineering, M.E Environmental Engineering, M.E Power Electronics
            and Drive are offered from 2002-03  in addition to the Part-time
            B.E. Course in Electronics & Communication Engineering. Now the
            institution offers 5 U.G and 6 P.G Programmes to cater the need of
            students. It also offeres 4 Part-time Programmes.
          </div>

          <div className="flex_3">
            <p className="content">
              The institution has been awarded the status of the best
              engineering college of 2006-07 in Tamil Nadu. Chief Minister M.
              Karunanidhi honored the Principal in a function at Anna
              University, Chennai, on 1 September 2008 for this cause. The
              college is a member institute under the TEQIP - Technical
              Education Quality Improvement Programme in India (11 colleges were
              selected from Tamil Nadu) and QIP Centre. Anna University has
              granted autonomous status to the college from the academic year
              2009-10 onwards.
            </p>
            <div className="img_holder">
              <img className="flex_img" src={prasad} alt="Rajendar Prasad" />
            </div>
          </div>
        </div>
      </div>

      <div className="visit_acgcet sect" id="vist_acgcet">
        <div className="div_heading">Visit ACGCET</div>

        <div className="div_content">
          <div className="visit_content">
            <div className="abt-sub-head">
              <div className="visit_transport fa fa-solid fa-train"></div>
              &nbsp;&nbsp;&nbsp;&nbsp;By Train
            </div>

            <div className="flex_1">
              <p className="content">
                In terms of train connectivity, Karaikudi has a railway station
                known as "Karaikkudi Junction" (Station code: KKDI), which is an
                essential transportation hub connecting the town to various
                other parts of Tamil Nadu and beyond. Karaikkudi Junction serves
                as a crucial link for both passengers and freight
                transportation. The railway station is part of the Southern
                Railway zone, one of the major zones of the Indian Railways.
              </p>
              <div className="img_holder">
                <img className="flex_img" src={kkdi} alt="Nehru at ACGCET" />
              </div>
            </div>

            <div className="content">
              Karaikudi is well connected with the capital city Chennai. Most of
              the trains bound to Chennai, Manamadurai, Rameswaram and
              Kanyakumari from Tiruchirappalli pass through this station, with
              every train having a stoppage here for a minimum of 5–10 minutes.
              Direct trains run from Karaikudi Junction to important cities
              including Thanjavur, Rameswaram, Sengotai, Trichy, and Coimbatore.
            </div>

            <div className="content">
              The distance between Karaikudi Junction railway station and
              Alagappa Chettiar Government College of Engineering and Technology
              (ACGCET) is approximately 2.5 kilometers. This distance can be
              covered by various modes of transportation, such as auto-rickshaws
              or local buses, depending on your preference.
            </div>
          </div>

          <div className="visit_content">
            <div className="abt-sub-head">
              <div className="visit_transport fa fa-bus"></div>
              &nbsp;&nbsp;&nbsp;&nbsp;By Bus
            </div>

            <div className="flex_1">
              <p className="content">
                Karaikudi New Bus Stand is a major transportation hub located in
                Karaikudi. It serves as a central point for various intercity
                and intracity bus routes, facilitating the movement of
                passengers to and from Karaikudi and its surrounding areas. The
                bus stand is a crucial part of the town's transportation
                infrastructure, connecting residents and travelers to different
                destinations within the region.
              </p>
              <div className="img_holder">
                <img className="flex_img" src={bus} alt="Nehru at ACGCET" />
              </div>
            </div>

            <div className="content">
              At the bus stand, you can find buses traveling to and from nearby
              towns and cities, as well as longer-distance routes connecting
              Karaikudi to various other parts of Tamil Nadu. The bus stand's
              location in the heart of Karaikudi makes it easily accessible to
              residents and visitors alike. It plays a significant role in
              promoting regional connectivity and enabling efficient public
              transportation options for those traveling by bus.
            </div>

            <div className="content">
              From the karaikudi bus stop, local buses run frequently to
              Alagappa chettiar government college of engineering and
              technology. The Alagappa Chettiar Government College of
              Engineering and Technology (ACGCET) is located about 3.3
              kilometres from Karaikudi New Bus Stand.
            </div>
          </div>
        </div>
      </div>

      <div className="campus_map sect" id="campus_map">
        <div className="div_heading">Campus Map</div>
        <div className="map_holder">
          <img className="map" src={campusmap} alt="Campus Map"></img>
        </div>
        <div className="key_title">Keys:</div>
        <div className="keys_holder">
          {campus_map_keys.map((item)=><div className="campus_map_key content"><b>{item.id}.</b> {item.place}</div>)}
        </div>
      </div>

      

      
    </div>
  );
};

export default About;