import React from "react";

import "./Ncc.css";
import { Heroimagecarousal, Listformat, Accordion } from "../../components";
import {
  Ncc_heroimage_carousalinfo,
  profile_info,
  nccaim,
  nccmotto,
  ncccore,
  nccachievements
} from "../../constants/ncc";
import { Profilecard, Underline, Deptmission, Deptvision } from "../../widgets";
import abt1 from "../../assets/pictures/ncc/abt.webp";
import nccflag from "../../assets/pictures/ncc/nccflag.webp";
// import nccpledge from "../../assets/pictures/ncc/pledg2-min.webp";
import mobpledge from "../../assets/pictures/ncc/pledge1.webp";

const nccpledge="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/ncc/pledg2-min.webp"

const Ncc = () => {
  return (
    <div>
      {/* hero image */}
      <Heroimagecarousal
        key={Ncc_heroimage_carousalinfo.id}
        title={Ncc_heroimage_carousalinfo.title}
        img_list={Ncc_heroimage_carousalinfo.img_list}
      />

      <div className="nccabt">
        <Underline heading="About Us " />
        <p>
          The National Cadet Corps (NCC) is a vibrant youth organization with a
          military focus, operating in numerous countries around the world, with
          India hosting one of the largest and most active NCC programs.
          Established with the primary objective of fostering character
          development, discipline, leadership, and a spirit of adventure among
          young individuals, NCC offers a wide array of activities that
          contribute to the overall growth of its cadets.
        </p>
        <div className="nccabt1">
          <div className="nccabt1text">
            <p>
              These activities range from precision drill and marksmanship to
              adventure sports like trekking and rock climbing, instilling
              qualities such as teamwork, perseverance, and courage.
              Additionally, NCC cadets actively engage in community service and
              social initiatives, participating in blood donation drives,
              environmental clean-up campaigns, and disaster relief efforts,
              further reinforcing the values of selflessness and responsible
              citizenship. NCC also places a strong emphasis on leadership
              development, offering cadets opportunities to ascend through the
              ranks and shoulder increasing responsibilities within their units.
              This hands-on experience in leadership equips them with valuable
              skills applicable to various facets of life. Furthermore, NCC
              conducts regular camps and specialized training programs,
              providing cadets with exposure to diverse environments and
              skillsets, from mountaineering and sailing to aviation and rifle
              shooting. These experiences broaden their horizons and enhance
              their self-confidence. Beyond skill development, NCC kindles a
              profound sense of patriotism and love for one's country. Cadets
              often take part in national events, such as Republic Day and
              Independence Day parades, showcasing their discipline and
              dedication. For those aspiring to serve in the armed forces, NCC
              acts as a crucial stepping stone, offering a glimpse into military
              life and often providing certain advantages during recruitment. In
              essence, the National Cadet Corps plays an instrumental role in
              molding the character of young citizens, promoting good
              citizenship, and preparing them for leadership roles in society.
            </p>
          </div>
          <div className="nccabt1img">
            <img src={abt1} alt="abt1" />
          </div>
        </div>
      </div>

      <div className="nccam">
        <Deptvision visionhead="Aim" visiondata={nccaim.visiondata} />
        <Deptmission head="Motto" points={nccmotto} />
      </div>

      <div className="nccofficers">
        <Underline heading="Program Officer" />
        <div className="ncccardholder">
          <div className="ncccards">
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

      <div className="nccflagsec">
        <Underline heading="NCC Flag" />
        <div className="nccflag">
          <div className="nccflagtext">
            <p>
              The NCC flag for various units of the NCC was first introduced in
              1951. The flag was of same pattern, colour and size as was used by
              various regiments of the Army. The only difference was that it had
              the NCC badge and unit designation placed in the centre. Later on
              it was felt that the flag should be in keeping with the
              inter-service character of the Corps. In 1954 the existing
              tricolour flag was introduced. The three colours in the flag
              depict the three services of the Corps, red for the Army, deep
              blue for the Navy and light blue for the Air Force. The letters
              NCC and the NCC crest in gold in the middle of the flag encircled
              by a wreath of lotus, give the flag a colourful look and a
              distinct identity.
            </p>
          </div>
          <div className="nccflagpic">
            <img src={nccflag} alt="nccflag" />
          </div>
        </div>
      </div>

      <div className="nccpledge">
        <img className="lappledgeimg" src={nccpledge} alt="nccpledge"/>
        <img className="mobpledgeimg" src={mobpledge} alt="nccpledge"/>
        <div className="nccpledgetext">
          <h1>Pledge</h1>
        <p>
          We the cadets of the National Cadet Corps,do solemnly pledge that we
          shall always uphold the unity of India.We resolve to be disciplined
          and responsible citizen of our nation.We shall undertake positive
          community service in the spirit of selflessness and concern for our
          fellow beings.
        </p>
        </div>
       
      </div>

      <div className="ncccore">
        <Underline heading="Core Values" />
        <Listformat points={ncccore} />
      </div>

      <div className="nccachieve">
        <Underline heading="Our Achievements"/>
        <Accordion accord_data={nccachievements}/>
      </div>

    </div>
  );
};

export default Ncc;
