
import React ,{useState}from 'react'
import './Technical_fb.css'
import { Underline ,Backtotop} from '../../widgets'
import { technical_fb_data } from '../../constants/feedbackQuestions'
import axios from 'axios';

const Technical_fb = () => {
    const [programme, setProgramme] = useState('');
    const [semester, setSemester] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [faculty, setFaculty] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [ratings, setRatings] = useState({});
    const [ratingErrors, setRatingErrors] = useState({});
    const [nameError, setNameError] = useState('');
    const [semError, setSemError] = useState('');

    const validateName = (name) => {
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(name)) {
        setNameError('Name should only contain letters and spaces.');
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
        technical_fb_data.forEach(({ name }) => {
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
          const response = await axios.post('/api/std_technical_seminar_ratingsubmit', {
            programme:programme, semester:semester,course_title:courseTitle,course_code:courseCode,faculty:faculty,student_email:studentEmail,
            ratings: ratings
          });
          console.log(programme,semester);
          console.log(response.data);
          alert("Feedback submitted successfully");
    
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
          alert("An error occurred while submitting your ratings");
        }
    };

  return (
    <div className="technical_fb_container">
    <Underline heading="Technical Feedback"/>

    <form className="technical_fb_form" onSubmit={handleSubmit}>
    <div className="technical_fb_rows">

      <select className="technical_fb_select technical_fb_two_line" required value={programme} onChange={(e)=> setProgramme(e.target.value)}>
        <option value="" disabled selected>Select Programme*</option>
        <option value="BE">B.E</option>
        <option value="ME">M.E</option>
        <option value="PhD">PhD</option>
      </select>
      <input type="text" className ="technical_fb_input" placeholder='Semester*'  maxLength={1} required value={semester} onChange={(e)=>{handleSemChange(e)} }/>
    </div>
    <div className='std_technical_fb_sem_err'>
      {semError && <p >{semError}</p>}
    </div>
    <div className="technical_fb_rows">
     <input type="text" className='technical_fb_input_full' placeholder='Course Title*' required value={courseTitle} onChange={(e)=> setCourseTitle(e.target.value)}/>

    </div>

    <div className="technical_fb_rows">
        <input type="text" className='technical_fb_input technical_fb_two_line' placeholder='Course code*' required value={courseCode} onChange={(e)=> setCourseCode(e.target.value)}/>
        <input type="text" className='technical_fb_input' placeholder='Faculty*' required value={faculty} onChange={handleNameChange}/>
    </div>
    <div className='std_teachnical_seminar_fb_error'>
    {nameError && <p>{nameError}</p>}
    </div>

    <div className="technical_fb_rows">
        <input type="email" className='technical_fb_input_full'  placeholder=' Student E-mail Address*' required value={studentEmail} onChange={(e)=> setStudentEmail(e.target.value)}/>
    </div>
    <h2 className="technical_fb_subtitle">Please give your valuable feedback on a scale</h2>
    

  <div>  
  <p className='technical_fb_instruction'>5 - Excellent,  4 - Satisfied,   3 - Good,   2 - Not Satisfied,   1 - Poor</p>
  <br />
    {technical_fb_data.map(({ question, translation, name }) => (
                        <div className="ctechnical_fb_question" key={name}>
                            <p>{question}</p>
                            <p>{translation}</p>
                            <div className="technical_fb_data">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <label key={num}>
                                    <input type="radio" name={name} value={num} onChange={(e) => handleRatingChange(e, name)} checked={ratings[name] === num}/>
                                        <span className="custom-radio">{num}</span>
                                    </label>
                                ))}
                            </div>
                            {ratingErrors[name] && <p className='std_technical_fb_error'>{ratingErrors[name]}</p>}
                        </div>
                    ))}

        </div>
        <div className="technical_fb">
          <button type="submit" className="technical_fb_submit">
            Submit
          </button>
        </div>
    </form>
    <Backtotop />
    </div>
//    </div>
  )
}

export default Technical_fb

