import React, { useState } from "react";
import svg from "../../assets/pictures/forgetpassword_svg.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './Newpass.css'

const Newpass = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const regno = location.state && location.state.regno;

  const [new_password, setNew_password] = useState("");
  const [rep_password, setRep_password] = useState("");
  const [pswd_match_flag, setmatch_flag] = useState(false);
  const [strength, setStrength] = useState("");

  const password_strength = (pswd) => {
    const strongRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (strongRegex.test(pswd)) {
      setStrength("Strong");
    } else if (mediumRegex.test(pswd)) {
      setStrength("Medium");
    } else {
      setStrength("Weak");
    }
  };

  const pswd_match=(new_pass,rep_pass)=>{
    return new_pass===rep_pass
  }

  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      // setLoading(true);
      setmatch_flag(!pswd_match(new_password,rep_password))
      if (pswd_match(new_password,rep_password) && (strength === "Strong" || strength==="Medium")) {
        console.log("Reset")
        const response = await axios.post(
          "http://localhost:5002/api/reset-pswd",
          {
            regno: regno,
            password: new_password
          }
        );
        console.log(response.data);
        navigate("/login-page");
      }
    } catch (error) {
      console.error("Error:", error);
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
              <p className="pass-welcome-message">
                Please, create a new strong password
              </p>

              <form
                className="pass-form"
                method="POST"
                onSubmit={resetPassword}
              >
                {strength &&<div className="pass_strength">Password strength:&nbsp;
                {strength==="Strong" &&<span className="password_str">{strength}</span>}
                {strength==="Medium" &&<span className="password_med">{strength}</span>}
                {strength==="Weak" &&<span className="password_weak">{strength}</span>}
                </div>}
                <div className="form-control">
                  <input
                    className="pass-input"
                    autoComplete="new-password"
                    type="password"
                    placeholder="Create new Password"
                    value={new_password}
                    onChange={(e) => {
                      password_strength(e.target.value)
                      setNew_password(e.target.value)
                    }}
                    required
                  />
                  <i className="fa fa-lock"></i>
                </div>

                {pswd_match_flag &&<div className="pass_not_match">Passwords not matching!</div>}
                <div className="form-control">
                  <input
                    className="pass-input"
                    autoComplete="repeat-password"
                    type="password"
                    placeholder="Repeat Password"
                    value={rep_password}
                    onChange={(e) => setRep_password(e.target.value)}
                    required
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <button type="submit" className='pass-submit' >
                  Change Password
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

export default Newpass;
