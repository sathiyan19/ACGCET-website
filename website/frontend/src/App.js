import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import { Navigation, Footer,Chatbot } from "./components";

import {
  Home,
  Milestones,
  About,
  Vision,

  Clubs,
  Build,
  
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
  Physicsdept,
  Physics_faculty,
  Physics_lab_facility,
  Physics_research,
  Physics_programme,
  Physics_former_prof,
  Chemistrydept,
  Chemistry_faculty,
  Chemistry_lab_facility,
  Chemistry_research,
  Chemistry_programme,
  Mathsdept,
  Maths_faculty,
  Maths_lab_facility,
  Maths_research,
  Maths_programme,
  Englishdept,
  English_faculty,
  English_lab_facility,
  English_research,
  English_programme,
  Govern,
  Thiran,
  Sports,
  Cse_faculties,
  Ecedept,
  Ece_peo,
  Ece_faculties,
  Ece_lab,
  Ece_rankers,
  Ece_alumni91,
  Ece_alumni92,
  Ece_alumni93,
  Ece_events,
  Ece_projects,
  Ece_stud_activity,
  Ece_antenna,
  Ece_elect_test_coe,
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
  Mech_achievements,
  Eee_peo,
  Eee_faculties,
  Eee_lab,
  Eee_events,
  Ece_placement,
  
  Iqac,
  Iqac_min,
  Iqac_aqar,
  Iqac_feed,
  Iqac_practices,
  Iqac_distinctiveness,
  Iqac_std_statisfy,

  Nba,
  Nbadoc,
  Nba_sar,
  Nirf,
  Iic,
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
  
  Naac_best_practices,
  Naac_best2324,
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
  Rti,
  Ignatz,
  Typhonz_page,
  Phoenix,
  Akkadians,
  Audit_stmt,
  Verification,
  Dash_results,
  Iqac_strategic,
  Autonomous,
  Placement_faq,
  Placement_wk_training,
  Placement_stats,
  Placement_companies,
  Iqac_committee,
  Sgpa,
  

  Feedback,
  Alumini_fb,
  Collaborator_fb,
  Employer_fb,
  Supplier_fb,
  Parents_fb,
  Student_fb,
  Std_teaching_fb,
  Practical_fb,
  Technical_fb,
  BoG,
  
  Consultancy_fb,
  FeedbackPdf,
  Std_mini_project_fb,
  Ece_alumni,
  Ece_alumni_notable,
  Sports_achivement
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

        <Route path="/physicsdept" element={<Physicsdept />} />
        <Route path="/physicsdept/physics-faculty" element={<Physics_faculty />} />
        <Route path="/physicsdept/physics-lab-facility" element={<Physics_lab_facility />} />
        <Route path="/physicsdept/physics-programme" element={<Physics_programme />} />
        <Route path="/physicsdept/physics-research" element={<Physics_research />} />
        <Route path="/physicsdept/physics-former-prof" element={<Physics_former_prof />} />

        <Route path="/chemistrydept" element={<Chemistrydept />} />
        <Route path="/chemistrydept/chemistry-faculty" element={<Chemistry_faculty />} />
        <Route path="/chemistrydept/chemistry-lab-facility" element={<Chemistry_lab_facility />} />
        <Route path="/chemistrydept/chemistry-programme" element={<Chemistry_programme />} />
        <Route path="/chemistrydept/chemistry-research" element={<Chemistry_research />} />
        
        <Route path="/mathsdept" element={<Mathsdept />} />
        <Route path="/mathsdept/maths-faculty" element={<Maths_faculty />} />
        {/* <Route path="/mathsdept/maths-lab-facility" element={<Maths_lab_facility />} /> */}
        <Route path="/mathsdept/maths-programme" element={<Maths_programme />} />
        <Route path="/mathsdept/maths-research" element={<Maths_research />} />

        <Route path="/englishdept" element={<Englishdept />} />
        <Route path="/englishdept/english-faculty" element={<English_faculty />} />
        <Route path="/englishdept/english-lab-facility" element={<English_lab_facility />} />
        <Route path="/englishdept/english-programme" element={<English_programme />} />
        {/* <Route path="/englishdept/english-research" element={<English_research />} /> */}

        <Route path="/govern" element={<Govern />} />
        <Route path="/ncc" element={<Ncc />} />
        <Route path="/thiran" element={<Thiran />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/sportsachievement" element ={<Sports_achivement/>} />
        <Route path="/ecedept" element={<Ecedept />} />
        <Route path="/annual_reports" element={<Annual_report />} />
        <Route path="/academic-calendar" element={<Academic />} />
        <Route path="/fee-structure" element={<Fees />} />
        <Route path="/ecedept/ece-peo" element={<Ece_peo />} />
        <Route path="/ecedept/Ece_elect_test_coe" element={<Ece_elect_test_coe />} />

        <Route path="/ecedept/ece-faculties" element={<Ece_faculties />} />
        <Route path="/ecedept/ece-lab" element={<Ece_lab />} />
        <Route path="/ecedept/ece-research" element={<Ece_research />} />
        <Route path="/ecedept/ece-rankers" element={<Ece_rankers/>} />
        <Route path="/mechdept/mech-rankers" element={<Mech_rankers/>} />
        <Route path="/ecedept/ece-dept-events" element={<Ece_events/>} />
        <Route path="/ecedept/ece-projects" element={<Ece_projects/>} />
        <Route path="/ecedept/ece-alumni91" element={<Ece_alumni91/>} />
        <Route path="/ecedept/ece-alumni92" element={<Ece_alumni92/>} />
        <Route path="/ecedept/ece-alumni93" element={<Ece_alumni93/>} />
        <Route path="/ecedept/ece-alumninotable" element={<Ece_alumni_notable/>} />
        <Route path="/ecedept/ece-alumni" element={<Ece_alumni/>} />
        <Route path="/ecedept/ece-student-activity" element={<Ece_stud_activity/>} />
        <Route path="/ecedept/ece-antenna-testing" element={<Ece_antenna/>} />
        
        <Route path="/csedept/cse-faculties" element={<Cse_faculties/>} />
        <Route path="/civildept" element={<Civildept/>} />
        {/* <Route path="/mechdept" element={<Under/>} /> */}
        <Route path="/mechdept" element={<Mechdept/>} />
        <Route path="/eeedept" element={<Eeedept/>} />
        <Route path="/eeedept/eee-modern" element={<Eee_modern/>}/>
        <Route path="/eeedept/eee-studcorner" element={<Eee_studcorner/>}/>
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
        <Route path="/iqac_practices" element={<Iqac_practices/>} />
        <Route path="/iqac_distinctiveness" element={<Iqac_distinctiveness/>} />
        <Route path="/iqac_std_statisfy" element={<Iqac_std_statisfy/>} />
        <Route path="/iqac_committee" element={<Iqac_committee/>} />
        
        <Route path="/naacbestpractices" element={<Naac_best_practices/>}/>
        <Route path="/naacbest2324" element={<Naac_best2324/>}/>
        <Route path="/nba" element={<Nba/>} />
        <Route path="/nba/nbadoc" element={<Nbadoc/>} />
        <Route path="/nba/nba_sar" element={<Nba_sar/>} />
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
        <Route path="/mechdept/mech-achievements"element={<Mech_achievements/>}/>
        <Route path="/placement" element={<Placement />} />
        <Route path="/placement/faqs" element={<Placement_faq/>}/>
        <Route path="/placement/Placement_wk_training" element={<Placement_wk_training/>}/>
        <Route path="/placement/placement_statistics" element={<Placement_stats/>}/>
        <Route path="/placement/our_recruiters" element={<Placement_companies/>}/>
        <Route path="/mechdept/mech-centre-of-excellance"element={<Mech_coe/>}/>
         
         <Route path="/coe"element={<Coe/>}/>
         <Route path="/coe/coe_adminstration"element={<Coe_Adminstration/>}/>
         <Route path="/coe/coe_academic"element={<Coe_Academic/>}/>
         <Route path="/coe/coe_link"element={<Coe_link/>}/>
         <Route path="/coe/coe_contact"element={<Coe_Contact/>}/>
        <Route path="/login-page" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/results" element={<Dash_results/>}/>
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
         <Route path="/rti" element={<Rti/>}/>
         <Route path="/clubs/build_club" element={<Build/>}/>
         
         <Route path="/audit_stmt" element={<Audit_stmt/>}/>
         <Route path="/verification" element={<Verification/>}/>
         <Route path="/iqac_strategic" element={<Iqac_strategic/>}/>
         <Route path="/autonomous" element={<Autonomous/>}/>
         <Route path="/sgpa" element={<Sgpa/>}/>

         <Route path="/feedback/Feedback" element={<Feedback/>}/>
         <Route path="/feedback/alumini_fb" element={<Alumini_fb/>}/>
         <Route path="/feedback/Student_fb" element={<Student_fb/>}/>
         <Route path="/feedback/Std_teaching_fb" element={<Std_teaching_fb/>}/>
         <Route path="/feedback/std_mini_project_fb" element={<Std_mini_project_fb/>}/>

         <Route path="/feedback/collaborator_fb" element={<Collaborator_fb/>}/>
         <Route path="/feedback/student_fb" element={<Student_fb/>}/>
         <Route path="/feedback/Std_teaching_fb" element={<Std_teaching_fb/>}/>
         <Route path="/feedback/Practical_fb" element={<Practical_fb/>}/>
         <Route path="/feedback/Technical_fb" element={<Technical_fb/>}/>
         <Route path="/feedback/parents_fb" element={<Parents_fb/>}/>
         <Route path="/feedback/consultancy_fb" element={<Consultancy_fb/>}/>
         <Route path="/feedback/supplier_fb" element={<Supplier_fb/>}/>
         <Route path="/feedback/employer_fb" element={<Employer_fb/>}/>
         <Route path="/FeedbackPdf" element={<FeedbackPdf/>}/>

         <Route path="/BoG" element={<BoG/>}/>
      </Routes>
      {/* <Chatbot/> */}
      <Footer />
    </div>
  );
};

export default App;
