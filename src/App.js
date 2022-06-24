import React from "react";
import {Routes, Route} from 'react-router-dom';
import app from "./App.css";


import IntroBtn from "./components/IntroBtn";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <IntroBtn /> }/>
        <Route path="/SignUp" element={ <SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
