import React from "react";

import "./Committee.css";

import { Underline } from "../../widgets";
import { commpdf } from "../../constants/committee";
import { Timeline } from "../../components";

const Committee = () => {
  return (
    <div>
      <div className="commwhole">
        <Underline heading="Committee/Cell" />
        <div className="commpdfsec">
          <div className="commpdf">
            {commpdf.map((item) => (
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

export default Committee;
