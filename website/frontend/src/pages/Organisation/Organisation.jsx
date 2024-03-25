import React,{useEffect} from 'react'

import './Organisation.css'

import { Underline } from '../../widgets';

const org_struc ="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Cse/cse+grp1.webp";

const Organisation = () => {
  useEffect(() => {
    document.title = 'ACCET-Organisation Structure';
  }, []);
  return (
    <div className="org_structure">
          <div className="org_heading ">
            <Underline heading="Organization Structure"/>
          </div>
          <div className="org_text">
            The college is a Government Institution and comes under the direct
            control of the state head, Honorable Chief Minister, followed by the
            Higher Education Minister, Chief Secretary and Additional Chief
            Secretary and Commissioner who involve in the administrative
            policies directly. The Commissioner of Directorate of Technical
            Education is ex-officio head of all the Technical Education
            Institutes in Tamilnadu. The Commissioner governs and controls all
            activities related to the recruitment of faculty & staff,
            promotions, transfer of job of the teachers and non-teaching staff
            members and the admission and transfer of students.
          </div>
          <div className="org_pic">
            <img
              className="ord_str_img"
              src={org_struc}
              alt="Organisation Structure"
            />
          </div>
        </div>
  )
}

export default Organisation