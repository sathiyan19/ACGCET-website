import React from "react";

import "./Annual_report.css";

import { Timeline } from "../../components";
import { Backtotop,Underline } from "../../widgets";

import { annual_reps } from "../../constants/annual_reports";

const Annual_report = () => {
  return (
    <div>
      <Backtotop />
      <div className="annual_container">
        {/* <div className="annual_heading">Annual Reports</div> */}
        <Underline heading="Annual Reports"/>
        <div className="annual_reports_container">
          <div className="annual_reports">
            {annual_reps.map((item) => (
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

export default Annual_report;
