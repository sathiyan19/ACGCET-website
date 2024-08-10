import React from 'react';
import './Parents_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { parentFeedbackQuestions } from "../../constants/feedbackQuestions";

const Parents_fb = () => {
  return (
    <div className="parents_fb_container">
      <Underline heading="Parent's Feedback" />
      
      <form className="parents_fb_form">
        <div className="parents_fb_row">
          <input type="text" className="parents_fb_input" placeholder="Enter Name of student*" required />
          <input type="text" className="parents_fb_input" placeholder="Enter Student Register number*" required />
        </div>
        <div className='parents_fb_row'>
          <input type="text" className="parents_fb_input" placeholder="Enter The Branch*" required />
          <input type="text" className="parents_fb_input" placeholder="Enter passed out year*" required />
        </div>
        <div className="parents_fb_row">
          <select className="parents_fb_select" required>
            <option value="" disabled selected>Select Programme*</option>
            <option value="BE">B.E</option>
            <option value="ME">M.E</option>
            <option value="PhD">PhD</option>
          </select>
         
        </div>
    

        <h2 className="parents_fb_subtitle">Please give your valuable feedback on a scale</h2>
        <div className="parents_fb_feedback">
          <p className='parents_fb_instruction'>5 - Excellent  4 - Satisfied  3 - Good  2 - Not Satisfied  1 - Poor</p>

          <br />

          {parentFeedbackQuestions.map(({ question, translation, name }) => (
            <div className="parents_fb_question" key={name}>
              <p>{question}</p>
              <p>({translation})</p>
              <div className="parents_fb_ratings">
              {[1, 2, 3, 4, 5].map(num => (
                <label key={num}>
                  <input type="radio" name={name} value={num} />
                  <span className="custom-radio">{num}</span>
                </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="parents_fb_btn">
          <button type="submit" className="parents_fb_submit">
            Submit
          </button>
        </div>
      </form>
      <Backtotop />
    </div>
  );
};

export default Parents_fb;
