import React, { useState } from 'react';
import './Passreset.css';
import svg from '../../assets/pictures/forgetpassword_svg.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Passreset = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();
  const handlePassres = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5002/api/send-otp', { regno:username,});
      console.log(response.data); 
      navigate('/password-otp',{state:{regno:username,}});
    } catch (error) {
      console.error('Error:', error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="pass-pagef">
        <div className="pass-page">
          <section className="pass-main">
            <div className="pass-container">
                  <p className="pass-title">Password Reset </p>
                  <div className="pass-separator"></div>
                  <p className="pass-welcome-message">Please, provide a valid username to receive OTP</p>
                
                <form className="pass-form" onSubmit={handlePassres}>
                  <div className="form-control">
                    <input
                      className="pass-input"
                      autoComplete="username"
                      type="text"
                      placeholder="Register No."
                      value={username}
                      required
                      onChange={(e) => setUsername(e.target.value.trim())}
                    />
                    <i className="fa fa-user"></i>
                  </div>
                  <button type="submit" className="pass-submit" disabled={loading}>
                    {loading ? 'Sending OTP...' : 'Send OTP'}
                  </button>
                </form>

                  <Link to="/login-page" className="forgot">
                    Remembered Password?
                  </Link>
  
            </div>
          </section>
          <section className="pass-side">
            <img src={svg} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Passreset;