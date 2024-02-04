import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Dashboard.css";

const Dashboard = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [reg, setReg] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/dashboard")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setReg(res.data.reg_no);
          console.log(reg);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
          navigate("/login-page");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <div className="trial_dash">{reg}</div>
    <div className="logout_button"><a className="log_link" href="/logout">Logout</a></div>
    </>
  );
};

export default Dashboard;
