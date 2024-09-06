import React,{useEffect, useState}from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Logout() {
    const [auth,setAuth]=useState(false);
    const [message,setMessage]=useState('');
    const [reg,setReg]=useState('')
    const navigate=useNavigate();

    axios.defaults.withCredentials=true;

    useEffect(()=>{
        axios.get("/backend/logout")
        .then(res=>{
            if(res.data.Status==="Success"){
                setAuth(true)
                setReg(res.data.reg_no)
                console.log(res)
                navigate("/")
            }
            else{
                setAuth(false)
                setMessage( res.data.Error)
            }
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        {
            auth ?
            <div>
                <h3 style={{margin:'1900px'}}>u r authorized {reg}</h3>
                <button>Logout</button>
            </div>
            :
            <div>
                <h3>{message}</h3>
                <Link to="/login-page">Login </Link> 
            </div>
        }
    </div>
  )
}

export default Logout