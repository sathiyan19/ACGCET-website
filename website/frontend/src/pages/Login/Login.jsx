import React from 'react';
import './Login.css';
import svg from '../../assets/pictures/login_svg.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Login = () => {
  return (
    <div className="login-pagef">
    <div className='login-page'>
      <section className="login-side">
        <img src={svg} alt="" />
      </section>

      <section className="login-main">
        <div className="login-container">
          <p className="login-title">Welcome </p>
          <div className="login-separator"></div>
          <p className="login-welcome-message">
            Please, provide the valid login credentials to sign in 
          </p>

          <form className="login-form">
            <div className="form-control">
              <input className='login-input' type="text" placeholder="Username" />
              <i className="fa fa-user"></i>
            </div>
            <div className="form-control">
              <input className='login-input' type="password" placeholder="Password" />
              <i className="fa fa-lock"></i>
            </div>

            <button className="login-submit">Login</button>
          </form>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Login;
