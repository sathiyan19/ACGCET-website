import React, { useState } from 'react';
import './Employer_fb.css';
import { Backtotop, Underline } from "../../widgets";
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
    const [errors, setErrors] = useState({});
    const [nameError, setNameError] = useState({ hrName: '', studentName: '' });
    const [ratingErrors, setRatingErrors] = useState({});

    const validateName = (name, type) => {
        const nameRegex = /^[A-Za-z\s]{2,30}$/;
        if (!nameRegex.test(name)) {
            setNameError(prevErrors => ({
                ...prevErrors,
                [type]: 'Name should only contain letters and spaces, and be 2 to 30 characters long.'
            }));
            return false;
        } else {
            setNameError(prevErrors => ({
                ...prevErrors,
                [type]: ''
            }));
            return true;
        }
    };

    const validateRatings = () => {
        const errors = {};
        employerFeedbackQuestions.forEach(({ name }) => {
            if (!ratings[name]) {
                errors[name] = 'Please select a rating (தயவுசெய்து மதிப்பீட்டை தேர்வு செய்யவும்)';
            }
        });
        setRatingErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleHrNameChange = (e) => {
        const name = e.target.value;
        setHrName(name);
        validateName(name, 'hrName');
    };

    const handleStudentNameChange = (e) => {
        const name = e.target.value;
        setStudentName(name);
        validateName(name, 'studentName');
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

    const handleYearOfJoiningChange = (e) => {
        const value = e.target.value;

        // Check if the input contains only digits and is at most 4 characters long
        if (/^\d{0,4}$/.test(value)) {
            setYearOfJoining(value);

            // Validate if the input has exactly 4 digits
            if (value.length === 4) {
                setErrors(prevErrors => ({ ...prevErrors, yearOfJoining: '' })); // Clear error if valid
            } else {
                setErrors(prevErrors => ({ ...prevErrors, yearOfJoining: 'Year must be exactly 4 digits.' }));
            }
        } else {
            setErrors(prevErrors => ({ ...prevErrors, yearOfJoining: 'Please enter only 4 digits .' }));
        }
    };

    const EmployeeFeedbackSubmit = async (event) => {
        event.preventDefault();

        const isHrNameValid = validateName(hrName, 'hrName');
        const isStudentNameValid = validateName(studentName, 'studentName');
        const areRatingsValid = validateRatings();

        if (!isHrNameValid || !isStudentNameValid || !areRatingsValid) {
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
                ratings: ratings // Spread ratings directly
            });

            console.log(response.data);
            alert("Feedback submitted successfully");
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
            setNameError({ hrName: '', studentName: '' }); // Clear name errors on successful submission
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while submitting your feedback");
        }
    };

    return (
        <div className='employer_fb_container'>
            <Underline heading="Employer Feedback" />
            <form className='employer_fb_form' onSubmit={EmployeeFeedbackSubmit}>
                {/* <div className='employer_fb_row'> */}
                    <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Name of the HR*' 
                        value={hrName}
                        onChange={handleHrNameChange} // Use the HR name change handler
                        required 
                    />
                    </div>
                    {nameError.hrName && <p className='employer_fb_error'>{nameError.hrName}</p>}
                    <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Name of the company*' 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required 
                    />
                    </div>
                {/* </div> */}
               
                <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input_full' 
                        placeholder='Address of the company' 
                        value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                    />
                </div>
                {/* <div className='employer_fb_row'> */}
                <div className='employer_fb_row'>
                    <input 
                        type="text" 
                        className='employer_fb_input' 
                        placeholder='Name of the student*' 
                        value={studentName}
                        onChange={handleStudentNameChange} // Use the student name change handler
                        required 
                    />
                    </div>
                    {nameError.studentName && <p className='employer_fb_error'>{nameError.studentName}</p>}
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
                {/* </div> */}
               
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
                        onChange={handleYearOfJoiningChange} // Use the year of joining change handler
                        required
                    />
                   
                </div>
                
                {errors.yearOfJoining && <p className='employer_year_of_joining_container'>{errors.yearOfJoining}</p>}
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
                    <textarea 
                        className='employer_fb_textarea' 
                        placeholder='Responsibilities held' 
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                    />
                </div>
                <div className='employer_fb_row'>
                    <textarea 
                        className='employer_fb_textarea' 
                        placeholder='Achievements/Awards' 
                        value={achievements}
                        onChange={(e) => setAchievements(e.target.value)}
                    />
                </div>
                {employerFeedbackQuestions.map(({ question, translation, name }) => (
                        <div className="alumni_fb_question" key={name}>
                            <p>{question}</p>
                            <p>({translation})</p>
                            <div className="alumni_fb_ratings">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <label key={num}>
                                        <input 
                                            type="radio" 
                                            name={name} 
                                            value={num} 
                                            onChange={(e) => handleRatingChange(e, name)} 
                                            checked={ratings[name] === num} 
                                        />
                                        <span className="custom-radio">{num}</span>
                                    </label>
                                ))}
                            </div>
                            {ratingErrors[name] && <p className='alumni_fb_error'>{ratingErrors[name]}</p>}
                        </div>
                    ))}
                <div className="employer_fb_btn">
                    <button type="submit" className="alumni_fb_submit">Submit</button>
                </div>
            </form>
            <Backtotop />
        </div>
    );
};

export default EmployeeFeedback;
