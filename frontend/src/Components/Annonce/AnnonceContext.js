import React, {useState, useEffect, createContext} from 'react'
import { AnnonceData } from '../../Data/DataAnnonces'

export const AnnonceContext = createContext();
const AnnoneContextProvider = ({children}) => {
    const [Annonces, setAnnonces] = useState(AnnonceData);
  return (
    <AnnonceContext.Provider value={{
       Annonces,
    }}>
    {children}
    </AnnonceContext.Provider>
  );
};

export default AnnoneContextProvider;