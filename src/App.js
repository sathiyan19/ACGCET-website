import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import { Navigation, Footer } from "./components";

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
  Civil_peo,
  Civil_faculties,
  Civil_lab,
  Civil_events,
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
  Scholarship,
  Civil_awards,
  Ece_research
} from "./pages";
import "./App.css";

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
        <Route path="/ecedept/ece-dept-events" element={<Ece_events/>} />
        <Route path="/ecedept/ece-projects" element={<Ece_projects/>} />
        <Route path="/ecedept/ece-student-activity" element={<Ece_stud_activity/>} />
        <Route path="/ecedept/ece-antenna-testing" element={<Ece_antenna/>} />
        <Route path="/csedept/cse-faculties" element={<Cse_faculties/>} />
        <Route path="/civildept" element={<Civildept/>} />
        {/* <Route path="/mechdept" element={<Under/>} /> */}
        <Route path="/mechdept" element={<Mechdept/>} />
        <Route path="/eeedept" element={<Eeedept/>} />
        <Route path="/sciencedept" element={<Sciencedept/>} />
        <Route path="/sciencedept/sh-faculty" element={<Sh_faculty />} />
        <Route path="/sciencedept/sh-lab-facility" element={<Sh_lab_facility />} />
        <Route path="/sciencedept/sh-research" element={<Sh_research/>} />
        <Route path="/sciencedept/science-programme" element={<Science_Programme/>} />
        <Route path="/csedept/cse-peo" element={<Cse_peo/>} />
        <Route path="/csedept/cse-lab" element={<Cse_lab/>} />
        <Route path="/csedept/cse-dept-events" element={<Cse_events/>} />
        <Route path="/civildept/civil-peo" element={<Civil_peo/>} />
        <Route path="/civildept/civil-faculties" element={<Civil_faculties/>} />
        <Route path="/civildept/civil-lab" element={<Civil_lab/>} />
        <Route path="/civildept/civil-dept-events" element={<Civil_events/>} />
        <Route path="/mechdept/mech-peo" element={<Mech_peo/>} />
        <Route path="/mechdept/mech-faculties" element={<Mech_faculties/>} />
        <Route path="/mechdept/mech-lab" element={<Mech_lab/>} />
        <Route path="/mechdept/mech-dept-events" element={<Mech_events/>} />
        <Route path="/eeedept/eee-peo" element={<Eee_peo/>} />
        <Route path="/eeedept/eee-faculties" element={<Eee_faculties/>} />
        <Route path="/eeedept/eee-lab" element={<Eee_lab/>} />
        <Route path="/eeedept/eee-dept-events" element={<Eee_events/>} />
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
        
        
        

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
