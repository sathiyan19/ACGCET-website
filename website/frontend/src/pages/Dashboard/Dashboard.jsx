import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Dashboard.css";
import {Floatinmenu, Underline} from "../../widgets";
import { dashboard_floater_menu } from "../../constants/dashboard";
import {IoHome} from 'react-icons/io5'

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
          document.title = `Reg.No:${res.data.reg_no}`;
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
    <div className="dashboard_area">
    <Floatinmenu
    logo={IoHome}
    head={dashboard_floater_menu.head}
    links={dashboard_floater_menu.links}
    from_top={150}
    />
    <Underline heading="Personal Details"/>
      <div className="dash_detail_grid_holder">
        <div className="trial_dash detail_grid detail_item_1 bgcolour_var_1">
          <div className="detail_body txcolour_var_1">Sathiyan R</div>
          <div className="detail_head">Name</div>
        </div>

        <div className="trial_dash detail_grid detail_item_2 bgcolour_var_2">
          <div className="detail_body txcolour_var_2">{reg}</div>
          <div className="detail_head">Register Number</div>
        </div>
        
        <div className="trial_dash detail_grid detail_item_3 bgcolour_var_3">
          <div className="detail_body txcolour_var_3">sathiyanr2003@gmail.com</div>
          <div className="detail_head">Email</div>
        </div>

        <div className="trial_dash detail_grid detail_item_4 bgcolour_var_1">
          <div className="detail_body txcolour_var_1">CSE 21-25</div>
          <div className="detail_head">Department</div>
        </div>

        <div className="trial_dash detail_grid detail_item_5 bgcolour_var_2">
          <div className="detail_body "><div className="fa fa-mars detail_body_gender txcolour_var_2"></div></div>
          <div className="detail_head">Gender</div>
        </div>

        <div className="trial_dash detail_grid detail_item_6 bgcolour_var_3">
          <div className="detail_body txcolour_var_3">O+ve</div>
          <div className="detail_head">Blood Group</div>
        </div>

        <div className="trial_dash detail_grid detail_item_7 bgcolour_var_2">
          <div className="detail_body txcolour_var_2">123456789012345</div>
          <div className="detail_head">EMIS Number</div>
        </div>

        <div className="trial_dash detail_grid detail_item_8 bgcolour_var_1">
          <div className="detail_body txcolour_var_1">19 July 2003</div>
          <div className="detail_head">DOB</div>
        </div>

        <div className="trial_dash detail_grid detail_item_8 bgcolour_var_3">
          <div className="detail_body txcolour_var_3">9043740937</div>
          <div className="detail_head">Mobile Number</div>
        </div>

      </div>
      </div>
      <div className="logout_button">
        <a className="log_link" href="/logout">
          Logout
        </a>
      </div>
    </>
  );
};

export default Dashboard;
