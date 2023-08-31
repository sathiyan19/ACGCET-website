import React from "react";

import "./Sports.css";




import {
  Heroimagecarousal,
  Timeline,
  Listformat
} from "../../components";
import { Deptvision, Underline, Deptmission } from "../../widgets";
import {
  Sports_heroimage_carousalinfo,
  sportstime,
  sportslist,
  sportsvision,
  sportsmission,
} from "../../constants/sports";

const Sports = () => {
  return (
    <div>
      {/* hero image */}
      <Heroimagecarousal
        key={Sports_heroimage_carousalinfo.id}
        title={Sports_heroimage_carousalinfo.title}
        img_list={Sports_heroimage_carousalinfo.img_list}
      />

      <div className="vimisec">
        <Underline heading="sathiyan" />
        <Deptvision visiondata={sportsvision.visiondata} />
        <Deptmission points={sportsmission} />
        {sportstime.map((item) => (
          <Timeline
            head={item.head}
            house={item.house}
            content={item.content}
          />
        ))}

        <Listformat points={sportslist} />
      </div>

      


      
    </div>
  );
};

export default Sports;
