import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Login.css";
import svg from "../../assets/pictures/login_svg.svg";
import axios from "axios";

axios.defaults.withCredentials = true;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usrerror, setUsrerror] = useState("");
  const [pswderror, setPswderror] = useState("");

  const navigate = useNavigate();

  const find_dept = (code) => {
    let dept;
    if (code === "11") {
      dept = "civil";
    } else if (code === "12") {
      dept = "mech";
    } else if (code === "13") {
      dept = "eee";
    } else if (code === "14") {
      dept = "ece";
    } else if (code === "15") {
      dept = "cse";
    }
    return dept;
  };

  const form_submit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    setUsername(username.trim());
    setPassword(password.trim());

    let uflag = 0,
      pflag = 0;
    try {
      console.log(username.length)
      if (username.length !==7 && username.length !==11) {
        console.log("inside")
        setUsrerror("Enter valid register number");
      } else {
        uflag = 1;
        setUsrerror("");
      }

      if (password.length === 0) {
        setPswderror("Enter Password");
      } else {
        pflag = 1;
        setPswderror("");
      }
      if (uflag === 1 && pflag === 1) {
        let code;
        if (username.length === 7) {
          code = username.substring(2, 4);
        } else if (username.length === 11) {
          code = username.substring(6, 8);
        }
        console.log(find_dept(code));
        const res = await axios.post("http://localhost:5002/api/login", {
          username,
          password,
        });
        console.log(res.data.pswd_status);
        if(username==='91762115000'&& res.data.pswd_status){
          console.log("admin pass matched");
        navigate("/admin-panel");
        }
       
        else if (res.data.pswd_status) {
          console.log("Matched");
          console.log(res.data.reg_no);
          navigate("/dashboard");
        }
        
         else {
          setPassword("");
          setPswderror("Incorrect password");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-pagef">
      <div className="login-page">
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

            <form className="login-form" onSubmit={form_submit}>
              {usrerror && <div className="login_err_msg">{usrerror}</div>}
              <div className="form-control">
                <input
                  className="login-input"
                  autoComplete="username"
                  value={username}
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i className="fa fa-user"></i>
              </div>

              {pswderror && <div className="login_err_msg">{pswderror}</div>}
              <div className="form-control">
                <input
                  className="login-input"
                  autoComplete="current-password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="fa fa-lock"></i>
              </div>

              <button type="submit" className="login-submit">
                Login
              </button>
            </form>
            <Link to="/password-reset" className='forgot'>Forgot password?</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
