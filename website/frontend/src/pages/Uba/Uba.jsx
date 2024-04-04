import React,{useEffect} from "react";
import "./Uba.css";
import { Underline,Deptmission,Deptvision } from "../../widgets";
import { Listformat } from "../../components";
import {ubavis,ubamis,ubagoal} from "../../constants/Uba";
// import gandhi from "../../assets/pictures/Gandhiji.webp"
// import uba from "../../assets/pictures/uba.webp"
const gandhi="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/uba/Gandhiji.webp"
const uba="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/uba/uba.webp"
const Uba = () => {
  useEffect(() => {
    document.title = 'ACCET-UBA';
  }, []);
  return (
    <div className="ubaall">
      <Underline heading="Unnat Bharat Abhiyan" />
      <div className="ubaabt">
        <div className="ubaabt1">
        <p className="ubaabt1p">
          Unnat Bharat Abhiyan is inspired by the vision of transformational
          change in rural development processes by leveraging knowledge
          institutions.The conceptualization of Unnat Bharat Abhiyan started
          with the initiative of a group of dedicated faculty members of the
          Indian Institute of Technology (IIT) Delhi working for a long in the
          area of rural development and appropriate technology. The concept was
          nurtured through wide consultation with the representatives of a
          number of technical institutions, Rural Technology Action Group
          (RuTAG) coordinators, voluntary organizations, and government
          agencies, actively involved in rural development work, during a
          National workshop held at IIT Delhi in September 2014. The workshop
          was sponsored by the Council for Advancement of People’s Action and
          Rural Technology (CAPART), Ministry of Rural Development, Govt. of
          India.
        </p>
        </div>
        <div className="ubaabt2">
            <img className="ubaabt2i" src={gandhi} alt="gandhi"/>
        </div>
      </div>
      <Underline heading="Vision & Mission"/>
      <Deptvision  visiondata={ubavis.visiondata} />
      <Deptmission points={ubamis} />
      <Underline heading="Goals"/>
      <Listformat points={ubagoal} />
      <Underline heading="Award"/>
      <div className="ubaaward">
        <img className="ubaawardi" src={uba} alt="uba"/>
      </div>
      
    </div>
  );
};

export default Uba;
