import React,{useState} from 'react';
import './Login.css';
import svg from '../../assets/pictures/login_svg.svg'
import axios from 'axios'


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usrerror, setUsrerror] = useState("");
  const [pswderror, setPswderror] = useState("");

  const form_submit=async (e)=>{
    e.preventDefault();
    console.log(username,password)

    let uflag=0,pflag=0;
    try {
      if(username.trim().length===0){
        setUsrerror("Enter Register number")
      }else{
        uflag=1
        setUsrerror("")
      }

      if(password.trim().length===0){
        setPswderror("Enter Password")
      }else{
        pflag=1
        setPswderror("")
      }
      if( uflag===1 && pflag===1){
      const res=await axios.post('http://localhost:5002/api/login',{username,password})
      if(res.data.pswd_status===1){
        window.location.pathname='/'
      }else if(res.data.pswd_status===2){
        setPassword("")
        setPswderror("Incorrect password")
      }}
    } catch (error) {
      console.error(error)
    }
  }

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

          <form className="login-form" onSubmit={form_submit}>

          {usrerror && <div className='login_err_msg'>{usrerror}</div>}
            <div className="form-control">
              <input className='login-input' autoComplete="username" value={username} type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
              <i className="fa fa-user"></i>
            </div>
            
            {pswderror && <div className='login_err_msg'>{pswderror}</div>}
            <div className="form-control">
              <input className='login-input' autoComplete='current-password' value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
              <i className="fa fa-lock"></i>
            </div>

            <button type='submit' className="login-submit">Login</button>
          </form>
          <a href='#' className='forgot'>Forgot password?</a>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Login;
