import React from 'react'
import { Radial_menu,Timeline } from "../../components";
// import eee from "../../assets/pictures/eee_about.webp";

import { AiFillThunderbolt } from "react-icons/ai";

import {
    eee_dept_menu, eee_gen
  } from "../../constants/eee_dept";
  import {
    Backtotop,
    Floatinmenu,
    Underline,
  } from "../../widgets";

const technical="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/technical.webp"

const Eee_nextgen = () => {
  return (
    <div className="eeedept">
      <div className="eeebg">
        <div className="eeeheading">
          Department of Electrical and Electronics Engineering
        </div>
        <div className='eee_sub_heading'>Next Gen Lab</div>
      </div>
      <section className="eeedark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={AiFillThunderbolt}
            head="Menu"
            links={eee_dept_menu}
          />
        </div>
        <Radial_menu menu_links={eee_dept_menu} />


        <div className="eee_abt">
          <Underline heading="Next Gen Lab" />
          <div className="eeetwo-col">
            <p className="eee_dept_content">
            Next Generation Laboratory has been established with the support of 1994 batch Alumni aims to train the students to the need of industry 4.0. The lab is equipped with high speed i7 processor computers along various sensor kits. The Lab is open for all the final year and third year students of all the departments , the list of interested students is collected across the departments. The interested students are interviewed and shortlisted by the Alumni. Initially a group of 50 interested students are trained by the industrial experts. The trained students will train the next batch of students through peer learning techniques and the process will go on.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={technical} />
            </div>
          </div>
          
        </div>
        <div className="eee_peo">
            
            {eee_gen.map((item)=><Timeline key={item.id} head={item.head} house={item.house} content={item.content}/>)}
          </div>
        

        
      </section>

      <Backtotop />
    </div>
  )
}

export default Eee_nextgen
