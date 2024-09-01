import React, { useEffect, useState } from 'react';
import "./Collaborator_fb.css";
import { Backtotop, Underline, Alertmessage } from '../../widgets';
import { collaboratorFeedbackQustions } from '../../constants/feedbackQuestions';
import axios from 'axios';

const Collaborator_fb = () => {
    const [projectName, setProjectName] = useState('');
    const [fundingAgency, setFundingAgency] = useState('');
    const [duration, setDuration] = useState('');
    const [principalInvigilator, setPrincipalInvigilator] = useState('');
    const [authorityName, setAuthorityName] = useState('');
    const [ratings, setRatings] = useState({});
    const [ratingErrors, setRatingErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');
    const [nameError, setNameError] = useState(''); // Add this state to track the name error

    useEffect(() => {
        document.title = 'ACGCET-Collaborator-Feedback';
    }, []);

    const validateRatings = () => {
        const errors = {};
        collaboratorFeedbackQustions.forEach(({ name }) => {
            if (!ratings[name]) {
                errors[name] = 'Please select a rating (தயவுசெய்து மதிப்பீட்டை தேர்வு செய்யவும்)';
            }
        });
        setRatingErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateName = (name) => {
        if (!name.trim()) {
            setNameError('Name of the authority is required');
            return false;
        } else {
            setNameError('');
            return true;
        }
    };

    const handleNameChange = (e) => {
        const name = e.target.value;
        validateName(name);
        setAuthorityName(name);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const areRatingsValid = validateRatings();
        const isNameValid = validateName(authorityName);

        if (!areRatingsValid || !isNameValid) {
            return;
        }
        
        try {
            const response = await axios.post('/api/collaborator_ratingsubmit', {
                project_name: projectName,
                funding_agency: fundingAgency,
                duration: duration,
                principal_invigilator: principalInvigilator,
                authority_name: authorityName,
                ratings: ratings
            });
    
            console.log(response.data);
            setAlertMessage("Feedback submitted successfully");
    
            // Clear the form after submission
            setProjectName('');
            setFundingAgency('');
            setDuration('');
            setPrincipalInvigilator('');
            setAuthorityName('');
            setRatings({});
            setRatingErrors({});
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage("An error occurred while submitting your ratings");
        }
    };

    const handleCloseAlert = () => setAlertMessage('');

    return (
        <div className='collab_fb_body'>
            <Underline heading="Collaborator Feedback"></Underline>
            <form action="" className='collab_fb_form' onSubmit={handleSubmit}>
                <div className="collab_fb_row">
                    <input
                        type="text"
                        className="collab_fb_input"
                        placeholder='Name of the project*'
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="collab_fb_input"
                        placeholder='Funding Agency*'
                        value={fundingAgency}
                        onChange={(e) => setFundingAgency(e.target.value)}
                        required
                    />
                </div>

                <div className="collab_fb_row">
                    <input
                        type="text"
                        className='collab_fb_input'
                        placeholder='Duration*'
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className='collab_fb_input'
                        placeholder='Principal Investigator*'
                        value={principalInvigilator}
                        onChange={(e) => setPrincipalInvigilator(e.target.value)}
                        required
                    />
                </div>

                <div className="collab_fb_row">
                    <input
                        type="text"
                        className="collab_fb_input_lgrow"
                        placeholder='Name of the authority*'
                        value={authorityName}
                        onChange={handleNameChange}
                        required
                    />
                    {nameError && <p className='collab_fb_name_error'>{nameError}</p>}
                </div>

                <h2 className="collab_fb_subheading">Please give your valuable feedback on a scale</h2>

                <div className="collab_fb_instructions">
                    5 - Very Good
                    4 - Good
                    3 - Fair
                    2 - Poor
                    1 - Very Poor
                </div>

                <div className="collab_fb_map">
                    {collaboratorFeedbackQustions.map(({ question, translation, name }) => (
                        <div className="collab_fb_question" key={name}>
                            <p>{question}</p>
                            <p>({translation})</p>
                            <div className="collab_fb_ratings">
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
                            {ratingErrors[name] && <p className='collab_fb_error'>{ratingErrors[name]}</p>}
                        </div>
                    ))}
                </div>

                <div className="collab_fb_btn">
                    <button type='submit' className='collab_fb_submit'> 
                        Submit
                    </button>
                </div>
            </form>
            <Backtotop />
            <Alertmessage message={alertMessage} onClose={handleCloseAlert} /> 
        </div>
    );
};

export default Collaborator_fb;
