import React, { useState } from "react";
import svg from "../../assets/pictures/forgetpassword_svg.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Newpass = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const regno = location.state && location.state.regno;

  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5002/api/reset-pswd", {
        regno: regno,
      });
      console.log(response.data);
      navigate("/login-page");
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

              <form className="pass-form" method="POST" onSubmit={resetPassword}>
                <div className="form-control">
                  <input
                    className="pass-input"
                    autoComplete="new-password"
                    type="password"
                    placeholder="Create new Password"
                    required
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <div className="form-control">
                  <input
                    className="pass-input"
                    autoComplete="repeat-password"
                    type="password"
                    placeholder="Repeat Password"
                    required
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <button type="submit" className="pass-submit">
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
