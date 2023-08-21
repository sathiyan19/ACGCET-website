import React from 'react'

import "./Ncc.css";
import { Heroimagecarousal,Table } from "../../components";
import { Ncc_heroimage_carousalinfo,profile_info } from '../../constants/ncc';
import { Profilecard } from "../../widgets";

const Ncc = () => {
  return (
    <div>
        {/* hero image */}
        <Heroimagecarousal
        key={Ncc_heroimage_carousalinfo.id}
        title={Ncc_heroimage_carousalinfo.title}
        img_list={Ncc_heroimage_carousalinfo.img_list}
      />

<div className="nccofficers">
        <div className="nccpohead">
          <h1>Programme Officers</h1>
        </div>
        <div className="ncccardholder">
          <div className="ncccards">
            {profile_info.map((item) => (
              <Profilecard
                key={item.id}
                cover={item.cover}
                dp={item.dp}
                name={item.name}
                Designation={item.Designation}
                mailid={item.mailid}
              />
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Ncc