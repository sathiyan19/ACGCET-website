import React, { useEffect } from "react";

import "./Alumni.css";

import { Modal, Backtotop, Underline,Videocard} from "../../widgets";
import { Slideshow,Reunion_card_display } from "../../components";
import { contributions, slideshow_imgs,alumni_reunions,cardData } from "../../constants/alumni_info";

// import accetosa_logo from "../../assets/pictures/logo-cms.webp";
const accetosa_logo=" https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/alumini/about/logo-cms.webp"


const Alumni = () => {
  useEffect(() => {
    document.title = 'ACCET-Alumni';
    window.addEventListener("resize", calwidth);
    var wid;

    let row = document.getElementsByClassName("gyro");
    calwidth();

    function calwidth() {
      // wid = window.innerWidth;
      // row[0].className = row[0].className.replace("row-cols-3", "");
      // row[0].className = row[0].className.replace("row-cols-2", "");
      // row[0].className = row[0].className.replace("row-cols-1", "");
      // if (wid < 1100 && wid > 650) {
      //   row[0].className += "row-cols-2";
      // } else if (wid < 650) {
      //   row[0].className += "row-cols-1";
      // } else if (wid > 1100) {
      //   row[0].className += "row-cols-3";
      // }
    }
  }, []);
  return (
    <>
      <Backtotop />
      <div className="alumni_body">
        <Slideshow images={slideshow_imgs} />

        <div className="container alumni-menu">
          <a href="#about" className="lin">
            About
          </a>
          {/* <a href="#contribution" className="lin">
            Contributions
          </a> */}
          <a href="#reunions" className="lin">
            Reunions
          </a>
        </div>

        <div className="divider"></div>

        {/* <div className="notalum">
          <Underline heading="Notable Alumni" />
        </div> */}

        <div className="about">
          <p className="heading" id="about">
            <Underline heading="About" />
          </p>
          <div className="abt">
            <div className="accetosa">
              <img
                className="accetosa-logo"
                src={accetosa_logo}
                alt="ACGCET Logo"
              />
              <div className="socialmedia">
                <p className="cont">Get in touch with us</p>
                <div className="acicon">
                  <a href="#" className="fa fa-facebook-square accicon"></a>
                </div>
                <div className="acicon">
                  <a
                    href="https://alumni.accetosa.org/home.dz"
                    className="fa fa-globe accicon"
                  ></a>
                </div>
              </div>
            </div>
            <div className="dsc">
              ACGCET, a leader in higher education in engineering and
              technology, is committed to excellence through the delivery of
              outstanding undergraduate and graduate education that remains
              current and responsive to the diverse needs of those it serves.
              The institution’s faculty and staff promote the intellectual,
              professional, social, and personal development of its students
              through innovations in learning, scholarship, and creative
              endeavours. Students, faculty, and staff partner to create strong
              engagement with the local, national, and global communities. The
              institution dedicates itself to academic vitality, integrity, and
              diversity.
            </div>
          </div>
          <div className="abt-cont">
            Our Commitment as a Centre of Engineering Education is to impart
            Technical Knowledge par excellence, motivate the learners in
            Research, evolve result-oriented, innovative techniques in
            Engineering, provide necessary career guidance, and train our
            learners in leadership qualities so as to achieve better
            productivity and prosperity for our country.
          </div>
        </div>

        {/* <div className="contrib">
          <div id="contribution" className="heads">
            <Underline heading="Contributions" />
          </div>
          <div className="gyro row row-cols-2 g-4">
            {contributions.map((item) => (
              <Modal
                key={item.id}
                heading={item.heading}
                sub_text={item["sub-head"]}
                pic={item.pic}
                content_1={item.content_1}
                content_2={item.content_2}
              />
            ))}
          </div>
        </div> */}

        <div className="alumni_reunion">
          <div id="reunions" className="heads">
            <Underline heading="Reunions" />
          </div>

          <Reunion_card_display cardinfo_list={alumni_reunions}/>       
        </div>

        <div className="alumini_video">
        <div className="alumini_video_heading">
            <Underline heading="Reunion Videos" />
            </div>
            <div className="alumini_video_content">
            {cardData.map((card, index) => (
        <Videocard
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          videoSrc={card.videoSrc}
        />
              ))}
            </div>
          </div>
      </div>
    </>
  );
};

export default Alumni;
