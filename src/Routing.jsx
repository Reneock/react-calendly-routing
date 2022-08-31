import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Individuals from "./components/Individuals";
import Team from "./components/Team";
import Enterprise from "./components/Enterprise";
import Navbars from "./components/Navbars";
import ErrorPage from "./components/ErrorPage";

function Routing(){
  return(
    <Router>
      <Navbars/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/individuals" element={<Individuals/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/enterprise" element={<Enterprise/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default Routing;