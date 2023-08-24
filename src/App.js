import React from "react";
import { Routes, Route } from "react-router-dom";

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
  T3_twin,Ncc,Thiran,Sports,
  Aicte,
  Organisation,
  Under,
  Csedept,
  Govern,
   Ecedept,
   Annual_report,
   Academic,
   Fees,
   Ncc,Thiran,Sports
} from "./pages";
import "./App.css";

const App = () => {
  return (
    <div>
        <Navigation/>
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
        <Route path="/csedept" element={<Csedept/>} />
        <Route path="/govern" element={<Govern/>} />
        <Route path="/ecedept" element={<Ecedept/>} /> 
        <Route path="/annual_reports" element={<Annual_report/>} /> 
        <Route path="/academic-calendar" element={<Academic/>} /> 
        <Route path="/fee-structure" element={<Fees/>} /> 
        <Route path='/ncc' element={<Ncc/>}/>
        <Route path='/thiran' element={<Thiran/>}/>
        <Route path='/sports' element={<Sports/>}/>
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;