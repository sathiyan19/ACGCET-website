import React from 'react'
import './Supplier_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { supplierFeedbackQuestions } from "../../constants/feedbackQuestions";

function Supplier_fb() {
    return(
        <div className='supplier_fb_container'>
            <div>
                <Underline heading = "Supplier Feedback"/>
            </div>  
            <form className='supplier_fb_form'>
                <div className='supplier_fb_row_sl'>
                    <input type="text" className='supplier_fb_input' placeholder='Name of the Supplier*' required/>
                </div>
                <div className='supplier_fb_row'>
                    <input type="text" className='supplier_fb_input' placeholder='Product supplied*' required/>
                    <select className="supplier_fb_select" required>
                        <option value="" disabled selected>Branch*</option>
                        <option value="Civil">Civil</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="CSE">CSE</option>
                    </select>
                </div>
                <h2 className="supplier_fb_subtitle">Please give your valuable feedback on a scale</h2>
                <div className='supplier_fb_feedback'>
                    <p className='supplier_fb_instruction'>5 - Excellent   4 - Satisfied   3 - Good   2 - Not Satisfied   1 - Poor</p>
                    <br />
                    {supplierFeedbackQuestions.map(({ question, translation, name }) => (
                        <div className="supplier_fb_question" key={name}>
                            <p>{question}</p>
                            <p>({translation})</p>
                            <div className="supplier_fb_ratings">{[1, 2, 3, 4, 5].map(num => (
                            <label key={num}>
                                <input type="radio" name={name} value={num} />
                                {num}
                            </label>
                            ))}
                            </div>
                        </div>
                    ))} 
                </div>
                <div className="supplier_fb_btn">
                    <button type="submit"           className="supplier_fb_submit">Submit
                    </button>
                </div>
            </form>
            <Backtotop />
        </div>
    )
}

export default Supplier_fb
