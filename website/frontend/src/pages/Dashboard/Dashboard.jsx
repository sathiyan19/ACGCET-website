import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import { Progressbar, Underline } from "../../widgets";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [reg, setReg] = useState("");
  const [stud_details, setStud_details] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/dashboard")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setReg(res.data.stud_details.regno);
          setStud_details(res.data.stud_details);
          // console.log(stud_details);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
          navigate("/login-page");
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  useEffect(()=>{
    const handleRadialdis = () => {
      if(window.innerWidth>800){
        setmenu_open(false)
      }
    };
    window.addEventListener('resize', handleRadialdis);
  },[]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [menu_open, setmenu_open] = useState(false);

  const toggle_menu = () => {
    setmenu_open(!menu_open);
  };

  return (
    <div>
      <div className="dashboard-container">
        {/* sidenavbar */}
        <section className="dash-sidenav">
          <Link
            to={"/dashboard"}
            className={`dash-side-nav-items ${
              activeTab === "profile" ? "active" : ""
            }`}
            onClick={() => handleTabClick("profile")}
          >
            Profile
          </Link>
          <Link
            to={"/dashboard"}
            className={`dash-side-nav-items ${
              activeTab === "result" ? "active" : ""
            }`}
            onClick={() => handleTabClick("result")}
          >
            Result
          </Link>
        </section>

        {/* radialmenu */}
        <div
          className={`radial_menu1 fa ${
            menu_open ? "fa-close radial_float_menu1" : "fa-bars"
          }`}
          onClick={toggle_menu}
        ></div>
        <div className={`radial_bg1 ${menu_open ? "scaled1" : ""}`}>
          <div className="dept_menu1">
            <div className="dept_link_head1">MENU</div>
            <div className="dept_link_holder1">
              <Link
                to={"/dashboard"}
                className={`dept_links1 ${
                  activeTab === "profile" ? "active1" : ""
                }`}
                onClick={() => handleTabClick("profile")}
              >
                Profile
              </Link>
              <Link
                to={"/dashboard"}
                className={`dept_links1 ${
                  activeTab === "result" ? "active1" : ""
                }`}
                onClick={() => handleTabClick("result")}
              >
                Result
              </Link>
            </div>
          </div>
        </div>

        <div className="profile-sec">
          {activeTab === "profile" && (
            <div>
              <Underline heading={"Profile Details"} />
              <div className="dash_detail_grid_holder">
                <div className="trial_dash detail_grid detail_item_1 bgcolour_var_3">
                  <div className="detail_body txcolour_var_3 ">
                    {stud_details.studentname}
                  </div>
                  <div className="detail_head">Name</div>
                </div>

                <div className="trial_dash detail_grid detail_item_2 bgcolour_var_5">
                  <div className="detail_body txcolour_var_2 dash-bar">
                    <Progressbar
                      key={1}
                      percent1={stud_details.cgpa * 10}
                      display1={stud_details.cgpa}
                      symbol={""}
                      heading={"CGPA"}
                    />
                  </div>
                  <div className="detail_head">CGPA</div>
                </div>

                <div className="trial_dash detail_grid detail_item_3 bgcolour_var_2">
                  <div className="detail_body txcolour_var_2">
                    {stud_details.department} {stud_details.batch}
                  </div>
                  <div className="detail_head">Department</div>
                </div>

                <div className="trial_dash detail_grid detail_item_4 bgcolour_var_3">
                  <div className="detail_body txcolour_var_3">
                    {stud_details.regno}
                  </div>
                  <div className="detail_head">Register Number</div>
                </div>

                <div className="trial_dash detail_grid detail_item_5 bgcolour_var_3">
                  <div className="detail_body txcolour_var_3 d-emis">
                    {stud_details.emis_no}
                  </div>
                  <div className="detail_head">EMIS Number</div>
                </div>

                <div className="trial_dash detail_grid detail_item_6 bgcolour_var_2">
                  <div className="detail_body ">{stud_details.gender}</div>
                  <div className="detail_head">Gender</div>
                </div>

                <div className="trial_dash detail_grid detail_item_7 bgcolour_var_3">
                  <div className="detail_body txcolour_var_3">
                    {stud_details.blood_grp}
                  </div>
                  <div className="detail_head">Blood Group</div>
                </div>

                <div className="trial_dash detail_grid detail_item_8 bgcolour_var_2">
                  <div className="detail_body txcolour_var_2">
                    {stud_details.dob}
                  </div>
                  <div className="detail_head">DOB</div>
                </div>

                <div className="trial_dash detail_grid detail_item_9 bgcolour_var_2">
                  <div className="detail_body txcolour_var_2">
                    {stud_details.phoneno}
                  </div>
                  <div className="detail_head">Mobile Number</div>
                </div>
                <div className="trial_dash detail_grid detail_item_10 bgcolour_var_3">
                  <div className="detail_body txcolour_var_3">
                    {stud_details.mailid}
                  </div>
                  <div className="detail_head">Email</div>
                </div>
              </div>
              {/* <div className="trial_dash">{reg}</div> */}
            </div>
          )}

          <div className="logout_button">
            <a className="log_link" href="/logout">
              Logout
            </a>
          </div>
        </div>
      </div>
      {/* <Radial_menu menu_links={dashboard_dept_menu}/> */}
    </div>
  );
};

export default Dashboard;
