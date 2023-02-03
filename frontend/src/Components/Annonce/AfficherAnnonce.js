import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AnnonceContext } from './AnnonceContext';
import Annonce from './Annonce';

const AfficherAnnonce = () => {
    const{ Annonces} = useContext(AnnonceContext);
  return (
    <section className='mb-20'> 
     <div className='container mx-auto w-full'>
       <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-14'>
        {Annonces.map((annonce, index)=>{
    
            return(
                <Link to={`/details/${annonce.id}`} key={index}>
                <Annonce annonce={annonce}/>
                </Link>
            )
        })}
       </div>
     </div>
    </section>
  )
}

export default AfficherAnnonce