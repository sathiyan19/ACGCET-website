import React, { useEffect, useState } from "react";
import "./Admin_dashboard.css";
import { Underline } from "../../widgets";
import Floatingmenu from "../../widgets/Floatingmenu/Floatingmenu";
import { admin_menu } from "../../constants/dashboard";
import axios from "axios";
const Admin_dashboard = () => {
  const [file, setFile] = useState(null);
  const [resp, setResponse] = useState("");
  const [tables, setTables] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [Dropflag, setDropflag] = useState(false);

  const filteredOptions = tables.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const gettables = async () => {
    try {
      const tabs = await axios.post("http://localhost:5002/api/gettables", {});
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
          "http://localhost:5002/api/exceltosql",
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
  }, []);

  return (
    <div>
      <Underline heading={"Admin Panel"} />
      <Floatingmenu head="Menu" links={admin_menu} />
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
    </div>
  );
};

export default Admin_dashboard;
