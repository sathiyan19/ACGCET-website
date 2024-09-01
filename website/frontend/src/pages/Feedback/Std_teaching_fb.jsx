import React, { useState } from 'react';
import './Std_teaching_fb.css';
import { Underline, Backtotop, Alertmessage } from '../../widgets';
import { std_teach_fb_data } from '../../constants/feedbackQuestions';
import axios from 'axios';

const Std_teaching_fb = () => {
    const [programme, setProgramme] = useState('');
    const [semester, setSemester] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [faculty, setFaculty] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [ratings, setRatings] = useState({});
    const [ratingErrors, setRatingErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [semError, setSemError] = useState('');

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
    const validateSem= (sem) => {
      const semRegex = /^[1-8]{1}$/;
      if (!semRegex.test(sem)) {
        setSemError('Enter valid semester');
        return false;
      } else {
        setSemError('');
        return true;
      }
    };

    const validateRatings = () => {
        const errors = {};
        std_teach_fb_data.forEach(({ name }) => {
            if (!ratings[name]) {
                errors[name] = 'Please select a rating (தயவுசெய்து மதிப்பீட்டை தேர்வு செய்யவும்)';
            }
        });
        setRatingErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNameChange = (e) => {
      const name = e.target.value;
      validateName(name);
      setFaculty(name);
    };
    const handleSemChange = (e) => {
      const sem = e.target.value;
      validateSem(sem);
      setSemester(sem);
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
        const isNameValid = validateName(faculty);
        const isSemValid = validateSem(semester);

        if (!areRatingsValid || !isNameValid || !isSemValid) {
            return;
        }

        try {
            const response = await axios.post('/api/std_teaching_ratingsubmit', {
                programme: programme,
                semester: semester,
                course_title: courseTitle,
                course_code: courseCode,
                faculty: faculty,
                student_email: studentEmail,
                ratings: ratings
            });
    
            console.log(response.data);
            setAlertMessage("Feedback submitted successfully");
    
            // Clear the form after submission
            setProgramme('');
            setSemester('');
            setCourseTitle('');
            setCourseCode('');
            setFaculty('');
            setStudentEmail('');
            setRatings({});
            setRatingErrors({});
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage("An error occurred while submitting your ratings");
        }
    };

    const handleCloseAlert = () => setAlertMessage('');

    return (
        <div className="std_teach_fb_container">
            <Underline heading="Teaching and Learning Feedback" />
            <form className="std_teach_fb_form" onSubmit={handleSubmit}>
                <div className="std_teach_fb_rows">
                    <input
                        type="text"
                        className="std_teach_fb_input stud_teach_fb_two_line"
                        placeholder='Programme*'
                        required
                        value={programme}
                        onChange={(e) => setProgramme(e.target.value)}
                    />
                    <input
                        type="text"
                        className="std_teach_fb_input"
                        placeholder='Semester*'
                        required
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                </div>
                <div className="std_teach_fb_rows">
                    <input
                        type="text"
                        className='std_teach_fb_input_full'
                        placeholder='Course Title*'
                        required
                        value={courseTitle}
                        onChange={(e) => setCourseTitle(e.target.value)}
                    />
                </div>
                <div className="std_teach_fb_rows">
                    <input
                        type="text"
                        className='std_teach_fb_input stud_teach_fb_two_line'
                        placeholder='Course code*'
                        required
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                    />
                    <input
                        type="text"
                        className='std_teach_fb_input'
                        placeholder='Faculty*'
                        required
                        value={faculty}
                        onChange={(e) => setFaculty(e.target.value)}
                    />
                </div>
                <div className="std_teach_fb_rows">
                    <input
                        type="email"
                        className='std_teach_fb_input_full'
                        placeholder='Student E-mail Address*'
                        required
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                    />
                </div>
                <div className="std_teach_fb_rating">
                    <p>Ratings: 5 – Excellent; 4 – Very Good; 3 – Good; 2 – Poor; 1 – Very Poor</p>
                </div>
                {std_teach_fb_data.map(({ question, translation, name }) => (
                    <div className="collab_fb_question" key={name}>
                        <p>{question}</p>
                        <p>{translation}</p>
                        <div className="std_teach_fb_data">
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
                        {ratingErrors[name] && <p className='std_teaching_fb_error'>{ratingErrors[name]}</p>}
                    </div>
                ))}
                <div className="std_teaching_fb">
                    <button type="submit" className="std_teaching_fb_submit">Submit</button>
                </div>
            </form>
            <Backtotop />
            <Alertmessage message={alertMessage} onClose={handleCloseAlert} />
        </div>
    );
};

export default Std_teaching_fb;
