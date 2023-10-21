import React from 'react'
import { Backtotop,Floatinmenu, Underline,Content_card} from "../../widgets";
import { eee_dept_menu,studcorner} from "../../constants/eee_dept";

import { Radial_menu } from "../../components";

import { AiFillThunderbolt } from "react-icons/ai";

const Eee_studcorner = () => {
  return (
    <div className="eeedept">
          <div className="eeebg">
            <div className="eeeheading">
              Department of Electrical and Electronics Engineering
            </div>
            <div className="eee_sub_heading">Student Corner</div>
          </div>
          <section className="eeedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
            </div>
            <Radial_menu menu_links={eee_dept_menu} />
            <div className="eee_lab_area">
          <Underline heading="Student Corner"/>
          <div className="eee_progs">
            {studcorner.map((item)=><Content_card key={item.id} period={item.period} top_head={item.top_head} heading={item.program} view={item.view}/>)}
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  )
}

export default Eee_studcorner