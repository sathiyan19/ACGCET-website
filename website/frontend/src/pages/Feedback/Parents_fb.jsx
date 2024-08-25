import React, { useState } from 'react';
import './Parents_fb.css';
import { Backtotop, Underline,Alertmessage} from "../../widgets";
import { parentFeedbackQuestions } from "../../constants/feedbackQuestions";
import axios from 'axios';

const ParentsFeedback = () => {
    const [studentName, setStudentName] = useState('');
    const [registerNumber, setRegisterNumber] = useState('');
    const [branch, setBranch] = useState('');
    const [programme, setProgramme] = useState('');
    const [passedOutYear, setPassedOutYear] = useState('');
    const [ratings, setRatings] = useState({});
    const [nameError, setNameError] = useState('');
    const [ratingErrors, setRatingErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');

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

    const handleRegisterNumberChange = (e) => setRegisterNumber(e.target.value);
    const handleBranchChange = (e) => setBranch(e.target.value);
    const handleProgrammeChange = (e) => setProgramme(e.target.value);
    const handlePassedOutYearChange = (e) => setPassedOutYear(e.target.value);

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

        if (!isNameValid || !areRatingsValid) {
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
           setAlertMessage("Feedback submitted successfully");
            setStudentName('');
            setRegisterNumber('');
            setBranch('');
            setPassedOutYear('');
            setProgramme(''); // Reset programme field
            setRatings({});
            setRatingErrors({});
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage("An error occurred while submitting your ratings");
        }
    };
    const handleCloseAlert = () => setAlertMessage('');


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
                        className='parents_fb_input' 
                        placeholder='Enter Student Register number*' 
                        value={registerNumber}
                        onChange={handleRegisterNumberChange}
                        required 
                    />
                </div>
                {nameError && <p className='parents_fb_error'>{nameError}</p>}

                <div className='parents_fb_row'>
                    <input 
                        type="text" 
                        className='parents_fb_input' 
                        placeholder='Enter Branch*' 
                        value={branch}
                        onChange={handleBranchChange}
                        required 
                    />
                    <input 
                        type="text" 
                        className='parents_fb_input' 
                        placeholder='Enter Passed Out Year*' 
                        value={passedOutYear}
                        onChange={handlePassedOutYearChange}
                        required 
                    />
                </div>

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
                                            required 
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
            <Alertmessage message={alertMessage} onClose={handleCloseAlert} /> 
        </div>
    );
};

export default ParentsFeedback;