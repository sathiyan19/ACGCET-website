import React from "react";

import { Heroimagecarousal} from "../../components";
import { Thiran_heroimage_carousalinfo} from "../../constants/thiran";

// import { Scholar_card } from "../../widgets";
// import { Scholar_info } from "../../constants/Scholar_card";
const Thiran = () => {
  
  return (
    <div>
      {/* hero image */}
      <Heroimagecarousal
        key={Thiran_heroimage_carousalinfo.id}
        title={Thiran_heroimage_carousalinfo.title}
        img_list={Thiran_heroimage_carousalinfo.img_list}
      />
    

   
        {/* {Scholar_info.map((scholar) => (
          <Scholar_card
            key={scholar.id}
            schbg={scholar.schbg}
            IncLimit={scholar.IncLimit}
            schamt={scholar.schamt}
            schterms1={scholar.schterms1}
            schterms2={scholar.schterms2}
            schterms3={scholar.schterms3}
          />
        ))} */}

   </div>
  );
};

export default Thiran;
