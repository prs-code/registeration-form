import React from "react";
import {Routes, Route} from 'react-router-dom';
import app from "./App.css";


import IntroBtn from "./components/IntroBtn";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <IntroBtn /> }/>
        <Route path="/SignUp" element={ <SignUp />} />
        <Route path="/SignIn" element={ <SignIn />} />
      </Routes>

    </div>
  );
}

export default App;
