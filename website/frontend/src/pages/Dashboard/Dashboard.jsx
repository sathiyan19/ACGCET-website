import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import { Progressbar, Underline } from "../../widgets";
import { Table, Sidenavbar,Dash_radialmenu } from "../../components";
import { radmenu, sidenav, subjects } from "../../constants/dashboard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [stud_details, setStud_details] = useState({});

  //result states start
  const [sem_opt_flag, setSem_opt_flag] = useState(false);
  const [results, setResults] = useState([]);
  const [sem_list, setSem_list] = useState([]);
  const [sem, setSem] = useState("");
  //result states end

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
      // console.log("pflag value:", location.state.pflag);
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
        const response = await axios.post("/backend/reset-pswd", {
          regno: location.state.regno,
          password: newPassword,
        });

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
          else if (res.data.stud_details.regno === "91762110000") {
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

  //result functions start

  const fetch_publish_results = async (regno, dept) => {
    try {
      // const res_pub = await axios.post("/backend/respublish");
      const results_data = await axios.post("/backend/respublish");
      const result_status = results_data.data.Status;
      const result_regno = results_data.data.regno;
      const result_dept = results_data.data.dept;
      if (result_status === "Success") {
        const res_pub = results_data.data.results;
        const dept_sub = dept + "_subs";
        console.log(dept_sub);
        res_pub.map((item) => {
          item.subjectname = subjects[dept_sub][item.subcode].subname;
          return item; // Don't forget to return the modified item
        });
        setSem(res_pub[0].current_sem);
        setResults(res_pub);
      } else {
        navigate("/login-page");
      }
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

  const download_marksheet = async () => {
    try {
      var coolbutton = document.getElementById("coolbutton");
      var inprogress = false;
      coolbutton.onclick = function () {
        if (inprogress) {
          return false;
        }
        inprogress = true;
        coolbutton.classList.add("coolass_button_first");
        setTimeout(function () {
          coolbutton.classList.add("coolass_button_bridge1");
        }, 500);
        setTimeout(function () {
          coolbutton.classList.add("coolass_button_second");
        }, 600);
        setTimeout(function () {
          coolbutton.classList.add("coolass_button_third");
        }, 700);
        setTimeout(function () {
          coolbutton.classList.add("coolass_button_final");
        }, 1800);
        setTimeout(function () {
          coolbutton.classList.remove("coolass_button_final");
          coolbutton.classList.remove("coolass_button_third");
          coolbutton.classList.remove("coolass_button_second");
          coolbutton.classList.remove("coolass_button_bridge1");
          coolbutton.classList.remove("coolass_button_first");
          inprogress = false;
        }, 3200);
      };
      const marksheet = await axios.post(
        "/backend/download_marksheet",
        {},
        {
          responseType: "blob", // Specify responseType as 'blob' to receive binary data
        }
      );
      const url = window.URL.createObjectURL(new Blob([marksheet.data]));

      // Create a link element and trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = `${stud_details.regno}_Sem${sem}.pdf`; // Specify the filename
      document.body.appendChild(a);
      a.click();

      // Clean up the temporary URL
      window.URL.revokeObjectURL(url);
      // console.log(marksheet)
    } catch (error) {
      console.error(error);
    }
  };

  const column = [
    // {field:'sno',header:"Sno"},
    // {field:'sem',header:"sem"},
    { field: "subcode", header: "subject code" },
    { field: "subjectname", header: "Subject Name" },
    { field: "grade", header: "Grade" },
    { field: "result", header: "Result" },
  ];

  //result functions end

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
          <Sidenavbar links={sidenav} dash_state={0} />

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
                    <div className="detail_head">UMIS Number</div>
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

            
          </div>
        </div>
      </div>

      
      <Dash_radialmenu menu_links={radmenu}/>
    </div>
  );
};

export default Dashboard;
