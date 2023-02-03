import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleAuth from './Components/GoogleAuth';
import React, { useState} from "react";
import Home from "./Pages/Home";
import Mesannonces from './Pages/Mesannonces';
import Recherche from './Pages/Recherche';
import ContactUs from './Pages/ContactUs';
import AnnonceDetails from './Components/Annonce/AnnonceDetails';
import AppBar from './Components/GeneralAppBar/AppBar';
import MobileAppBar from './Components/GeneralAppBar/MobileAppBar';
function App(props) {
  const[isOpen, setIsOpen]=useState(false)
   const toggle = () =>{
    setIsOpen(!isOpen)
   }
  return (
    <>
    <MobileAppBar isOpen={isOpen} toggle={toggle} />
    <AppBar toggle={toggle} />
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="Recherche" element={<Recherche/>}/>
       <Route path="/details/:id" element={<AnnonceDetails />}/>
       <Route path="Mesannonces" element={<Mesannonces />} />
       <Route path="/details/:id" element={<AnnonceDetails />}/>
       <Route path="ContactUs" element={<ContactUs />}/>
  </Routes>
    </>
    
  );
}

export default App;
