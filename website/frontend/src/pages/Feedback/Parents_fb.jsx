import React, { useState } from 'react';
import './Parents_fb.css';
import { Backtotop, Underline, Alertmessage } from "../../widgets";
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
    const [alertMessage, setAlertMessage] = useState('');

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                name: 'Name should only contain letters and spaces.',
            }));
            return false;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, name: '' }));
            return true;
        }
    };

    const validateRatings = () => {
        const ratingErrors = {};
        parentFeedbackQuestions.forEach(({ name }) => {
            if (!ratings[name]) {
                ratingErrors[name] = 'Please select a rating (தயவுசெய்து மதிப்பீட்டை தேர்வு செய்யவும்)';
            }
        });
        setErrors(prevErrors => ({
            ...prevErrors,
            ratings: ratingErrors,
        }));
        return Object.keys(ratingErrors).length === 0;
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
            setErrors(prevErrors => ({ ...prevErrors, registerNumber: '' })); // Clear the error if valid
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                registerNumber: 'Register Number should only contain digits.',
            }));
        }
    };

    const handleBranchChange = (e) => setBranch(e.target.value);

    const handlePassedOutYearChange = (e) => {
        const value = e.target.value;
        setPassedOutYear(value);
        const date = new Date();
        if (value >= 1952 && value <= date.getFullYear()) {
            setErrors(prevErrors => ({ ...prevErrors, passedOutYear: '' })); // Clear error if valid
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                passedOutYear: 'Please enter a valid year.',
            }));
        }
    };

    const handleRatingChange = (e, name) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [name]: parseInt(e.target.value, 10),
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            ratings: {
                ...prevErrors.ratings,
                [name]: '', // Clear the error once a rating is selected
            },
        }));
    };
    const handleProgrammeChange = (e) => {
        setProgramme(e.target.value);
        setErrors(prevErrors => ({ ...prevErrors, programme: '' })); // Clear any previous errors
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
                ratings: ratings,
            });

            console.log(response.data);
            setAlertMessage("Feedback submitted successfully");
            setStudentName('');
            setRegisterNumber('');
            setBranch('');
            setPassedOutYear('');
            setProgramme(''); // Reset programme field
            setRatings({});
            setErrors({});
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
                        className='parents_fb_1st_input'
                        placeholder='Enter Name of student*'
                        value={studentName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                {errors.name && <p className='parents_fb_error'>{errors.name}</p>}
                <div className='parents_fb_row'>
                    <input
                        type="text"
                        className='parents_fb_1st_input' minLength={7} maxLength={11}
                        placeholder='Enter Student Register number*'
                        value={registerNumber}
                        onChange={handleRegisterNumberChange}
                        required
                    />
                </div>
                {errors.registerNumber && <p className='parents_fb_error'>{errors.registerNumber}</p>}

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
                        required maxLength={4}
                    />
                </div>
                {errors.passedOutYear && <p className='parents_fb_error'>{errors.passedOutYear}</p>}

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
                    <p className='parents_fb_instruction'>5 - Excellent  4 - Satisfied  3 - Good  2 - Not Satisfied  1 - Poor</p>
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
                            {errors.ratings && errors.ratings[name] && <p className='parents_fb_error'>{errors.ratings[name]}</p>}
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
