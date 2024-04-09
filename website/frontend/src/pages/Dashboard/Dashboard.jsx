import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/backend/dashboard")
      // .get("http://localhost:5002/api/dashboard")
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
      // const res_pub = await axios.post("http://localhost:5002/api/respublish", {
        regno: regno,
        dept: dept,
      });
      const dept_sub = dept + "_subs";
      res_pub.data.map((item) => {
        item.subjectname = subjects[dept_sub][item.subcode].subname;
        return item; // Don't forget to return the modified item
      });
      setSem(res_pub.data[0].sem);
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
      // const all_res = await axios.post("http://localhost:5002/api/resresult", {
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
      // const sems = await axios.post("http://localhost:5002/api/getsemlist", {
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
              <div className="dash-result-page">
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
                      <div
                        className="sem_input_holder"
                        tabIndex={0}
                        onFocus={(e) => setSem_opt_flag(true)}
                        onBlur={(e) => setSem_opt_flag(false)}
                      >
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
                    </div> */}
                    <div className="dash-result-table-head">Semester {sem}</div>
                  </div>
                  <div className="sem_res_table_holder">
                    <Table
                      className="sem_res_table_data"
                      data={results}
                      columns={column}
                    />
                  </div>
                  <div className="dash-tbd">Tbd-To Be Displayed
                </div>
                  <div className="logout_button-res">
                    <a className="log_link" href="/logout">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Radial_menu menu_links={dashboard_dept_menu}/> */}
    </div>
  );
};

export default Dashboard;
