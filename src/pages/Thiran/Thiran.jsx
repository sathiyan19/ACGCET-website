import React from "react";

import { Heroimagecarousal} from "../../components";
import { Thiran_heroimage_carousalinfo} from "../../constants/thiran";


const Thiran = () => {
  return (
    <div>
      {/* hero image */}
      <Heroimagecarousal
        key={Thiran_heroimage_carousalinfo.id}
        title={Thiran_heroimage_carousalinfo.title}
        img_list={Thiran_heroimage_carousalinfo.img_list}
      />
    </div>
  );
};

export default Thiran;
