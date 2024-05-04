import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import { Navigation, Footer,Chatbot } from "./components";

import {
  Home,
  Milestones,
  About,
  Vision,
  Clubs,
  Office,
  Alumni,
  Nss,
  Teqip1,
  Teqip2,
  Teqip3,
  Programs_offered,
  Life,
  T3_officials,
  T3_acad,
  T3_procure,
  T3_twin,
  Ncc,
  Aicte,
  Organisation,
  Under,
  Csedept,
  Govern,
  Thiran,
  Sports,
  Cse_faculties,
  Ecedept,
  Ece_peo,
  Ece_faculties,
  Ece_lab,
  Ece_rankers,
  Ece_events,
  Ece_projects,
  Ece_stud_activity,
  Ece_antenna,
  Annual_report,
  Academic,
  Fees,
  Civildept,
  Mechdept,
  Eeedept,
  Cse_peo,
  Cse_lab,
  Cse_events,
  Cse_prog_org,
  Cse_mou,
  Civil_peo,
  Civil_faculties,
  Civil_lab,
  Civil_events,
  Civil_magazine,
  Mech_peo,
  Mech_faculties,
  Mech_lab,
  Mech_events,
  Eee_peo,
  Eee_faculties,
  Eee_lab,
  Eee_events,
  Ece_placement,
  Sciencedept,
  Iqac,
  Iqac_min,
  Iqac_aqar,
  Iqac_feed,
  Nba,
  Nirf,
  Iic,
  Sh_faculty,
  Sh_lab_facility,
  Sh_research,
  Science_Programme,
  Uba,
  Scholarship,
  Civil_awards,
  Ece_dept_lib,
  Ece_research,
  Iste,
  Sih,
  Committee,
  Yrc,
  Devpage,
  Eee_research,
  Eee_nextgen,
  Civil_library,
  Civil_placement,
  Civil_indus,
  Civil_internal,
  Civil_research,
  Facilities,
  Eee_modern,
  Eee_lib,
  Mech_lib,
  Mech_phd,
  Eee_studcorner,
  Mech_rankers,
  Mech_org,
  Placement,
  Mech_coe,

  Coe,
  Coe_Adminstration,
  Coe_Academic,
  Coe_link,
  
  Coe_Contact,
  Coe_Application,
  Coe_Claim,
  Coe_FeeStruct,
  Coe_syllabuss,
  Coe_syllabus1,
  Coe_Committiee,
  
  Login,
  Dashboard,
  Logout,
  Passreset,
  Otp,
  Newpass,
  Admin_dashboard,
  Research,
  
  Naac,
  Ignatz,
  Typhonz_page,
  Phoenix,
  Akkadians,
  Audit_stmt,
  Verification
} from "./pages";
import "./App.css";
import Coe_syllabus from "./pages/coe/Coe_syllabuss";
/*import Coe_Adminstration from "./pages/Coe/Coe_Adminstration";*/


