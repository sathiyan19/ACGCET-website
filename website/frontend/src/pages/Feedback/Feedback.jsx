import React ,{useEffect}from 'react'
import "./Feedback.css";
import { Backtotop,  Underline } from "../../widgets";
import { Radial_menu, Listformat } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Feedback = () => {
    useEffect(() => {
        document.title = 'ACCET-FEEDBACK ';
      }, []);
  return (
    <div className="fb_main_container">
      <div className="fb_main_heading">
      <Underline heading="Feedback "/>
      </div>

        <div className="fb_card_holder_main">
          <div className="parent_fb__card">
          <p><h1>0</h1></p>
          </div>
          <div className="student_fb__card">
            <p><h1>1</h1></p>

          </div>
          <div className="alumni_fb__card">
          <p><h1>2</h1></p>

          </div>
          <div className="collab_fb__card">
          <p><h1>3</h1></p>

          </div>
          <div className="supplier_fb__card">
            <p><h1>4</h1></p>

          </div>
          <div className="faculty_fb__card">
            <p><h1>5</h1></p>

          </div>
          <div className="consult_fb__card">
            <p><h1>6</h1></p>

          </div>
          <div className="employee_fb__card">
            <p><h1>7</h1></p>

          </div>

        </div>

    </div>
  )
}

export default Feedback