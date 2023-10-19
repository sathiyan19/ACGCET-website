import React from "react";

import "./Iste.css";
import { Timeline, Listformat } from "../../components";
import { Underline, Backtotop } from "../../widgets";
import { istepdf, istelist } from "../../constants/iste";
import istelogo from "../../assets/pictures/istelogo.webp";

function Iste() {
  return (
    <div>
      <Backtotop />
      <div className="istewhole">
        <Underline heading="Indian Society For Technical Education" />
        <div className="isteabt">
          <div className="isteabttext">
            <p className="isteabttextp">
              The Indian Society for Technical Education (ISTE) is the leading
              National Professional non-profit making Society for the Technical
              Education System in our country with the motto of Career
              Development of teachers and Personality Development of Students
              and overall development of our Technical Education System. ISTE
              Students Chapter TN156 is an active technical club of ACCET open
              for all the years and having 823 student members this academic
              year. We have planned to have more than 320 members the next year.
              The events are conducted technically on the basis of preparing the
              students for placement and higher studies. ISTE has conducted
              events like general apps, technical apps, Group discussion,
              technical GD, technical quiz, presentations, and mock interviews.
              Apart from this, we would be having classes on our technical
              subjects. The events are conducted weekly. The club also provides
              awareness about the civil service exams and their competitive
              exams. ISTE Best students award is also offered to the students
              with good academic records by the ISTE every year to encourage the
              students to concentrate more on academics. Dr. C. UmaRani serves
              as the coordinator of ISTE for our college, providing valuable
              leadership and guidance. We also conducted a National Level Maths
              Competition-Srinivasa Ramanujan Mathematical Competition
              successfully. The club has conducted a National Level Symposium
              ACISTECH’16 under the banner of ISTE with the procurement of
              ACISTECH’15, which was held on 02.03.2016, about 96 students had
              participated from various colleges in Tamil Nadu. Events were
              conducted for the disciplines of EEE, ECE, CSE, CIVIL, and
              MECHANICAL.
            </p>
          </div>
          <div className="isteabtpic">
            <img className="isteabtpici" src={istelogo} alt="istelogo" />
          </div>
        </div>

        <Underline heading="Objective" />
        <Listformat points={istelist} />

        <Underline heading="Annual Reports" />
        <div className="istepdfsec">
          <div className="istepdf">
            {istepdf.map((item) => (
              <Timeline
                key={item.id}
                head={item.head}
                house={item.house}
                pdf={item.pdf}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iste;
