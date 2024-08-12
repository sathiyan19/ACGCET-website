import React from 'react';
import './Consultancy_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { consultancyFeedbackQuestions } from "../../constants/feedbackQuestions";

const Consultancy_fb = () => {
  return (
    <div className="consultancy_fb_container">
      <Underline heading="Consultancy Feedback" />
      
      <form className="consultancy_fb_form">
        <div className="consultancy_fb_row">
          <input type="text" className="consultancy_fb_input" placeholder="Department Undertaking the work*" required />
          <input type="text" className="consultancy_fb_input" placeholder="Company Offering Consultancy*" required />
        </div>
        <div className='consultancy_fb_row'>
          <select className="consultancy_fb_input" required>
            <option value="" disabled selected>Nature of Work*</option>
            <option value="BE">B.E</option>
            <option value="ME">M.E</option>
            <option value="PhD">PhD</option>
          </select>
          <input type="text" className="consultancy_fb_input" placeholder="Date of Commencement*" required />
        </div>
        <div className="consultancy_fb_row">
          <select className="consultancy_fb_select" required>
            <option value="" disabled selected>Select Programme*</option>
            <option value="BE">B.E</option>
            <option value="ME">M.E</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <h2 className="consultancy_fb_subtitle">Please give your valuable feedback on a scale</h2>
        <div className="consultancy_fb_feedback">
          <p className='consultancy_fb_instruction'>5 - Excellent  4 - Satisfied  3 - Good  2 - Not Satisfied  1 - Poor</p>

          <br />

          {consultancyFeedbackQuestions.map(({ question, translation, name }) => (
            <div className="consultancy_fb_question" key={name}>
              <div className="consultancy_fb_qr">
              <p className='consultancy_fb_qr_p'>{question }</p>  
               <p className='consultancy_fb_qr_p'>({translation})</p>
              </div>
              
              <div className="consultancy_fb_ratings">
                {['Low', 'Medium', 'High'].map((label, index) => (
                  <label key={index}>
                    <input type="radio" name={name} value={label.toLowerCase()} />
                    <span className="consultancy-custom-radio"></span>
                    {label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="consultancy_fb_btn">
          <button type="submit" className="consultancy_fb_submit">
            Submit
          </button>
        </div>
      </form>
      <Backtotop />
    </div>
  );
};

export default Consultancy_fb;
