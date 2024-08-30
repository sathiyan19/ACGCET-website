import React, { useState } from 'react';
import './Parents_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { parentFeedbackQuestions } from "../../constants/feedbackQuestions";
import axios from 'axios';

const ParentsFeedback = () => {
    const [studentName, setStudentName] = useState('');
    const [registerNumber, setRegisterNumber] = useState('');
    const [branch, setBranch] = useState('');
    const [programme, setProgramme] = useState('');
    const [passedOutYear, setPassedOutYear] = useState('');
    const [ratings, setRatings] = useState({});
    const [errors, setErrors] = useState({});
    const [nameError, setNameError] = useState('');
    const [ratingErrors, setRatingErrors] = useState({});
    const [registerNumberError, setRegisterNumberError] = useState('');

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

    const validateRatings = () => {
        const errors = {};
        parentFeedbackQuestions.forEach(({ name }) => {
            if (!ratings[name]) {
                errors[name] = 'Please select a rating (தயவுசெய்து மதிப்பீட்டை தேர்வு செய்யவும்)';
            }
        });
        setRatingErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleNameChange = (e) => {
        const name = e.target.value;
        setStudentName(name);
        validateName(name);
    };

    const handleRegisterNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setRegisterNumber(value);
            setRegisterNumberError(''); // Clear the error if valid
        } else {
            setRegisterNumberError('Register Number should only contain digits.');
        }
    };

    const handleBranchChange = (e) => setBranch(e.target.value);
    const handleProgrammeChange = (e) => setProgramme(e.target.value);
    const handlePassedOutYearChange = (e) => {
        const value = e.target.value;

        // Check if the input contains only digits and is at most 4 characters long
        if (/^\d{0,4}$/.test(value)) {
            setPassedOutYear(value);
            const date= new Date();

            // Validate if the input has exactly 4 digits
            if (value.length === 4 && value>=1952 && value<=date.getFullYear()) {
                setErrors((prevErrors) => ({ ...prevErrors, passedOutYear: '' })); // Clear error if valid
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, passedOutYear: 'Year must be exactly 4 digits.' }));
            }
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, passedOutYear: 'Please enter valid year' }));
        }
    };

    const handleRatingChange = (e, name) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [name]: parseInt(e.target.value, 10)
        }));
        setRatingErrors(prevErrors => ({
            ...prevErrors,
            [name]: '' // Clear the error once a rating is selected
        }));
    };

    const Parentsfeedbacksubmit = async (event) => {
        event.preventDefault();

        const isNameValid = validateName(studentName);
        const areRatingsValid = validateRatings();

        if (!isNameValid || !areRatingsValid || registerNumberError) {
            return;
        }

        try {
            const response = await axios.post('/api/parentsfeedbacksubmit', {
                student_name: studentName,
                register_number: registerNumber,
                branch: branch,
                programme: programme,
                passed_out_year: passedOutYear,
                ratings: ratings
            });

            console.log(response.data);
            alert("Feedback submitted successfully");
            setStudentName('');
            setRegisterNumber('');
            setBranch('');
            setPassedOutYear('');
            setProgramme(''); // Reset programme field
            setRatings({});
            setRatingErrors({});
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while submitting your ratings");
        }
    };

    return (
        <div className='parents_fb_container'>
            <Underline heading="Parent's Feedback" />
            <form className='parents_fb_form' onSubmit={Parentsfeedbacksubmit}>
                <div className='parents_fb_row'>
                    <input 
                        type="text" 
                        className='parents_fb_input' 
                        placeholder='Enter Name of student*' 
                        value={studentName}
                        onChange={handleNameChange}
                        required 
                    />
                    <input 
                        type="text" 
                        className='parents_fb_input' minLength={7} maxLength={11}
                        placeholder='Enter Student Register number*' 
                        value={registerNumber}
                        onChange={handleRegisterNumberChange}
                        required 
                    />
                </div>
                {nameError && <p className='parents_fb_error'>{nameError}</p>}
                {registerNumberError && <p className='parents_student_fb_error'>{registerNumberError}</p>}

                <div className='parents_fb_row'>
                    <select
                        className='parents_fb_input' 
                        placeholder='Select Branch*' 
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Department*</option>
                        <option value="civil">Civil</option>
                        <option value="mech">Mech</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="CSE">CSE</option>
                    </select>
                    <input 
                        type="text" 
                        className='parents_fb_input' 
                        placeholder='Enter Passed Out Year*' 
                        value={passedOutYear}
                        onChange={handlePassedOutYearChange}
                        required
                    />
                </div>
                
                {errors.passedOutYear && <p className='parents_year_of_joining_container'>{errors.passedOutYear}</p>}

                <div className='parents_fb_row'>
                    <select 
                        className="parents_fb_select" 
                        value={programme} 
                        onChange={handleProgrammeChange} 
                        required
                    >
                        <option value="" disabled>Select Programme*</option>
                        <option value="BE">B.E</option>
                        <option value="ME">M.E</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>

                <h2 className="parents_fb_subtitle">Please give your valuable feedback on a scale</h2>
                <div className='parents_fb_feedback'>
                    <p className='parents_fb_instruction'>5 - Excellent   4 - Satisfied   3 - Good   2 - Not Satisfied   1 - Poor</p>
                    <br />
                    {parentFeedbackQuestions.map(({ question, translation, name }) => (
                        <div className="parents_fb_question" key={name}>
                            <p>{question}</p>
                            <p>({translation})</p>
                            <div className="parents_fb_ratings">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <label key={num}>
                                        <input 
                                            type="radio" 
                                            name={name} 
                                            value={num} 
                                            onChange={(e) => handleRatingChange(e, name)} 
                                            checked={ratings[name] === num} 
                                         
                                        />
                                        <span className="parent_custom-radio">{num}</span>
                                    </label>
                                ))}
                            </div>
                            {ratingErrors[name] && <p className='parents_fb_error'>{ratingErrors[name]}</p>}
                        </div>
                    ))}
                </div>
                <div className="parents_fb_btn">
                    <button type="submit" className="parents_fb_submit">Submit</button>
                </div>
            </form>
            <Backtotop />
        </div>
    );
};

export default ParentsFeedback;
