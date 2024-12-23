import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FeedbackPdf.css';
import { Underline, Alertmessage } from '../../widgets';

const FeedbackPdf = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [auth, setAuth] = useState(true);  // Assuming the user is initially authenticated
  const [message, setMessage] = useState('');
  const [reg, setReg] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleDownloadPdf = async () => {
    if (!selectedOption) {
      setAlertMessage('Please select an option to download the PDF.');
      return;
    }

    try {
      const response = await axios.post('/api/generate_pdf', { option: selectedOption }, {
        responseType: 'blob', // Ensure the response is treated as a blob
      });

      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${selectedOption}-feedback.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove(); // Clean up and remove the link element

        setAlertMessage('File generated and downloaded successfully!');
        setSelectedOption(''); // Clear the selection

        // Navigate to another page after showing the alert message
        setTimeout(() => {
          navigate('/admin-panel'); // Update with the correct path if needed
        }, 2000); // Adjust the delay as needed
      } else {
        setAlertMessage('Failed to generate the file.');
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('An error occurred while generating the file. Please try again.');
    }
  };

  // Logout handler function
  const handleLogout = () => {
    axios.get('/backend/logout')
      .then((res) => {
        if (res.data.Status === 'Success') {
          setAuth(false); // User is logged out
          setReg(res.data.reg_no);
          navigate('/'); // Redirect to login or homepage
        } else {
          setMessage(res.data.Error);
        }
      })
      .catch((err) => {
        console.error('Error during logout:', err);
        setMessage('Logout failed. Please try again.');
      });
  };

  const handleCloseAlert = () => setAlertMessage('');

  return (
    <div>
      <div className='admin_head'><Underline heading="Admin panel" /></div>
      <div className="box-container">
        <h2 className="box-heading">Download Feedback</h2>
        <select
          className="box-dropdown"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option className='box-option' value="" disabled>Choose an option</option>
          <option className='box-option' value="alumni">Alumni Feedback</option>
          <option className='box-option' value="collaborator">Collaborator Feedback</option>
          <option className='box-option' value="consultancy">Consultancy Feedback</option>
          <option className='box-option' value="employee">Employee Feedback</option>
          <option className='box-option' value="faculty">Faculty Feedback</option>
          <option className='box-option' value="MiniProject">Mini project and Project Feedback</option>
          <option className='box-option' value="parents">Parents Feedback</option>
          <option className='box-option' value="Practical">Practical and Laboratory Feedback</option>
          <option className='box-option' value="supplier">Supplier Feedback</option>
          <option className='box-option' value="Technicalseminar">Technical seminar Feedback</option>
          <option className='box-option' value="teachingandlearning">Teaching and Learning Feedback</option>
        </select>
        <button type="button" onClick={handleDownloadPdf}>Download</button>
      </div>
      <div className='admin_logout_button'>
        <button type="button" onClick={handleLogout}>Log out</button>
      </div>
      <Alertmessage message={alertMessage} onClose={handleCloseAlert} />
      {
        !auth && (
          <div>
            <h3>{message}</h3>
            <Link to="/login-page">Login</Link>
          </div>
        )
      }
    </div>
  );
};

export default FeedbackPdf;
