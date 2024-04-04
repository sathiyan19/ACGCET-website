import React, { useRef, useState } from "react";
import "./Otp.css";
import { Link,useLocation, useNavigate } from "react-router-dom";
import svg from '../../assets/pictures/forgetpassword_svg.svg';
import axios from "axios";

const Otp = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const [loading,setLoading]=useState(false);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [otp_error,setOtp_error]=useState("");
  const email= location.state && location.state.email;
  const regno= location.state && location.state.regno;
  console.log(regno)
  const [otpValues,setOtpValues]=useState(["","","",""]);
  const handleOtpSubmit = async(e) => {
    e.preventDefault();
    const otp = otpValues.join("");
    console.log("Submitting OTP:", otp, "for email:", email);

    if(otp.length!==4){
        setOtp_error("Enter a valid OTP")
    }else{
        setOtp_error("");
        try{
          setLoading(true)
          const response=await axios.post("http://localhost:5002/api/validate-otp",{email,otp});
          if(response.data.success){
            console.log('Otp is valid');
            navigate('/password-create',{state:{regno:regno}})
          }
          else{
            console.log('otp is not valid')
            setOtp_error('invalid otp, please try again')
          }
        }catch(error){
            console.error('Failed to validate otp',error);
            setOtp_error('failed to validate otp. please try again');
          }finally{
            setLoading(false)
          }        
    }
    console.log("Entered OTP:", otp);
    
  };

  const handleInputChange = (index, e) => {
    const newValue = e.target.value;
    setOtpValues((prevValues) => {
      const newOtpValues = [...prevValues];
      newOtpValues[index] = newValue;
      return newOtpValues;
    });
    if (e.target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };
  return (
    <div>
      <div className="pass-pagef">
        <div className="pass-page">
          <section className="pass-main">
            <div className="pass-container">
            <p className="login-title">Password Recovery</p>
      <div className="login-separator"></div>
      <p className="login-welcome-message">
        OTP has been sent to your mail, Please check your mail
      </p>
      <form className="login-form" method="POST" onSubmit={handleOtpSubmit}>
        <div className="login-otp">
          <div id="log-inputs" className="log-inputs">
          {inputs.map((input, index) => (
    <input
      ref={input}
      key={index}
      className="log-input"
      inputMode="numeric"
      maxLength="1"
      value={otpValues[index]}
      onChange={(e) => handleInputChange(index, e)}
    />
  ))}
          </div>
        </div>
        {otp_error && <div className="otp_err_msg">{otp_error}</div>}
        <button className="login-submit" type="submit" onClick={handleOtpSubmit}>
          {loading ?'Verifying otp....': 'Verify OTP'}
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

export default Otp;