import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GoogleAuth from './Components/GoogleAuth';
import React from "react";
import Home from "./Pages/Home";
import Mesannonces from './Pages/Mesannonces';
import Recherche from './Pages/Recherche';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';
import AjouterAnnonce from './Components/Annonce/AjouterAnnonce';
import GridComplexExample from './Components/Annonce/AfficherAnnonce';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
      <Routes>
        <Route path='/' element={<GoogleAuth />} />
        <Route path='/Home' element={
          <div className="App">
            <Home />
            <Recherche />
            <Mesannonces />
            <ContactUs />
            <Footer />
          </div>} />
        <Route path='/Ajouterannonce' element={<AjouterAnnonce />} />
      </Routes>
  );
}

export default App;
