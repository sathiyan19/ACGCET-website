import React from 'react'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";
import { eee_dept_menu,eee_labs} from "../../constants/eee_dept";

import { Radial_menu } from "../../components";

import { AiFillThunderbolt } from "react-icons/ai";

const Eee_lib = () => {
    return (
        <div className="eeedept">
          <div className="eeebg">
            <div className="eeeheading">
              Department of Electrical and Electronics Engineering
            </div>
            <div className="eee_sub_heading">Department Library</div>
          </div>
          <section className="eeedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
            </div>
            <Radial_menu menu_links={eee_dept_menu} />
            <div className="eee_lab_area">
          <Underline heading="Department Library"/>
          <p className="eee_dept_content indent"><br/>
          The department library is providing the technical resources to the students, research scholars and faculty members of the Electrical and Electronics Engineering department.
          The department library is open on all working days.
Students can enter into the department library during library hours.
 The members of the library need to enter their details in the log book before entering into the department library.
 Research scholars as well as faculty members of the Electrical and Electronics Engineering department can borrow books from the library which is noted in the issue register. 
          <br/> <br/>
          The department library has collection of textbooks, students’ project reports and books for competitive exams. 
There is a computer system for searching and reading online resources.
Presently, department library has about 620 books related to various fields in Electrical and Electronics Engineering like Electric Circuits, Electrical Machines, control systems, power systems, power electronics, network theory, signals and systems, measurement and instrumentation, analog and digital electronics,Microprocessor.
The department library is mainly focused for providing comfortable, user friendly environment so as to enables learning and knowledge creation.
          <br/><br/><br/></p>
        </div>
      </section>

      <Backtotop />
    </div>
      );
}

export default Eee_lib