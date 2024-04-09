import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Login.css";
import svg from "../../assets/pictures/login_svg.svg";
import axios from "axios";
import ReCaptcha from "../../components/Recaptcha/Recaptcha";

axios.defaults.withCredentials = true;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usrerror, setUsrerror] = useState("");
  const [pswderror, setPswderror] = useState("");

//   // recaptcha
  const [retoken, setreToken] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    if (retoken.length) {
        setSubmitEnabled(true)
    }
}, [retoken])

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
        const res = await axios.post("/backend/login", {
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
          console.log("p_flag:", res.data.p_flag); 
          console.log(res.data.reg_no);
          navigate("/dashboard", { state: { pflag: res.data.p_flag , regno : res.data.regno } });
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

//   // recaptcha
  const handleToken = (retoken) => {
    setreToken(retoken)
  }

  useEffect(()=>{
    console.log("started!")
    axios.get("/backend/login_verification")
    .then((res)=>{
      console.log(res)
      if(res.data.token_status==="okay"){
        navigate("/dashboard")
      }
    })
  },[])

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
                  placeholder="Register Number"
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

              {/* recaptcha className="login-submit"     className={`${submitEnabled ? 'bg-blue-600 hover:bg-blue-900' : 'bg-gray-600 cursor-not-allowed'} px-6 py-2 mt-4 text-white  rounded-lg `*/}

              <div className="captcha">
                        <ReCaptcha siteKey="6LfdMIUpAAAAAFboyQAwnlX8ikyxl1eXy8YhERhN" callback={handleToken} />
              </div>

              <button disabled={!submitEnabled} type="submit" className={`${submitEnabled ? 'login-submit enabled' : 'login-submit disabled'}`}
              >
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
