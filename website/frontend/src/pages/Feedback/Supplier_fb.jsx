import React, { useState } from 'react';
import './Supplier_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { supplierFeedbackQuestions } from "../../constants/feedbackQuestions";
import axios from 'axios';

const Supplier_fb = () => {
    const [supplierName, setSupplierName] = useState('');
    const [productSupplied, setProductSupplied] = useState('');
    const [branch, setBranch] = useState('');
    const [ratings, setRatings] = useState({
      
    }); // Default values

    const [nameError, setNameError] = useState('');

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]{2,30}$/;
        if (!nameRegex.test(name)) {
            setNameError('Name should only contain letters and spaces, and be 2 to 30 characters long.');
            return false;
        } else {
            setNameError('');
            return true;
        }
    };

    const handleNameChange = (e) => {
        const name = e.target.value;
        setSupplierName(name);
        validateName(name);
    };

    const handleProductChange = (e) => {
        setProductSupplied(e.target.value);
    };

    const handleBranchChange = (e) => {
        setBranch(e.target.value);
    };

    const handleRatingChange = (questionName, value) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [questionName]: value
        }));
    };

    const handleProductChange = (e) => setProductSupplied(e.target.value);
    const handleBranchChange = (e) => setBranch(e.target.value);

    const handleRatingChange = (e, name) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [name]: parseInt(e.target.value, 10) // Convert to integer
        }));
    };
    

    const RatingSubmit = async (event) => {
        event.preventDefault();

        if (!validateName(supplierName)) {
            return;
        }

        // Debugging: Log the ratings object to check if it's correct
        console.log("Ratings being submitted:", ratings);

        try {
            const response = await axios.post('/api/ratingsubmit', {
                supplier_name: supplierName,
                product_supplied: productSupplied,
                branch: branch,
                ratings: ratings // Send the ratings object directly
            });

            console.log(response.data);
            console.log(ratings);
            alert("Feedback submitted successfully");
            setSupplierName('');
            setProductSupplied('');
            setBranch('');
            setRatings({});
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while submitting your ratings");
        }
    };

    return (
        <div className='supplier_fb_container'>
            <div>
                <Underline heading="Supplier Feedback" />
            </div>  
            <form className='supplier_fb_form' onSubmit={RatingSubmit}>
                <div className='supplier_fb_row_sl'>
                    <input 
                        type="text" 
                        className='supplier_fb_input' 
                        placeholder='Name of the Supplier*' 
                        value={supplierName}
                        onChange={handleNameChange}
                        required 
                    />
                    {nameError && <p className='supplier_fb_error'>{nameError}</p>}
                </div>
                <div className='supplier_fb_row'>
                    <input 
                        type="text" 
                        className='supplier_fb_input' 
                        placeholder='Product supplied*' 
                        value={productSupplied}
                        onChange={handleProductChange}
                        required 
                    />
                    <select 
                        className="supplier_fb_select" 
                        value={branch} 
                        onChange={handleBranchChange} 
                        required
                    >
                        <option value="" disabled>Branch*</option>
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
                            <div className="supplier_fb_ratings">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <label key={num}>
                                        <input 
                                            type="radio" 
                                            name={name} 
                                            value={num} 
                                            onChange={(e) => handleRatingChange(e, name)} 
                                            checked={ratings[name] === num} // Ensure correct radio is checked
                                            required 
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
};

export default Supplier_fb;