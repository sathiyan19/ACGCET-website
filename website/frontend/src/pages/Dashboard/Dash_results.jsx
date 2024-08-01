import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Table, Sidenavbar,Dash_radialmenu } from "../../components";
import { radmenu, subjects } from "../../constants/dashboard";
import "./Dashboard.css";
import { Progressbar, Underline } from "../../widgets";
import { sidenav } from "../../constants/dashboard";

const Dash_results = () => {
  const [sem_opt_flag, setSem_opt_flag] = useState(false);
  const [results, setResults] = useState([]);
  const [sem_list, setSem_list] = useState([]);
  const [sem, setSem] = useState("");
  const [res_reg_no, setRes_reg_no] = useState("");
  const [res_stud_data, setRes_stud_data] = useState({});
  const [res_dept, setRes_dept] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "ACCET-Student Results";
  }, []);

  useEffect(() => {
    axios
      .post("/backend/respublish")
      .then((res) => {
        if (res.data.Status === "Success") {
          const result_dept = res.data.dept.toUpperCase();
          const res_pub = res.data.results;
          const dept_sub = result_dept + "_subs";
          console.log(subjects["cse_subs"]);
          res_pub.map((item) => {
            item.subjectname = subjects[dept_sub][item.subcode].subname;
            return item; // Don't forget to return the modified item
          });
          setSem(res_pub[0].current_sem);
          setResults(res_pub);
          setRes_dept(result_dept);
          setRes_reg_no(res.data.regno);
          setRes_stud_data(res.data.stud_data);
          get_sem_list(res.data.regno, result_dept);
        } else {
          navigate("/login-page");
        }
      })
      .catch((err) => console.log(err));
    console.log(sem);
  }, [navigate]);

  const fetch_all_results = async (regno, dept, sem) => {
    try {
      setSem(sem);
      setSem_opt_flag(false);
      const all_res = await axios.post("/backend/resresult", {
        regno: regno,
        dept: dept,
        sem: sem,
      });
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
      sems.data.map((item) => list.push(item.current_sem));
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
      a.download = `${res_reg_no}_Sem${sem}.pdf`; // Specify the filename
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

  return (
    <div>
      <div className="dashboar-container">
        <div className="dash_complete_div">
          <Sidenavbar links={sidenav} dash_state={1} />
          <Dash_radialmenu menu_links={radmenu}/>
          <div className="profile-sec">
            <div className="dash-result">
              <div>
                <div className="dash-result-head">
                  <Underline heading={"Result"} />
                  <div className="dash-personal">
                    <div className="dash-res1">
                      <p className="dash-personal1">
                        <div className="dash-head">Name:</div>{" "}
                        {res_stud_data.studentname}
                      </p>
                      <p className="dash-personal1">
                        <div className="dash-head">Register number:</div>
                        {res_reg_no}
                      </p>
                    </div>
                    <div className="dash-res2">
                      <p className="dash-personal2">
                        <div className="dash-head">Batch:</div>
                        {res_stud_data.batch}
                      </p>
                      <p className="dash-personal2">
                        <div className="dash-head">Department:</div>
                        {res_dept}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dash-result-table">
                  <div className="dash-table-header">
                    <div className="sem_options_holder">
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
                                  res_reg_no,
                                  res_dept,
                                  item
                                );
                              }}
                            >
                              Sem {item}
                            </div>
                          ))}
                      </div>
                    </div> 
                    <div className="dash-result-table-head">Semester {sem}</div>
                  </div>
                  <div className="dash_res_table_holder">
                    <Table data={results} columns={column} />
                  </div>
                  <div class="marksheet-container">
                    <div className="cool_holder">
                      <button onClick={download_marksheet} className="coolass_button" id="coolbutton"></button>
                    </div>
                  </div>
                  
                  <div className="logout_button logout-btn">
                    <a className="log_link" href="/logout">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash_results;
