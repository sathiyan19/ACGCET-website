import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import { Progressbar, Underline } from "../../widgets";
import { Table } from "../../components";
import { subjects } from "../../constants/dashboard";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [sem_opt_flag, setSem_opt_flag] = useState(false);
  const [stud_details, setStud_details] = useState({});
  const [results, setResults] = useState([]);
  const [sem_list, setSem_list] = useState([]);
  const [sem, setSem] = useState("");
  const [pflag, setPFlag] = useState(null);
  const [showChangePasswordDialog, setShowChangePasswordDialog] =
    useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [pswderror, setPswderror] = useState("");
  const [strength, setStrength] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.pflag) {
      console.log("pflag value:", location.state.pflag);
      if (location.state.pflag === 1) {
        setShowChangePasswordDialog(true);
      }
    }
  }, [location.state]);

  const password_strength = (pswd) => {
    const strongRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (strongRegex.test(pswd)) {
      setStrength("Strong");
    } else if (mediumRegex.test(pswd)) {
      setStrength("Medium");
    } else {
      setStrength("Weak");
    }
  };

  const handleChangePassword = async () => {
    let pflag = 0;
    try {
      // console.log("New psswd from user:", newPassword);
      // console.log("regno:", location.state.regno);
      if (newPassword.length === 0) {
        setPswderror("Enter Password");
      } else {
        pflag = 1;
        setPswderror("");
      }

      if (pflag === 1 && strength === "Strong") {
        const response = await axios.post(
          "/backend/reset-pswd",
          {
            regno: location.state.regno,
            password: newPassword,
          }
        );

        if (response.data.message === "password-reset") {
          setShowChangePasswordDialog(false);
          setPFlag(2);
        } else {
          console.error("Password reset failed");
        }
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  useEffect(() => {
    axios
      .get("/backend/dashboard")
      .then((res) => {
        if (res.data.Status === "Success") {
          if (res.data.stud_details.regno === "91762115000") {
            navigate("/admin-panel");
          }
          setStud_details(res.data.stud_details);
        } else {
          navigate("/login-page");
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  useEffect(() => {
    document.title = "ACCET-Student Dashboard";
  }, []);

  useEffect(() => {
    const handleRadialdis = () => {
      if (window.innerWidth > 800) {
        setmenu_open(false);
      }
    };
    window.addEventListener("resize", handleRadialdis);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [menu_open, setmenu_open] = useState(false);

  const toggle_menu = () => {
    setmenu_open(!menu_open);
  };

  const fetch_publish_results = async (regno, dept) => {
    try {
      const res_pub = await axios.post("/backend/respublish", {
        regno: regno,
        dept: dept,
      });
      const dept_sub = dept + "_subs";
      res_pub.data.map((item) => {
        item.subjectname = subjects[dept_sub][item.subcode].subname;
        return item; // Don't forget to return the modified item
      });
      setSem(res_pub.data[0].current_sem);
      setResults(res_pub.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetch_all_results = async (regno, dept, sem) => {
    try {
      setSem(sem);
      setSem_opt_flag(false);
      const all_res = await axios.post("/backend/resresult", {
        regno: regno,
        dept: dept,
        sem: sem,
      });
      console.log(all_res.data);
      const dept_sub = dept + "_subs";
      all_res.data.map((item) => {
        item.subjectname = subjects[dept_sub][item.subcode].subname;
        return item;
      });
      setResults(all_res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const get_sem_list = async (regno, dept) => {
    try {
      const sems = await axios.post("/backend/getsemlist", {
        regno: regno,
        dept: dept,
      });
      let list = [];
      sems.data.map((item) => list.push(item.sem));
      list.sort((a, b) => b - a);
      setSem_list(list);
    } catch (error) {
      console.error(error);
    }
    // console.log(sems.data)
  };

  const download_marksheet =async()=>{
    try {
      const marksheet = await axios.post("/backend/download_marksheet", {},{
        responseType: 'blob' // Specify responseType as 'blob' to receive binary data
      });
      const url = window.URL.createObjectURL(new Blob([marksheet.data]));
      
      // Create a link element and trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = `${stud_details.regno}_Sem${sem}.pdf`; // Specify the filename
      document.body.appendChild(a);
      a.click();
      
      // Clean up the temporary URL
      window.URL.revokeObjectURL(url);
      console.log(marksheet)
    } catch (error) {
      console.error(error);
    }
  }

  const column = [
    // {field:'sno',header:"Sno"},
    // {field:'sem',header:"sem"},
    { field: "subcode", header: "subject code" },
    { field: "subjectname", header: "Subject Name" },
    { field: "grade", header: "Grade" },
    { field: "result", header: "Result" },
  ];

  return (
    <div>
      <div className="dashboard-container">
        {showChangePasswordDialog && (
          <div className="password_dialog_outer">
            <div className="password_change_dialog">
              <h2>Set New Password</h2>
              {/* <Underline heading={"Set Password"} /> */}
              {strength && (
                <div className="dashboard_pass_strength">
                  Password strength:&nbsp;
                  {strength === "Strong" && (
                    <span className="password_str">{strength}</span>
                  )}
                  {strength === "Medium" && (
                    <span className="password_med">{strength}</span>
                  )}
                  {strength === "Weak" && (
                    <span className="password_weak">{strength}</span>
                  )}
                </div>
              )}
              {pswderror && <div className="login_err_msg">{pswderror}</div>}
              <div className="dashboard_form-control">
                <input
                  className="pswdbox"
                  type="password"
                  placeholder="Enter password"
                  value={newPassword}
                  onChange={(e) => {
                    password_strength(e.target.value);
                    setNewPassword(e.target.value);
                  }}
                />
                <i className="fa fa-lock"></i>
              </div>
              <button className="pswdboxsubmit" onClick={handleChangePassword}>
                Submit
              </button>
            </div>
          </div>
        )}
        {/* sidenavbar */}
        <div className="dash_complete_div">
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
            onClick={() => {
              fetch_publish_results(
                stud_details.regno,
                stud_details.department
              );
              get_sem_list(stud_details.regno, stud_details.department);
              handleTabClick("result");
            }}
          >
            Result
          </Link>
        </section>

        

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
              <div className="logout_button">
            <a className="log_link" href="/logout">
              Logout
            </a>
          </div>
              {/* <div className="trial_dash">{reg}</div> */}
            </div>
          )}
          

          {/* result page */}
          <div className="dash-result">
            {activeTab === "result" && (
              <div>
                <div className="dash-result-head">
                  <Underline heading={"Result"} />
                  <div className="dash-personal">
                    <div className="dash-res1">
                      <p className="dash-personal1">
                        <div className="dash-head">Name:</div>{" "}
                        {stud_details.studentname}
                      </p>
                      <p className="dash-personal1">
                        <div className="dash-head">Register number:</div>
                        {stud_details.regno}
                      </p>
                    </div>
                    <div className="dash-res2">
                      <p className="dash-personal2">
                        <div className="dash-head">Batch:</div>
                        {stud_details.batch}
                      </p>
                      <p className="dash-personal2">
                        <div className="dash-head">Department:</div>
                        {stud_details.department}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dash-result-table">
                  <div className="dash-table-header">
                    {/* <div className="sem_options_holder">
                      <div className="sem_input_holder" tabIndex={0} onFocus={(e)=> setSem_opt_flag(true)} onBlur={(e)=> setSem_opt_flag(false)}>
                        <div className="sem_input">Sem {sem}</div>
                        <div className="fa fa fa-chevron-circle-down"></div>
                      </div>
                      <div className="sem_options">
                        {sem_opt_flag &&
                          sem_list.map((item) => (
                            <div
                              className="sem_dropdown"
                              onMouseDown={(e) => {
                                fetch_all_results(
                                  stud_details.regno,
                                  stud_details.department,
                                  item
                                );
                              }}
                            >
                              Sem {item}
                            </div>
                          ))}
                      </div>
                    </div>  */}
                    <div className="dash-result-table-head">Semester {sem}</div>
                  </div>
                  <Table data={results} columns={column}/>
                  {/* <button onClick={download_marksheet}>Download</button> */}
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>

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
                onClick={() => {
                  fetch_publish_results(
                    stud_details.regno,
                    stud_details.department
                  );
                  handleTabClick("result");
                }}
              >
                Result
              </Link>
            </div>
          </div>
        </div>
      {/* <Radial_menu menu_links={dashboard_dept_menu}/> */}
    </div>
  );
};

export default Dashboard;
