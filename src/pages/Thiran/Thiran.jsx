import React from "react";

import './Thiran.css'

import { Heroimagecarousal,Reunion_card_display} from "../../components";

import thiran_logo from "../../assets/pictures/thiran.webp";

import { Thiran_heroimage_carousalinfo,vision,mission_data,jury_awards} from "../../constants/thiran";

import { Deptvision,Deptmission,Underline,Profilecard } from '../../widgets';

const Thiran = () => {
  
  return (
    <div>
    
      {/* hero image */}
      <Heroimagecarousal
        key={Thiran_heroimage_carousalinfo.id}
        title={Thiran_heroimage_carousalinfo.title}
        img_list={Thiran_heroimage_carousalinfo.img_list}
      />
<div className="thiran_underline">
        <Underline heading="Aim"/>
</div>
        <div className="thiran_flex">
             <p className="thiran_cont">
          To establish a advanced platform for the students to plan and manage their new ideas into strategy and to bring out the leadership quality of an individual by involving them in project management and guidance.
          We aim to foster leadership qualities and project management skills in our members, equipping them with the tools and knowledge needed to succeed in their academic and professional journeys.
          The Thiran Club is dedicated to empowering students by providing them with a dynamic and innovative platform to transform their ideas into actionable strategies.
          The club encourages interdisciplinary collaboration, allowing students from various fields of study to come together and work on projects. This fosters diversity of thought and enriches the learning experience.
             </p>
             <p className="thiran_cont1">To establish a advanced platform for the students to plan and manage their new ideas into strategy and to bring out the leadership quality of an individual by involving them in project management and guidance.
              We aim to foster leadership qualities and project management skills in our members, equipping them with the tools and knowledge needed to succeed in their academic and professional journeys.The Thiran Club is dedicated to empowering students by providing them with a dynamic and innovative platform to transform their ideas into actionable strategies.</p>
              <div className="thiran_img_holder">
                 <img className="thiran_img" src={thiran_logo} alt='thiran_image'/>
              </div>
          </div>
          <p className="thiran_cont2">
          The club encourages interdisciplinary collaboration, allowing students from various fields of study to come together and work on projects. This fosters diversity of thought and enriches the learning experience.</p>
        <div className="thiran_underline">
        <Underline heading="Vision & Mission"/>
        </div>
    <div className="thiran_vis">
      
    <Deptvision visiondata={vision.visiondata} />
    <Deptmission points={mission_data}/>
    </div>

    <div className="thiran_underline">
    <Underline  heading="Objective"/>
    </div>
    
    <div className="thiran_obj">
     
       <p>To develop the actions in initiation of the project procedures, planning, execution, regulation and closure as well as the guidance of the project team operations towards achieving their goals with in the set scope and time.
         Detailed planning involves creating comprehensive project plans, allocating resources, and setting milestones. </p> 
    </div>
    <div className="thiran_obj1">
       <p>To effectively initiate and manage a project, one must undertake a structured process involving initiation, planning, execution, regulation, and closure.
  This entails defining project objectives, creating detailed plans, overseeing task execution, ensuring adherence to regulations, and ultimately closing out the project.</p> 
    </div>

   
     

    {/* <div className="thiran_cardholder">
    <div className="thiran_cards">
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
       </div> */}

       <div  className="thiran_winners">

       <Underline heading="Jury Awards"/>

       <Reunion_card_display cardinfo_list={jury_awards}/>       
        
       </div>

    </div>
  );
};

export default Thiran;
