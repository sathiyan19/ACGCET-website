import React,{useEffect} from "react";

import "./Milestones.css";

import { milestones } from "../../constants/milestones";

import { Table } from "../../components";

import { Backtotop } from "../../widgets";

// import mile from "../../assets/pictures/mile.webp";
const mile="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/about/milestones/mile.webp"


const Milestones = () => {
  useEffect(() => {
    document.title = 'ACCET-Milestones';
  }, []);
  const columns = [
    { field: "year", header: "year" },
    { field: "achieve", header: "achievement" },
  ];
  return (
    <>
    <Backtotop/>
    <div className="milestone_tab">
      <div className="milestone_headingsec">
        <div className="milestone_imghead">
          <img className="milestone_pic" src={mile} alt="Milestones" />
        </div>
        <div className="milestone_heading">
          <h1>Milestones</h1>
        </div>
      </div>

      <div className="milestone_table">
        <Table
          data={milestones}
          columns={columns}
          // hover={true}
          // striped={true}
        />
      </div>
    </div>
    </>
  );
};
export default Milestones;
/* <div className="tab">
         <div className="headingsec">
             <div className="imghead">
                 <img className="pic" src={mile} alt="Milestones" />
             </div>
             <div className="heading">
                 <h1>Milestones</h1>
             </div>
         </div>
         <table>
             <tr>
                 <th>YEAR</th>
                 <th className="achieve">ACHIEVEMENTS</th>
             </tr>

             {milestones.map((item)=><tr><td>{item.year}</td><td>{item.achieve}</td></tr>)}    
        
         </table> */
