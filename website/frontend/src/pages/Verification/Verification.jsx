import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect,useState } from "react";
import "./Verification.css";
import { Table } from "../../components";
import { subjects } from "../../constants/dashboard";
import { Underline } from "../../widgets";



const Verification = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [sem, setSem] = useState("");
    const [regno,setRegno]= useState("")
    const [dept,setdept]= useState("")
    const [personals,setPersonals]= useState({})
  
    useEffect(() => {
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

      const fetchData = async () => {
        try {
          // Extracting regno and sem from the URL query parameters
          const searchParams = new URLSearchParams(location.search);
          const regno = searchParams.get("regno");
          setRegno(regno)
          const sem = searchParams.get("sem");
          let code
          if (regno.length === 7) {
            code = regno.substring(2, 4);
          } else if (regno.length === 11) {
            code = regno.substring(6, 8);
          }
          let department=find_dept(code).toUpperCase()
          setdept(department)
          setSem(sem);
          
          const ver_response = await axios.post("/backend/resresult", {
            regno: regno,
            dept: department,
            sem: sem,
          });

          const cv_dept_sub = department + "_subs";
          ver_response.data.map((item) => {
            item.subjectname = subjects[cv_dept_sub][item.subcode].subname;
            return item;
          });
          setResults(ver_response.data);
          // Setting sem and results state

          const personal_details=await axios.post("/backend/cv_details",{
            regno: regno,
            dept: department,
          })
          setPersonals(personal_details.data.stud_details)

        } catch (error) {
          console.error("Error fetching results:", error);
        }
      };
  
      fetchData();
    }, [location.search]);
  
    const columns = [
      { field: "subcode", header: "Subject Code" },
      { field: "subjectname", header: "Subject Name" },
      { field: "grade", header: "Grade" },
      { field: "result", header: "Result" },
    ];
  return (
    <div  className="verify_entire">
    <Underline heading={"Verification Page"} />
    <div className="verify_flex">
    <div className="verify1">

      <div>
        <p className="verify_head">Name:</p>
        <p>{personals.studentname}</p>
      </div>
      <br></br>
      <div>
        <p className="verify_head">Register number:</p>
        <p>{regno}</p>
      </div>
      <br></br>
      <div>
        <p className="verify_head">Department:</p>
        <p>{dept}</p>
      </div>
      <br></br>
      
    </div>
    <div className="verify2">

      <div>
        <p className="verify_head">Batch:</p>
        <p>{personals.batch}</p>
      </div>
      <br></br>

      <div>
        <p className="verify_head">Gender:</p>
        <p>{personals.gender}</p>
      </div>
      <br></br>

      <div>
        <p className="verify_head">Date of birth:</p>
        <p>{personals.dob}</p>
      </div>
      <br></br>
      
    </div>
    </div>

    <div className="verify_table">
      <div className="verify_table_head">Semester {sem} Results</div>
      <Table data={results} columns={columns} />
    </div>

    </div>
  );
};

export default Verification