import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GoogleAuth from './Components/GoogleAuth';
import React, { Component } from "react"
import {render} from "react-dom";
import Home from './Pages/Home';
import Mesannonces from './Pages/Mesannonces';
import Recherche from './Pages/Recherche';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';

function App(props) {
  return (
    <div className="App">
    <Home />
    <Recherche />
    <Mesannonces />
    <ContactUs />
    <Footer />
   </div>
  );
}

export default App;
