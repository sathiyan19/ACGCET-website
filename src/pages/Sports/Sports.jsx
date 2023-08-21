import React from 'react'

import "./Sports.css"
import { Heroimagecarousal } from "../../components";
import { Sports_heroimage_carousalinfo} from "../../constants/sports";

const Sports = () => {
  return (
    <div>
        {/* hero image */}
      <Heroimagecarousal
        key={Sports_heroimage_carousalinfo.id}
        title={Sports_heroimage_carousalinfo.title}
        img_list={Sports_heroimage_carousalinfo.img_list}
      />
    </div>
  )
}

export default Sports