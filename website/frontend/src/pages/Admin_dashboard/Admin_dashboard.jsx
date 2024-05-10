import React, { useEffect, useState } from "react";
import "./Admin_dashboard.css";
import { Underline,Floatinmenu } from "../../widgets";
import {useNavigate } from "react-router-dom";
import { admin_menu } from "../../constants/dashboard";
import axios from "axios";
const Admin_dashboard = () => {
  const [file, setFile] = useState(null);
  const [resp, setResponse] = useState("");
  const [tables, setTables] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [Dropflag, setDropflag] = useState(false);
  const navigate = useNavigate();

  const filteredOptions = tables.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const gettables = async () => {
    try {
      const tabs = await axios.post("/backend/gettables", {});
      console.log(tabs.data);
      setTables(tabs.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const fil = e.target.files[0]; // Get the first file selected by the user
    setFile(fil); // You can store the file in state if needed
  };

  const excel_submit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    try {
      // Make a POST request with Axios, passing the FormData object as the data
      if (inputValue !== "") {
        formData.append("file", file);
        formData.append("table_name", inputValue);
        const response = await axios.post(
          "/backend/exceltosql",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set Content-Type header to multipart/form-data
            },
          }
        );
        setResponse(response.data);
        console.log(response.data);
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettables();
    axios
    .get("/backend/dashboard")
    .then((res) => {
      if (res.data.Status === "Success") {
        console.log("hi")
        if(res.data.stud_details.regno==='91762115000'){
          navigate("/admin-panel")
        }
        // console.log(stud_details);
      } else {
        navigate("/login-page");
      }
    })
    .catch((err) => console.log(err));
}, [navigate]);

useEffect(() => {
  document.title = "ACCET-Admin";
}, []);

  return (
    <div>
      <Underline heading={"Admin Panel"} />
      <Floatinmenu head="Menu" links={admin_menu} />
      <div className="admin-page">
        <div className="admin-drop">
          <input
            className="admin-select"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={(e) => setDropflag(true)}
            onBlur={(e) => setDropflag(false)}
            placeholder="Type to filter..."
          />
          <div className="dropdown_holder">
            {Dropflag &&
              filteredOptions.map((item) => (
                <div
                  className="dropdowns"
                  onMouseDown={(e) => {
                    setInputValue(item);
                    setDropflag(false);
                  }}
                  value={item}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>

        <form className="admin-upload" onSubmit={excel_submit}>
         <input
            className="admin-input"
            type="file"
            onChange={handleFileChange}
            name="file"
            accept=".xlsx"
          />
          <button className="admin-submit" type="submit">
            Upload
          </button>
        </form>
        
      </div>
      <div className="logout_button">
            <a className="log_link" href="/logout">
              Logout
            </a>
            </div>
    </div>
  );
};

export default Admin_dashboard;
