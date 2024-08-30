import React, { useState } from 'react';
import React, { useState } from 'react';
import './Employer_fb.css';
import { Backtotop, Underline, Alertmessage} from "../../widgets";
import { employerFeedbackQuestions } from "../../constants/feedbackQuestions";
import axios from 'axios';

const EmployeeFeedback = () => {
    const [hrName, setHrName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [studentName, setStudentName] = useState('');
    const [programme, setProgramme] = useState('');
    const [branch, setBranch] = useState('');
    const [yearOfJoining, setYearOfJoining] = useState('');
    const [entryLevelPosition, setEntryLevelPosition] = useState('');
    const [currentPosition, setCurrentPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [achievements, setAchievements] = useState('');
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
        employerFeedbackQuestions.forEach(({ name }) => {
            if (!ratings[name]) {
                errors[name] = 'Please select a rating';
            }
        });
        setRatingErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNameChange = (e, setter) => {
        const name = e.target.value;
        setter(name);
        validateName(name);
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

    const EmployeeFeedbackSubmit = async (event) => {
        event.preventDefault();

        const isNameValid = validateName(hrName) && validateName(studentName);
        const areRatingsValid = validateRatings();

        if (!isNameValid || !areRatingsValid) {
            return;
        }
        

        try {
            const response = await axios.post('/api/employeefeedbacksubmit', {
                hr_name: hrName,
                company_name: companyName,
                company_address: companyAddress,
                student_name: studentName,
                programme: programme,
                branch: branch,
                year_of_joining: yearOfJoining,
                entry_level_position: entryLevelPosition,
                current_position: currentPosition,
                responsibilities: responsibilities,
                achievements_awards: achievements,
                ratings: ratings
            });
            
            console.log(response.data);
            setAlertMessage("Feedback submitted successfully");
            setHrName('');
            setCompanyName('');
            setCompanyAddress('');
            setStudentName('');
            setProgramme('');
            setBranch('');
            setYearOfJoining('');
            setEntryLevelPosition('');
            setCurrentPosition('');
            setResponsibilities('');
            setAchievements('');
            setRatings({});
            setRatingErrors({});
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setAlertMessage("An error occurred while submitting your feedback");
        }    
    };
    const handleCloseAlert = () => setAlertMessage('');
    return (
        <div className='employer_fb_container'>
            <Underline heading="Employer Feedback" />
            <form className='employer_fb_form' onSubmit={EmployeeFeedbackSubmit}>
                <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Name of the HR*' 
                        value={hrName}
                        onChange={(e) => handleNameChange(e, setHrName)}
                        required 
                    />
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Name of the company*' 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required 
                    />
                    {nameError && <p className="error">{nameError}</p>}

                </div>
                <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input_full' 
                        placeholder='Address of the company' 
                        value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                    />
                </div>
                <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Name of the student*' 
                        value={studentName}
                        onChange={(e) => handleNameChange(e, setStudentName)}
                        required 
                    />
                    <select 
                       className='employer_fb_input' 
                       value={programme} 
                       onChange={(e) => setProgramme(e.target.value)} 
                       required
                    >
                        <option value="" disabled>Select Programme*</option>
                        <option value="BE">B.E</option>
                        <option value="ME">M.E</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>

                <div className='employer_fb_row'>
                <select 
                       className='employer_fb_input' 
                       value={branch} 
                       onChange={(e) => setBranch(e.target.value)} 
                       required
                    >
                        <option value="" disabled>Select Branch*</option>
                        <option value="civil">Civil</option>
                        <option value="Mech">Mech</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="CSE">CSE</option>
                        
                    </select>
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Year of joining the company*' 
                        value={yearOfJoining}
                        onChange={(e) => setYearOfJoining(e.target.value)}
                        required 
                    />
                </div>

                <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Position at the entry level' 
                        value={entryLevelPosition}
                        onChange={(e) => setEntryLevelPosition(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Current position' 
                        value={currentPosition}
                        onChange={(e) => setCurrentPosition(e.target.value)}
                    />
                </div>

                <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Responsibilities held' 
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Achievements/Awards' 
                        value={achievements}
                        onChange={(e) => setAchievements(e.target.value)}
                    />
                </div>

                <h2 className="employer_fb_subtitle">Please give your valuable feedback on a scale</h2>
                <div className='employer_fb_feedback'>
                    <p className='employer_fb_instruction'>5 - Excellent   4 - Satisfied   3 - Good   2 - Not Satisfied   1 - Poor</p>
                    <br />
                    {employerFeedbackQuestions.map(({ question, translation, name }) => (
                        <div className="employer_fb_question" key={name}>
                            <p>{question}</p>
                            <p>({translation})</p>
                            <div className="employer_fb_ratings">
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
                                        <span className="custom-radio">{num}</span>
                                    </label>
                                ))}
                            </div>
                            {ratingErrors[name] && <p className='employer_fb_error'>{ratingErrors[name]}</p>}
                        </div>
                    ))}
                </div>
                <div className="employer_fb_btn">
                    <button type="submit" className="employer_fb_submit">Submit</button>
                </div>
            </form>
            <Backtotop />
            <Alertmessage message={alertMessage} onClose={handleCloseAlert} /> 
        </div>
    );
};

export default EmployeeFeedback;