const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/about-institution" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/office" element={<Office />} />
        <Route path="/teqip1" element={<Teqip1 />} />
        <Route path="/teqip2" element={<Teqip2 />} />
        <Route path="/teqip3" element={<Teqip3 />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/nss" element={<Nss />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/programs" element={<Programs_offered />} />
        <Route path="/life-at-acgcet" element={<Life />} />
        <Route path="/t3_officials" element={<T3_officials />} />
        <Route path="/t3_acad" element={<T3_acad />} />
        <Route path="/t3_procure" element={<T3_procure />} />
        <Route path="/t3_twin" element={<T3_twin />} />
        <Route path="/aicte" element={<Aicte />} />
        <Route path="/organisation" element={<Organisation />} />
        <Route path="/under" element={<Under />} />
        <Route path="/csedept" element={<Csedept />} />
        <Route path="/govern" element={<Govern />} />
        <Route path="/ncc" element={<Ncc />} />
        <Route path="/thiran" element={<Thiran />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/ecedept" element={<Ecedept />} />
        <Route path="/annual_reports" element={<Annual_report />} />
        <Route path="/academic-calendar" element={<Academic />} />
        <Route path="/fee-structure" element={<Fees />} />
        <Route path="/ecedept/ece-peo" element={<Ece_peo />} />
        <Route path="/ecedept/ece-faculties" element={<Ece_faculties />} />
        <Route path="/ecedept/ece-lab" element={<Ece_lab />} />
        <Route path="/ecedept/ece-research" element={<Ece_research />} />
        <Route path="/ecedept/ece-rankers" element={<Ece_rankers/>} />
        <Route path="/mechdept/mech-rankers" element={<Mech_rankers/>} />
        <Route path="/ecedept/ece-dept-events" element={<Ece_events/>} />
        <Route path="/ecedept/ece-projects" element={<Ece_projects/>} />
        <Route path="/ecedept/ece-student-activity" element={<Ece_stud_activity/>} />
        <Route path="/ecedept/ece-antenna-testing" element={<Ece_antenna/>} />
        <Route path="/csedept/cse-faculties" element={<Cse_faculties/>} />
        <Route path="/civildept" element={<Civildept/>} />
        {/* <Route path="/mechdept" element={<Under/>} /> */}
        <Route path="/mechdept" element={<Mechdept/>} />
        <Route path="/eeedept" element={<Eeedept/>} />
        <Route path="/eeedept/eee-modern" element={<Eee_modern/>}/>
        <Route path="/eeedept/eee-studcorner" element={<Eee_studcorner/>}/>
        <Route path="/sciencedept" element={<Sciencedept/>} />
        <Route path="/sciencedept/sh-faculty" element={<Sh_faculty />} />
        <Route path="/sciencedept/sh-lab-facility" element={<Sh_lab_facility />} />
        <Route path="/sciencedept/sh-research" element={<Sh_research/>} />
        <Route path="/sciencedept/science-programme" element={<Science_Programme/>} />
        <Route path="/csedept/cse-peo" element={<Cse_peo/>} />
        <Route path="/csedept/cse-lab" element={<Cse_lab/>} />
        <Route path="/csedept/cse-mou" element={<Cse_mou/>} />
        <Route path="/csedept/cse-dept-events" element={<Cse_events/>} />
        <Route path="/csedept/cse-prog" element={<Cse_prog_org/>} />
        <Route path="/civildept/civil-peo" element={<Civil_peo/>} /> 
        <Route path="/civildept/civil-faculties" element={<Civil_faculties/>} />
        <Route path="/civildept/civil-lab" element={<Civil_lab/>} />
        <Route path="/civildept/civil-research" element={<Civil_research/>} />
        {/* <Route path="/civildept/civil-dept-events" element={<Civil_events/>} /> */}
        <Route path="/civildept/civil-dept-magazine" element={<Civil_magazine/>} />
        <Route path="/civildept/civil-dept-indus" element={<Civil_indus/>} />
        <Route path="/civildept/civil-internal-revenue" element={<Civil_internal/>} />
        <Route path="/mechdept/mech-peo" element={<Mech_peo/>} />
        <Route path="/mechdept/mech-faculties" element={<Mech_faculties/>} />
        <Route path="/mechdept/mech-lab" element={<Mech_lab/>} />
        <Route path="/mechdept/mech-dept-events" element={<Mech_org/>} />
        <Route path="/eeedept/eee-peo" element={<Eee_peo/>} />
        <Route path="/eeedept/eee-faculties" element={<Eee_faculties/>} />
        <Route path="/eeedept/eee-lab" element={<Eee_lab/>} />
        <Route path="/eeedept/eee-research" element={<Eee_research/>} />
        <Route path="/eeedept/eee-nextgen" element={<Eee_nextgen/>}/>
        <Route path="/eeedept/eee-nextgen" element={<Eee_nextgen/>}/>
        <Route path="/eeedept/eee-dept-lib" element={<Eee_lib/>} />
        <Route path="/eeedept/eee-events" element={<Eee_events/>}/>
        <Route path="/uba" element={<Uba/>} />
        <Route path="/ecedept/ece-placement" element={<Ece_placement/>} />
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/civildept/civil-awards" element={<Civil_awards/>} />
        <Route path="/iqac_min" element={<Iqac_min/>} />
        <Route path="/iqac_aqar" element={<Iqac_aqar/>} />
        <Route path="/iqac" element={<Iqac/>} />
        <Route path="/iqac_feed" element={<Iqac_feed/>} />
        <Route path="/nba" element={<Nba/>} />
        <Route path="/nirf" element={<Nirf/>} />
        <Route path="/iic" element={<Iic/>} />
        <Route path="/ecedept/ece-dept-lib" element={<Ece_dept_lib/>} />
        <Route path="/iste" element={<Iste/>} />
        <Route path="/sih" element={<Sih/>} />
        <Route path="/committee" element={<Committee/>} />
        <Route path="/yrc" element={<Yrc/>} />
        <Route path="/webdev-team" element={<Devpage/>} />
        <Route path="/civildept/civil-library" element={<Civil_library/>} />
        <Route path="/civildept/civil-placement" element={<Civil_placement/>} />
        <Route path="/centers-and-facilities" element={<Facilities/>} />
        <Route path="/centers-and-facilities" element={<Facilities/>} />
        <Route path="/mechdept/mech-library" element={<Mech_lib/>}/>
        <Route path="/mechdept/mech-phd" element={<Mech_phd/>}/>
        <Route path="/mechdept/mech-sae"element={<Mech_events/>}/>
        <Route path="/placement" element={<Placement />} />
        <Route path="/mechdept/mech-centre-of-excellance"element={<Mech_coe/>}/>
         
         <Route path="/coe"element={<Coe/>}/>
         <Route path="/coe/coe_adminstration"element={<Coe_Adminstration/>}/>
         <Route path="/coe/coe_academic"element={<Coe_Academic/>}/>
         <Route path="/coe/coe_link"element={<Coe_link/>}/>
         <Route path="/coe/coe_contact"element={<Coe_Contact/>}/>
        <Route path="/login-page" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/password-reset" element={<Passreset/>}/>
        <Route path="/password-otp" element={<Otp/>}/>
        <Route path="/password-create" element={<Newpass/>}/>
        <Route path="/admin-panel" element={<Admin_dashboard/>}/>
        <Route path="/naac" element={<Naac/>}/>
        <Route path="/ignatz" element={<Ignatz/>}/>
        <Route path="/typhonz" element={<Typhonz_page/>}/>
        <Route path="/phoenix" element={<Phoenix/>}/>
        <Route path="/akkadians" element={<Akkadians/>}/>
         <Route path="/coe/coe_application"element={<Coe_Application/>}/>
         <Route path="/coe/coe_claim"element={<Coe_Claim/>}/>
         <Route path="/coe/coe_feestruct"element={<Coe_FeeStruct/>}/>
         <Route path="/coe/coe_syllabuss"element={<Coe_syllabuss/>}/>
         <Route path="/coe/coe_syllabus1"element={<Coe_syllabus1/>}/>
         <Route path="/coe/coe_committiee"element={<Coe_Committiee/>}/>
         <Route path="/research"element={<Research/>}/>
         
         <Route path="/audit_stmt" element={<Audit_stmt/>}/>
         <Route path="/Verification" element={<Verification/>}/>
      </Routes>
      {/* <Chatbot/> */}
      <Footer />
    </div>
  );
};

export default App;
