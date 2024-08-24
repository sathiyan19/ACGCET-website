import React from 'react';
import './Alumini_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { AlumniFeedbackQuestions } from "../../constants/feedbackQuestions";

const Alumini_fb = () => {

 return (

    
    <div className="alumni_fb_container">
      <div className="alumni_fb_udl">

      <Underline heading = "Alumini Feedback"/>
      </div>
      
      {/* <h1 className="alumni_fb_title">Alumni Feedback</h1> */}
      <form className="alumni_fb_form">
        <div className="alumni_fb_row">
          <input type="text" className="alumni_fb_input" placeholder="Enter Name of the Alumni*" required />
          <input type="text" className="alumni_fb_input" placeholder="Enter Designation*" required />
        </div>
        <div className="alumni_fb_row">
          <select className="alumni_fb_select" required>
            <option value="" disabled selected>Select Programme*</option>
            {/* Add options here */}
          </select>
          <select className="alumni_fb_select" required>
            <option value="" disabled selected>Select Department*</option>
            <option value="BE">B.E</option>
            <option value="ME">M.E</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="alumni_fb_row">
          <input type="text" className="alumni_fb_input" placeholder="Enter passed out year*" required />
        </div>

        <h2 className="alumni_fb_subtitle">Details of Higher Studies</h2>
        <div className="alumni_fb_row">
          <select className="alumni_fb_select">
            <option value="" disabled selected>Whether did any higher studies?</option>
            {/* Add options here */}
          </select>
          <input type="text" className="alumni_fb_input" placeholder="Name of The institution (Optional)" />
        </div>

        <h2 className="alumni_fb_subtitle">Details of Competitive Exams</h2>
        <div className="alumni_fb_row">
          <select className="alumni_fb_select">
            <option value="" disabled selected>Whether wrote any Competitive Exam?</option>
            {/* Add options here */}
          </select>
          <input type="text" className="alumni_fb_input" placeholder="Name of the Examination (Optional)" />
        </div>

        <h2 className="alumni_fb_subtitle">Career Path</h2>
        <div className="alumni_fb_row">
          <input type="text" className="alumni_fb_input" placeholder="Name of the Company (Optional)" />
        </div>
        <div className="alumni_fb_row">
          <input type="text" className="alumni_fb_input" placeholder="Position at Entry Level (Optional)" />
          <input type="text" className="alumni_fb_input" placeholder="Enter your Current Position (Optional)" />
        </div>
        <div className="alumni_fb_row">
          <input type="text" className="alumni_fb_input" placeholder="Responsibilities held (Optional)" />
          <input type="text" className="alumni_fb_input" placeholder="Achievements/ Awards (Optional)" />
        </div>

        <div className="alumni_fb_row">
          <select className="alumni_fb_select">
            <option value="" disabled selected>Whether you are in-service or retired?</option>
            {/* Add options here */}
          </select>
          <input type="text" className="alumni_fb_input" placeholder="City (Optional)" />
        </div>

        <h2 className="alumni_fb_subtitle">Please give your valuable feedback on a scale</h2>
        <div className="alumni_fb_feedback">
          <p>5 - Excellent  4 - Satisfied  3 - Good  2 - Not Satisfied  1 - Poor</p>

          <br /> 

       

          {AlumniFeedbackQuestions.map(({ question, translation, name }) => (
            <div className="alumni_fb_question" key={name}>
              <p>{question}</p>
              <p>({translation})</p>
              <div className="alumni_fb_ratings">
      {[1, 2, 3, 4, 5].map(num => (
        <React.Fragment key={num}>
          <input type="radio" id={`rating-${num}`} name={name} value={num} />
          <label htmlFor={`rating-${num}`}>{num}</label>
        </React.Fragment>
        
      ))}
    </div>
    

            </div>
          ))}
        </div>

        <div className="alumni_fb_row">
          <button type="submit" className="alumni_fb_submit">
            Submit
          </button>
        </div>
      </form>
      <Backtotop />
    </div>
  );
};

export default Alumini_fb;
