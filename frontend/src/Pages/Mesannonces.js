import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AfficherAnnonce from '../Components/Annonce/AfficherAnnonce';



export default function Mesannonces() {
    return (
      <section className='mb-20 mt-20'> 
      <Box sx={{ '& > :not(style)': { m: 1 } }} className='flex flex-col items-center mb-10'>
      <button className='bg-violet-700 hover:bg-violet-800 rounded p-4 text-sm transition font-bold'> 
          <Link to="/AjouterAnnonce" className='text-white'>Ajouter  annonce</Link> 
      </button>
      </Box>
      <div className='container mx-auto'>
          <AfficherAnnonce />
           </div>
        </section>
    )
}