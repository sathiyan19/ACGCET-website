import React, { useState } from 'react';
import './Alumini_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { AlumniFeedbackQuestions } from "../../constants/feedbackQuestions";
import axios from 'axios';

const Alumni_fb = () => {
    // State management
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [programme, setProgramme] = useState('');
    const [department, setDepartment] = useState('');
    const [passedOutYear, setPassedOutYear] = useState('');
    const [higherStudies, setHigherStudies] = useState('');
    const [institution, setInstitution] = useState('');
    const [competitiveExam, setCompetitiveExam] = useState('');
    const [examName, setExamName] = useState('');
    const [company, setCompany] = useState('');
    const [entryLevelPosition, setEntryLevelPosition] = useState('');
    const [currentPosition, setCurrentPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [achievements, setAchievements] = useState('');
    const [serviceStatus, setServiceStatus] = useState('');
    const [city, setCity] = useState('');
    const [ratings, setRatings] = useState({});
    const [errors, setErrors] = useState({});
    const [nameError, setNameError] = useState('');
    const [ratingErrors, setRatingErrors] = useState({});

    // Validation
    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!designation) newErrors.designation = 'Designation is required';
        if (!programme) newErrors.programme = 'Programme is required';
        if (!department) newErrors.department = 'Department is required';
        if (!passedOutYear) newErrors.passedOutYear = 'Passed out year is required';

        AlumniFeedbackQuestions.forEach(({ name }) => {
            if (!ratings[name]) {
                newErrors[name] = 'Please select a rating (தயவுசெய்து மதிப்பீட்டை தேர்வு செய்யவும்)';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

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
        AlumniFeedbackQuestions.forEach(({ name }) => {
          if (!ratings[name]) {
            errors[name] = 'Please select a rating (தயவுசெய்து மதிப்பீட்டை தேர்வு செய்யவும்)';
          }
        });
        setRatingErrors(errors);
        return Object.keys(errors).length === 0;
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
  
  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
    
    validateName(name);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const isNameValid = validateName(name);
    const areRatingsValid = validateRatings();


    if (!isNameValid || !areRatingsValid) {
        return;
      }
        const isFormValid = validateForm();

        if (!isFormValid) {
            return;
        }

        try {
          const response = await axios.post('/api/alumnifeedback', {
            name,
            designation,
            programme,
            department,
            passedOutYear,
            higherStudies: higherStudies || null,
            institution: institution || null,
            competitiveExam: competitiveExam || null,
            examName: examName || null,
            company: company || null,
            entryLevelPosition: entryLevelPosition || null,
            currentPosition: currentPosition || null,
            responsibilities: responsibilities || null,
            achievements: achievements || null,
            serviceStatus: serviceStatus || null,
            city: city || null,
            ratings
        });
        
        
            

            console.log(response.data);
            alert("Feedback submitted successfully");
            // Clear form
            setName('');
            setDesignation('');
            setProgramme('');
            setDepartment('');
            setPassedOutYear('');
            setHigherStudies('');
            setInstitution('');
            setCompetitiveExam('');
            setExamName('');
            setCompany('');
            setEntryLevelPosition('');
            setCurrentPosition('');
            setResponsibilities('');
            setAchievements('');
            setServiceStatus('');
            setCity('');
            setRatings({});
            setErrors({});
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while submitting your feedback");
        }
    };

    return (
        <div className="alumni_fb_container">
            <div className="alumni_fb_udl">
                <Underline heading="Alumni Feedback"/>
            </div>
            <form className="alumni_fb_form" onSubmit={handleSubmit}>
                <div className="alumni_fb_row">
                    <input
                        type="text"
                        className="alumni_fb_input alumni_fb_input_lgrow"
                        placeholder="Enter Name of the Alumni*"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                   {nameError && <p className='alumni_fb_error'>{nameError}</p>}
                   {errors.designation && <p className='alumni_fb_error'>{errors.designation}</p>}

                    <input
                        type="text"
                        className="alumni_fb_input "
                        placeholder="Enter Designation*"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    />
                     
                </div>
                <div className="alumni_fb_row">
                    <select
                        className="alumni_fb_select"
                        value={programme}
                        onChange={(e) => setProgramme(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Programme*</option>
                        <option value="BE">B.E</option>
                        <option value="ME">M.E</option>
                        <option value="PhD">PhD</option>
                    </select>
                    {errors.programme && <p className='alumni_fb_error'>{errors.programme}</p>}
                    <select
                        className="alumni_fb_select"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Department*</option>
                        <option value="civil">Civil</option>
                        <option value="mech">Mech</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="CSE">CSE</option>
                    </select>
                    {errors.department && <p className='alumni_fb_error'>{errors.department}</p>}
                </div>
                <div className="alumni_fb_row">
    <input
        type="text"
        className="alumni_fb_input"
        placeholder="Enter passed out year*"
        value={passedOutYear}
        onChange={(e) => {
            const value = e.target.value;

            // Check if the input contains only digits and is at most 4 characters long
            if (/^\d{0,4}$/.test(value)) {
                setPassedOutYear(value);

                // Validate if the input has exactly 4 digits
                if (value.length === 4) {
                    setErrors((prevErrors) => ({ ...prevErrors, passedOutYear: '' })); // Clear error if valid
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, passedOutYear: 'Please enter valid year' }));
                }
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, passedOutYear: 'Please enter valid year' }));
            }
        }}
        required
    />
   
