import React,{useEffect} from 'react'
import "./Mech_lib.css";
import { Backtotop,Floatinmenu, Underline,Content_card} from "../../widgets";
import {Profile_display} from '../../components'
import { mech_dept_menu,mech_lib_profiles} from "../../constants/mech_dept";

import { Radial_menu } from "../../components";


import { BsFillGearFill } from "react-icons/bs";
const Mech_lib = () => {
  useEffect(() => { 
    document.title = 'ACCET-Mech | Library';
  }, []);
  return (
    <div className="mechdept">
    <div className="mechbg">
      <div className="mechheading">
        Department of Mechanical Engineering
      </div>
      <div className="mech_sub_heading">Department Library</div>
    </div>
    <section className="mechdark">
      <div className="dept_float_menu">
        <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
      </div>
      <Radial_menu menu_links={mech_dept_menu} />
      <div className="mech_lib_area">
          <Underline heading="Library"/>
          <div className="mech_lib_conts">
<p className= "mech_lib">
The department library, overseen by the capable hands of Dr. N. Babu, Assistant Professor, stands as a robust repository of reference and textbooks, adeptly meeting the academic and research requirements of students pursuing Bachelor of Engineering (B.E.) and Master of Engineering (M.E.). This invaluable resource hub is meticulously curated to support and enhance the educational journey of scholars within the department.

The established rules governing book borrowing reflect a balance between accessibility and responsible use. 

</p>
<p className="mech_lib2">
Each B.E. or M.E. student is granted the privilege of borrowing two books concurrently, facilitating a reasonable academic load. The lending period spans 30 days, allowing ample time for students to delve into their chosen materials, aligning with the ebb and flow of their coursework.

However, responsibility accompanies this privilege. The stipulation regarding lost or damaged books underscores the need for students to handle borrowed materials with care. In the event of loss or damage, students are obligated to either replace the book or remit an amount double its original price. This rule serves not only as a deterrent against negligence but also as a mechanism to ensure the sustained availability of the library's resources for future users.
</p>
<p className="mech_lib2">
Dr. N. Babu, in his capacity as the Faculty In-charge, plays a pivotal role in maintaining the efficiency and relevance of the department library. His oversight ensures that the collection remains current and aligned with the evolving needs of the academic and research landscape within the department.

In essence, the department library, guided by Dr. N. Babu, stands as a cornerstone in fostering a conducive learning environment. It not only provides students with the necessary tools for academic exploration but also instills a sense of responsibility, recognizing that the collective care of these resources ensures their enduring availability for generations to come.
</p>
            </div>   
            <div className="content_card_holder">
              {mech_lib_profiles.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
         </div>
      </div>
    </section>

    <Backtotop />
  </div>

  );
}

export default Mech_lib