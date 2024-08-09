import React from 'react'
import './Std_teaching_fb.css'
import { Underline } from '../../widgets'
import { std_teach_fb_data } from '../../constants/feedbackQuestions'

const Std_teaching_fb = () => {
  return (
    <div className="std_teach_fb_container">
    <Underline heading="Teaching and Learning Feedback"/>

    <div className="std_teach_fb_form">
    <div className="std_teach_fb_rows">

        <input type="text" className ="std_teach_fb_input" placeholder='Programme'  required/>
            <input type="text"  className ="std_teach_fb_input" placeholder='Semester'  required/>
    </div>
    <div className="std_teach_fb_rows">
     <input type="text" className='std_teach_fb_input_full' placeholder='Course Title' required />

    </div>

    <div className="std_teach_fb_rows">
        <input type="text" className='std_teach_fb_input' placeholder='Course code' />
        <input type="text" className='std_teach_fb_input' placeholder='Faculty' />
        
    </div>

    <div className="std_teach_fb_rows">
        <input type="text" className='std_teach_fb_input_full'  placeholder=' Student E-mail Address' required/>
    </div>

    <div className="std_teach_fb_rating">
        <p>Ratings: 5 – Excellent; 4 – Very Good; 3 – Good; 2 – Poor; 1 – Very Poor</p>
    </div>

    {/* <div className="std_teach_fb_map"> */}
    {std_teach_fb_data.map(({ question, translation, name }) => (
                        <div className="collab_fb_question" key={name}>
                            <p>{question}</p>
                            <p>{translation}</p>
                            <div className="std_teach_fb_data">
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
    </div>
//    </div>
  )
}

export default Std_teaching_fb
