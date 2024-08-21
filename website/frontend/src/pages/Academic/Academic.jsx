import React,{useEffect} from "react";

import "./Academic.css";

import { Timeline } from "../../components";
import { Backtotop,Underline } from "../../widgets";

import { academic_cals } from "../../constants/academic_calendar";

const Academic = () => {
  useEffect(() => {
    document.title = 'ACCET-Academic Calendars';
  }, []);
  return (
    <div>
      <Backtotop />

      <div className="academic_container">
        {/* <div className="academic_heading">Academic Calendar</div> */}
        <Underline heading="Academic Calendar"/>
        <div className="academic_cals_container">
          <div className="academic_reports">
            {academic_cals.map((item) => (
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
};

export default Academic;
