import React from "react";
import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./compontents/Home";
import SignIn from "./compontents/Sign_in";
import TextSimpSum from "./compontents/text_simp_sum";
import TemplateLibrary from "./compontents/TemplateLibrary";
import ClauseLibrary from "./compontents/ClauseLibrary";
import Profile from "./compontents/Profile";
import Temp1 from "./compontents/temp1";

function App() {
    return (
    <div>
      <Router>
        <Routes>
          <Route exact path={`/`} element={<Home/>}/>
          <Route exact path={`/Sign in`} element={<SignIn/>}/>
          <Route exact path={`/text simplification and summarization`} element={<TextSimpSum/>}/>
          <Route exact path={`/Template library`} element={<TemplateLibrary/>}/>
          <Route exact path={`/Clause library`} element={<ClauseLibrary/>}/>
          <Route exact path={`/Profile`} element={<Profile/>}/>
          <Route exact path={`/Deed of Adherence for Unequal Joint Venture Agreements`} element={<Temp1/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
