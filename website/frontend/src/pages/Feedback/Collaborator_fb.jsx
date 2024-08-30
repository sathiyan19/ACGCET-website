import React, { useEffect, useState } from 'react';
import "./Collaborator_fb.css";
import { Backtotop, Underline } from '../../widgets';
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

    useEffect(() => {
        document.title = 'ACGCET-Collaborator-Feedback';
    }, []);

    const validateRatings = () => {
        const errors = {};
        collaboratorFeedbackQustions.forEach(({ name }) => {
            if (!ratings[name]) {
                errors[name] = 'Please select a rating     (தயவுசெய்து மதிப்பீட்டை தேர்வு செய்யவும்)';
                // errors[name]='';
            }
        });
        setRatingErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNameChange = (e) => {
        const name = e.target.value;
        validateName(name);
        setAuthorityName(name);
      };

    const handleRatingChange = (e, name) => {
        setRatings(prevRatings => ({
          ...prevRatings,
          [name]: parseInt(e.target.value)
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
            project_name:projectName, funding_agency:fundingAgency,duration:duration,principal_invigilator:principalInvigilator,authority_name:authorityName,
            ratings: ratings
          });
    
          console.log(response.data);
          alert("Feedback submitted successfully");
    
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
          alert("An error occurred while submitting your ratings");
        }
    };

    return (
        <div className='collab_fb_body'>
            <Underline heading="Collaborator Feedback"></Underline>
            <form action="" className='collab_fb_form' onSubmit={handleSubmit}>
                <div className="collab_fb_row">
                    <input type="text" className="collab_fb_input" placeholder='Name of the project*'
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                     required />

                    <input type="text" className="collab_fb_input" placeholder='Funding Agency*' required
                    value={fundingAgency}
                    onChange={(e) => setFundingAgency(e.target.value)} />
                </div>

                <div className="collab_fb_row">
                    <input type="text" className='collab_fb_input' placeholder='Duration*' required 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}/>

                    <input type="text" className='collab_fb_input' placeholder='Principal Investigator' required value={principalInvigilator}
                    onChange={(e) => setPrincipalInvigilator(e.target.value)}
                    />
                </div>

                <div className="collab_fb_row">
                    <input type="text" className="collab_fb_input_lgrow" placeholder='Name of the authority' required value={authorityName} onChange={handleNameChange}/>
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
                                <input type="radio" name={name} value={num} onChange={(e) => handleRatingChange(e, name)} checked={ratings[name] === num} 
                                />
                                <span className="custom-radio">{num}</span>
                                </label>
                            ))}
                        </div>
                        {ratingErrors[name] && <p className='collab_fb_error'>{ratingErrors[name]}</p>}   
                        </div>
                    ))}
                </div>

                <div className="collab_fb_row">
                    <button type='summit' className='collab_fb_summit'> 
                        Submit
                    </button>
                </div>
                
            </form>
            <Backtotop />
        </div>
    );
};

export default Collaborator_fb;
