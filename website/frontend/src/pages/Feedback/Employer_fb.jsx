import React from 'react';
import './Employer_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { employerFeedbackQuestions } from "../../constants/feedbackQuestions";


const Employer_fb = () => {
  return (
    <div className='employer_fb_container'>
        <div>
          <Underline heading = "Employer Feedback"/>
        </div>
        <form className='employer_fb_form'>
            <div className='employer_fb_row'>
                <input type="text" className='employer_fb_input' placeholder='Name of the HR*' required/>
                <input type="text" className="employer_fb_input" placeholder="Name of the company*" required />
            </div>
            <div className='employer_fb_row_sl'>
              <input type="text" className='employer_fb_input' placeholder='Adress of the company'/>
            </div>
            <div className='employer_fb_row_sl'>
              <input type="text" className='employer_fb_input' placeholder='Name of the student*' required/>
            </div>
            <div className='employer_fb_row'>
              <select className="employer_fb_select" required>
                <option value="" disabled selected>Select Programme*</option>
                <option value="BE">B.E</option>
                <option value="ME">M.E</option>
                <option value="PhD">PhD</option>
              </select>
              <select className="employer_fb_select" required>
                <option value="" disabled selected>Branch*</option>
                <option value="Civil">Civil</option>
                <option value="Mechanical">Mechanical</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="CSE">CSE</option>
              </select>
            </div>
            <div className='employer_fb_row_sl'>
              <input type="text" className='employer_fb_input' placeholder='Year of joining the company'/>
            </div>
            <div className='employer_fb_row'>
              <input type="text" className='employer_fb_input' placeholder='Position at the entry level'/>
              <input type="text" className='employer_fb_input' placeholder='Current position'/>
            </div>
            <div className='employer_fb_row_sl'>
              <input type="text" className='employer_fb_input' placeholder='Responsibilities held'/>
            </div>
            <div className='employer_fb_row_sl'>
            <input type="text" className='employer_fb_input' placeholder='Achievements/Awards'/>
            </div>

            <h2 className="employer_fb_subtitle">Please give your valuable feedback on a scale</h2>
        <div className="employer_fb_feedback">
          <p className='employer_fb_instruction'>5 - Excellent   4 - Satisfied   3 - Good   2 - Not Satisfied   1 - Poor</p>
          <br />
          {employerFeedbackQuestions.map(({ question, translation, name }) => (
            <div className="employer_fb_question" key={name}>
              <p>{question}</p>
              <p>({translation})</p>
              <div className="employer_fb_ratings">
                {[1, 2, 3, 4, 5].map(num => (
                  <label key={num}>
                    <input type="radio" name={name} value={num} />
                    {num}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="employer_fb_btn">
          <button type="submit" className="employer_fb_submit">
            Submit
          </button>
        </div>
        </form>
        <Backtotop />
    </div>
  )
}

export default Employer_fb