import React from "react";

import "./Nss.css";
import motto from "../../assets/pictures/nss/mottonss.webp";
import q1 from "../../assets/pictures/quote1.webp";
import q2 from "../../assets/pictures/quote2.webp";
import nsslogo from "../../assets/pictures/nss/nsslogo.webp";

import {
  Heroimagecarousal,
  Table,
  Listformat,
  Slideshow,
  Accordion,
} from "../../components";
import { Profilecard, Underline } from "../../widgets";
import { Backtotop } from "../../widgets";
import {
  Nss_heroimage_carousalinfo,
  profile_info,
  valaward,
  nssactivity,
  activitylist,
  nssachievements
} from "../../constants/Nss";

const Nss = () => {

  const nsslogatab = [
    { field: "sno", header: "sno" },
    { field: "category", header: "Category" },
    { field: "noa", header: "No.of awards" },
    { field: "value", header: "Value of each award" },
  ];
  return (
    <>
      <Backtotop />
      <div>
        {/* hero image */}
        <Heroimagecarousal
          key={Nss_heroimage_carousalinfo.id}
          title={Nss_heroimage_carousalinfo.title}
          img_list={Nss_heroimage_carousalinfo.img_list}
        />

        <div className="nsspara">
          <Underline heading="About Us" />
          <div className="nsstherila">
            <div className="nssparacont">
              <p className="nssparacont_p">
                The National Service Scheme (NSS) is a Central Sector Scheme of
                Government of India, Ministry of Youth Affairs & Sports. It
                provides opportunity to the student youth of 11th & 12th Class
                of schools at +2 Board level and student youth of Technical
                Institution, Graduate & Post Graduate at colleges and University
                level of India to take part in various Government led community
                service activities & programmes. The primary objective of
                developing the personality and character of the student youth
                through voluntary community service. ‘Education through Service’
                is the purpose of the NSS. NSS was launched in 1969 in 37
                Universities involving about 40,000 volunteers which has now
                spread over 657 Universities and 51 +2 Councils/Directorates,
                covering 20,669 Colleges/ Technical Institutions and 11,988
                Senior Secondary School. Since inception , over 7.4 crore
                students have benefitted from NSS.
              </p>
            </div>
            <div className="nssparalogo">
              <img className="nssflexlogo" src={nsslogo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="mosec">
          <div className="mottoimg">
            <img className="mottonss" src={motto} alt="Mottonss" />
          </div>
          <div className="mottoinfo">
            <div className="mottotext">
              <img className="q1" src={q1} alt="Mottonss" />
              <h2 className="mottotext_h2">NOT ME BUT YOU</h2>
              <img className="q2" src={q2} alt="Mottonss" />
            </div>
            <div className="mottohead">
              <h1 className="mottohead_h1">Our Motto</h1>
            </div>
          </div>
        </div>

        <div className="nssofficers">
          <Underline heading="Program Officers" />
          <div className="nsscardholder">
            <div className="nsscards">
              {profile_info.map((item) => (
                <Profilecard
                  key={item.id}
                  cover={item.cover}
                  dp={item.dp}
                  name={item.name}
                  Designation={
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.Designation.replace("\n", "<br />"),
                      }}
                    />
                  }
                  mailid={item.mailid}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="nssgallerysec">
          <Underline heading="Our Activities" />
          <div className="nssworkflex">
            <div className="nsswork">
              <Listformat points={activitylist} />
            </div>
            <div className="nssworkslide">
              <Slideshow images={nssactivity} flag="true" />
            </div>
          </div>

          <div className="nsstime">
            <div className="nsstime1">
              <h3 className="nsstime1_h3">National Integration Camp:</h3>
              <p className="nsstime1_p">
                The National Integration Camp (NIC) is organized every year and
                the duration of each camp is of 7 days with day-night boarding &
                lodging. These camps are held in different parts of the country.
                Each camp involves 200 NSS volunteers to undertake the scheduled
                activities.
              </p>
            </div>
            <div className="nsstime1">
              <h3 className="nsstime1_h3">Adventure Programs:</h3>
              <p className="nsstime1_p">
                The camps are held every year which are attended by
                approximately 1500 NSS volunteers with at least 50% of the
                volunteers being girl students. These camps are conducted in
                Himalayan Region in the North and Arunachal Pradesh in North
                East region. The adventure activities undertaken in these camps
                includes trekking of mountains, water rafting, Para-sailing and
                basic skiing.
              </p>
            </div>
            <div className="nsstime1">
              <h3 className="nsstime1_h3">Republic Day Parade Camp:</h3>
              <p className="nsstime1_p">
                The first Republic Day Camp of NSS Volunteers was held in 1988.
                The camp takes place in Delhi between 1st and 31st January every
                year with 200 NSS selected volunteers who are good in
                discipline, March-past and cultural activities. A Contingent of
                selected NSS volunteers participates in the Republic Day Parade
                at Rajpath, New Delhi on 26th of January every year in
                accordance with the guidelines and requisition of the Ministry
                of Defence.
              </p>
            </div>
            <div className="nsstime1">
              <h3 className="nsstime1_h3">National Youth Festival:</h3>
              <p className="nsstime1_p">
                National Youth Festivals are organized every year from 12th to
                16th January by the Government of India, Ministry of Youth
                Affairs & Sports in collaboration with the State Governments in
                different parts of the country. Eminent guests, speakers and
                youth icons are invited to address and interact with about 1500
                participating NSS volunteers during the National Youth
                Festivals.
              </p>
            </div>
          </div>

          <div className="nssloga">
            <Underline heading="NSS Awards" />
            <p className="nssloga_p">
              The Ministry of Youth Affairs and Sports, Government of India had
              instituted the National Service Scheme Awards to recognize the
              voluntary service rendered by NSS volunteers, Programme Officers,
              N.S.S. units and the university/senior secondary council. These
              awards were instituted in the year 1993-1994. Since then, these
              awards are given away every year at various Levels. The details of
              these awards are as follows:-
            </p>
            <div className="nssawardtable">
              <Table data={valaward} columns={nsslogatab} />
            </div>
          </div>
        </div>

        <div className="nssachieve">
          <Underline heading="Our Achievements"/>
          <Accordion accord_data={nssachievements}/>
        </div>

        
      </div>
    </>
  );
};

export default Nss;