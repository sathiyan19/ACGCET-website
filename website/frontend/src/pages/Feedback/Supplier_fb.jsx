import React, { useState } from 'react';
import './Supplier_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { supplierFeedbackQuestions } from "../../constants/feedbackQuestions";
import axios from 'axios';
const Supplier_fb = () => {
    // State to store the selected ratings
    const [ratings, setRatings] = useState({});
    const [loading, setLoading] = useState(false);
    // Handle change of radio button
    const handleRatingChange = (questionName, value) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [questionName]: value
        }));
    };

    // Handle form submission
    const RatingSubmit = async (event) => {
        event.preventDefault();
    
        try {
            setLoading(true);
            const supplierName = event.target.elements[0].value;
            const productSupplied = event.target.elements[1].value;
            const branch = event.target.elements[2].value;
    
            const response = await axios.post('/backend/ratingsubmit', {
                supplier_name: supplierName,
                product_supplied: productSupplied,
                branch: branch,
                ratings
            });
    
            console.log(response.data);
            alert("Ratings submitted successfully");
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while submitting your ratings");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className='supplier_fb_container'>
            <div className="supplier_fb_udl">
                <Underline heading="Supplier Feedback" />
            </div>
            <form className='supplier_fb_form' onSubmit={RatingSubmit}>
                <div className='supplier_fb_row_sl'>
                    <input type="text" className='supplier_fb_input' placeholder='Name of the Supplier*' required />
                </div>
                <div className='supplier_fb_row'>
                    <input type="text" className='supplier_fb_input' placeholder='Product supplied*' required />
                    <select className="supplier_fb_select" required>
                        <option value="" disabled selected>Branch*</option>
                        <option value="Civil">CIV</option>
                        <option value="Mechanical">MECH</option>
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
                            <div className="alumni_fb_ratings">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <label key={num}>
                                        <input
                                            type="radio"
                                            name={name}
                                            value={num}
                                            checked={ratings[name] === num}
                                            onChange={() => handleRatingChange(name, num)}
                                        />
                                        <span className="custom-radio">{num}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="supplier_fb_btn">
                    <button type="submit" className="supplier_fb_submit">Submit</button>
                </div>
            </form>
            <Backtotop />
        </div>
    );
}

export default Supplier_fb;
