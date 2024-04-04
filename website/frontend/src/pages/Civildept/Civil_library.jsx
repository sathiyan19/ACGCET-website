import React,{useEffect} from "react";

import { Radial_menu, Table } from "../../components";
import { BsFillBuildingsFill } from "react-icons/bs";
import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import { civ_dept_menu, civ_lib_data } from "../../constants/civil_dept";
import lib from "../../assets/pictures/civil_dept/civil_library/civillib.webp";

const Civil_library = () => {
  useEffect(() => {
    document.title = 'ACCET-Civil | Library';
  }, []);
  const columns = [
    { field: "S.No", header: "S.no" },
    { field: "ACCE.No", header: "ACCE.No" },
    { field: "TITLE", header: "Title" },
    { field: "AUTHOR", header: "AUTHOR" },
  ];
  return (
    <div className="civdept">
      <div className="civbg">
        <div className="civheading">Department of Civil Engineering</div>
        <div className="civ_sub_heading">Library</div>
      </div>
      <section className="civdark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={BsFillBuildingsFill}
            head="Menu"
            links={civ_dept_menu}
          />
        </div>
        <Radial_menu menu_links={civ_dept_menu} />
        <div className="civ_lib_area">
          <Underline heading="Library" />
          <div className="civtwo-col">
            <p className="civ_dept_content">
              The department of civil engineering at our college boasts its own
              library, a valuable resource that significantly benefits students.
              This dedicated library not only offers easy accessibility to
              specialized materials but also provides a quiet and conducive
              environment for focused study and research. Moreover, it fosters
              collaboration among students, promoting knowledge sharing and a
              strong sense of academic community within the
              department.Furthermore, the department's library frequently
              updates its collection to stay current with the latest
              developments and research in civil engineering, ensuring that
              students have access to up-to-date information. The knowledgeable
              librarians also offer guidance and support in locating relevant
              resources, enhancing students' research capabilities.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={lib} />
            </div>
          </div>
          <div className="ece_res">
            <div className="ece_res_table">
              <Table data={civ_lib_data} columns={columns} />
            </div>
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Civil_library;
