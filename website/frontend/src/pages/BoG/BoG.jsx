import React,{useEffect} from "react";

import "./BoG.css";

import { Underline } from "../../widgets";
import { bog_minutes_pdf } from "../../constants/bog";
import { Timeline } from "../../components";

const BoG = () => {
  useEffect(() => {
    document.title = 'ACCET-BoG';
  }, []);
  return (
    <div>
      <div className="bog_whole">
        <Underline heading="Board of Governors Minutes" />
        <div className="bog_pdfsec">
          <div className="bog_pdf">
            {bog_minutes_pdf.map((item) => (
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

export default BoG;
