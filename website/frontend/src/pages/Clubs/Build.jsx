import React, { useEffect } from "react";

import "./Build.css";
import { Underline,Backtotop } from "../../widgets";
import { Timeline } from "../../components";
import { build_club_reports } from "../../constants/Clubs";

const Build = () => {
  useEffect(() => {
    document.title = "Build_club";
  }, []);
  return (
    <div>
      <Backtotop />

      <div className="build_container">
      <Underline heading="Build Club-Annual Reports" />

        <div className="build_cals_container">
          <div className="build_reports">
            {build_club_reports.map((item) => (
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

export default Build;
