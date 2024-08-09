import React from 'react'
import './Std_mini_project_fb.css'
import { Underline ,Backtotop} from '../../widgets'
import { std_mini_project_fb_data } from '../../constants/feedbackQuestions'

const Std_mini_project_fb = () => {
  return (
    <div className='std_mini_proj_fb_container'>
        <Underline heading="Mini Project and Project Feedback"/>
        <form className='std_mini_proj_fb_form'>
            <div className='std_mini_proj_fb_row'>
                <select className="std_mini_proj_fb_select" required>
                    <option value="" disabled selected>Select Programme*</option>
                    <option value="BE">B.E</option>
                    <option value="ME">M.E</option>
                    <option value="PhD">PhD</option>
                </select>
                <input type="text" className='std_mini_proj_fb_input' placeholder='Semester*' required/>
            </div>
            <div className='std_mini_proj_fb_row'>
                <input type="text" className='std_mini_proj_fb_input' placeholder='Course code' />
                <input type="text" className='std_mini_proj_fb_input' placeholder='Course Title' />
            </div>
            <div className='std_mini_proj_fb_row_sl'>
                <input type="text" className='std_mini_proj_fb_input_full'  placeholder=' Student E-mail Address*' required/>
            </div>
            <div className='std_mini_proj_fb_row_sl'>
                <input type="text" className='std_mini_proj_fb_input_full'  placeholder=' Faculty'/>
            </div>
            <div className="std_mini_proj_fb_rating">
                <p className='std_mini_proj_fb_instruction'>Ratings: 5 – Excellent; 4 – Very Good; 3 – Good; 2 – Poor; 1 – Very Poor</p>
            </div>
            {std_mini_project_fb_data.map(({ question, translation, name }) => (
                <div className="collab_fb_question" key={name}>
                    <p>{question}</p>
                    <p>{translation}</p>
                    <div className="std_teach_fb_data">{[1, 2, 3, 4, 5].map(num => (
                        <label key={num}>
                            <input type="radio" name={name} value={num} />
                            <span className="custom-radio">{num}</span>
                        </label>
                        ))}
                    </div>
                </div>
            ))}
            <div className="std_teaching_fb">
                <button type="submit" className="std_teaching_fb_submit">Submit</button>
            </div>
        </form>
        <Backtotop/>
    </div>
  )
}

export default Std_mini_project_fb