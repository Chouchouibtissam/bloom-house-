
import GoogleAuth from './Components/GoogleAuth';
import React, { Component } from "react"
import {render} from "react-dom";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";

function App(props) {
  return (
    <Router>
            <Routes>
                <Route path='/' element={<GoogleAuth/>} />
                <Route path='/Home' element={<Home/>} />
            </Routes>      
         
        </Router>
  );
}

export default App;
