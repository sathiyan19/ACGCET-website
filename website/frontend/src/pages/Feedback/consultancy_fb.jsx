import React, { useState } from 'react';
import './Consultancy_fb.css';
import { Backtotop, Underline,Alertmessage } from "../../widgets";
import { consultancyFeedbackQuestions } from "../../constants/feedbackQuestions";
import axios from 'axios';

const Consultancy_fb = () => {
  const [department, setDepartment] = useState('');
  const [companyOffering, setCompanyOffering] = useState('');
  const [natureOfWork, setNatureOfWork] = useState('');
  const [dateOfCommencement, setDateOfCommencement] = useState('');
  const [programme, setProgramme] = useState('');
  const [ratings, setRatings] = useState({});
  const [ratingErrors, setRatingErrors] = useState({});
  const [dateError, setDateError] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const validateDate = (dateVal) => {
    const currDate=new Date();
    const date=new Date(dateVal);
    return date<=currDate; 
  };

  const validateRatings = () => {
    const errors = {};
    consultancyFeedbackQuestions.forEach(({ name }) => {
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
      [name]: e.target.value
    }));
    setRatingErrors(prevErrors => ({
      ...prevErrors,
      [name]: '' // Clear the error once a rating is selected
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    const isDateValid = true;
    // const isDateValid = validateDate(dateOfCommencement);
    
    const areRatingsValid = validateRatings();

    if (!isDateValid) {
      setDateError('Please enter a valid date.');
      return;
    } else {
      setDateError('');
    }

    if (!areRatingsValid) {
      return;
    }
alert(dateOfCommencement);

    try {
      const response = await axios.post('/api/consultancy_ratingsubmit', {
        work_undertaking_dept: department,
        company_offering: companyOffering,
        nature_of_work: natureOfWork,
        date_of_commencement: dateOfCommencement,
        programme: programme,
        ratings: ratings
      });

      console.log(response.data);
      setAlertMessage("Feedback submitted successfully");

      // Clear the form after submission
      setDepartment('');
      setCompanyOffering('');
      setNatureOfWork('');
      setDateOfCommencement('');
      setProgramme('');
      setRatings({});
      setRatingErrors({});
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage("An error occurred while submitting your ratings");
    }
  };
  const handleCloseAlert = () => setAlertMessage('');

  return (
    <div className="consultancy_fb_container">
      <Underline heading="Consultancy Feedback" />

      <form className="consultancy_fb_form" onSubmit={handleSubmit}>
        <div className="consultancy_fb_row">
          <select className="consultancy_fb_select" required onChange={(e) => setDepartment(e.target.value)} value={department}>
            <option value="" disabled selected>Department Undertaking the work*</option>
            <option value="Civil">Civil</option>
            <option value="Mechanical">Mechanical</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="CSE">CSE</option>
            <option value="Others">Others</option>
          </select>
          <input type="text" className="consultancy_fb_input" placeholder="Company Offering Consultancy*" required onChange={(e) => setCompanyOffering(e.target.value)} value={companyOffering} />
        </div>
        <div className='consultancy_fb_row'>
          <select className="consultancy_fb_input" required onChange={(e) => setNatureOfWork(e.target.value)} value={natureOfWork}>
            <option value="" disabled selected>Nature of Work*</option>
            <option value="Testing">Testing</option>
            <option value="Fabrication">Fabrication</option>
            <option value="TroubleShootingAndServices">Trouble Shooting and Services</option>
            <option value="EducationalServices">Educational Services</option>
            <option value="Auditing">Auditing</option>
            <option value="Software Development">Software Development</option>
            <option value="Debugging and Testing">Debugging and Testing</option>
            <option value="Others">Others</option>
          </select>
          <input 
            type="text" 
            className="consultancy_fb_input" 
            placeholder="Date of Commencement*(YYYY-MM-DD)" 
            required 
            value={dateOfCommencement} 
            onChange={(e) => setDateOfCommencement(e.target.value)} 
          />
          {dateError && <p className='consultancy_fb_error' id='consultancy_date_err'>{dateError}</p>}
        </div>
        <div className="consultancy_fb_row">
          <select className="consultancy_fb_select_sl" required onChange={(e) => setProgramme(e.target.value)} value={programme}>
            <option value="" disabled selected>Select Programme*</option>
            <option value="BE">B.E</option>
            <option value="ME">M.E</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <h2 className="consultancy_fb_subtitle">Please give your valuable feedback on a scale</h2>
        <div className="consultancy_fb_feedback">
          <br />

          {consultancyFeedbackQuestions.map(({ question, translation, name }) => (
            <div className="consultancy_fb_question" key={name}>
              <div className="consultancy_fb_qr">
                <p className='consultancy_fb_qr_p'>{question}</p>  
                <p className='consultancy_fb_qr_p'>({translation})</p>
              </div>

              <div className="consultancy_fb_ratings">
                {['Low', 'Medium', 'High'].map((label, index) => (
                  <label key={index}>
                    <input type="radio" name={name} value={label.toLowerCase()} onChange={(e) => handleRatingChange(e, name)} />
                    <span className="consultancy-custom-radio"></span>
                    {label}
                  </label>
                ))}
              </div>
              {ratingErrors[name] && <p className='consultancy_fb_error'>{ratingErrors[name]}</p>}
            </div>
          ))}
        </div>

        <div className="consultancy_fb_btn">
          <button type="submit" className="consultancy_fb_submit">
            Submit
          </button>
        </div>
      </form>
      <Backtotop />
      <Alertmessage message={alertMessage} onClose={handleCloseAlert} /> 
    </div>
  );
};

export default Consultancy_fb;
