import React from 'react';
import './Employer_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { employerFeedbackQuestions } from "../../constants/feedbackQuestions";


const Employee_fb = () => {
  return (
    <div className='employer_fb_container'>
        <Underline heading = "Employer Feedback"/>
        <form className='employer_fb_form'>
            <div className='employer_fb_row'>
                <input type="text" className='employer_fb_input' />
            </div>
        </form>
    </div>
  )
}

export default Employee_fb