</div>

{errors.passedOutYear && <p className='alumni_fb_error'>{errors.passedOutYear}</p>}
<h2 className="alumni_fb_subtitle">Details of Higher Studies</h2>
                <div className="alumni_fb_row">
                    <select
                        className="alumni_fb_select"
                        value={higherStudies}
                        onChange={(e) => setHigherStudies(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select whether you did any higher studies</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <input
                        type="text"
                        className="alumni_fb_input "
                        placeholder="Name of the institution (Optional)"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                    />
                </div>

                <h2 className="alumni_fb_subtitle">Details of Competitive Exams</h2>
                <div className="alumni_fb_row">
                    <select
                        className="alumni_fb_select"
                        value={competitiveExam}
                        onChange={(e) => setCompetitiveExam(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select whether you wrote any competitive exam</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <input
                        type="text"
                        className="alumni_fb_input"
                        placeholder="Name of the Examination (Optional)"
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                    />
                </div>

                <h2 className="alumni_fb_subtitle">Career Path</h2>
                <div className="alumni_fb_row">
                    <input
                        type="text"
                        className="alumni_fb_input"
                        placeholder="Name of the Company (Optional)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div className="alumni_fb_row">
                    <input
                        type="text"
                        className="alumni_fb_input alumni_fb_input_lgrow"
                        placeholder="Position at Entry Level (Optional)"
                        value={entryLevelPosition}
                        onChange={(e) => setEntryLevelPosition(e.target.value)}
                    />
                    <input
                        type="text"
                        className="alumni_fb_input"
                        placeholder="Enter your Current Position (Optional)"
                        value={currentPosition}
                        onChange={(e) => setCurrentPosition(e.target.value)}
                    />
                </div>
                <div className="alumni_fb_row">
                    <input
                        type="text"
                        className="alumni_fb_input alumni_fb_input_lgrow"
                        placeholder="Responsibilities held (Optional)"
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                    />
                    <input
                        type="text"
                        className="alumni_fb_input"
                        placeholder="Achievements/ Awards (Optional)"
                        value={achievements}
                        onChange={(e) => setAchievements(e.target.value)}
                    />
                </div>

                <div className="alumni_fb_row">
                    <select
                        className="alumni_fb_select"
                        value={serviceStatus}
                        onChange={(e) => setServiceStatus(e.target.value)}
                    >
                        <option value="" disabled>Select whether you are inservice or retired</option>
                        <option value="employed">Inservice</option>
                        <option value="not_employed">Retired</option>
                    </select>
                </div>

                <div className="alumni_fb_row">
                    <input
                        type="text"
                        className="alumni_fb_input"
                        placeholder="Enter City of Residence (Optional)"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <h2 className="alumni_fb_subtitle">Please give your valuable feedback on a scale</h2>
                <div className='alumni_fb_feedback'>
                    <p className='alumni_fb_instruction'>5 - Excellent   4 - Satisfied   3 - Good   2 - Not Satisfied   1 - Poor</p>
                    <br />
                    {AlumniFeedbackQuestions.map(({ question, translation, name }) => (
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
                </div>
                <div className="alumni_fb_btn">
                    <button type="submit" className="alumni_fb_submit">Submit</button>
                </div>
            </form>
            <Backtotop />
        </div>
    );
};

export default Alumni_fb;
