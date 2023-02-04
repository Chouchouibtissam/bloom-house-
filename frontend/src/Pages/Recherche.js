import React from 'react';
import { useState } from "react";
import FiltersSelect from '../Components/SearchBarComponent/Filters.js';
import { Box, Grid } from '@mui/material';
import { AnnonceData } from '../Data/DataAnnonces';
import { BiArea, BiBed, BiBath, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// replace the AnnounceData with the data fetched from the backend
//import axios from axios
// componentDidMount() {
//   // GET request using axios with error handling
//   axios.get('https://your.url.here')
//       .then(response => this.setState({ totalReactPackages: response.data.total }))
//       .catch(error => {
//           this.setState({ errorMessage: error.message });
//           console.error('There was an error!', error);
//       });
// }

export function MyCard({ id,type,name,wilaya, image, address, bedrooms,bathrooms,surface,price,description }) {  
  const [value, setValue] = useState('');

  const handleClick = (cardvalue) => {
    setValue(cardvalue)
    window.location.href = `/details/${cardvalue}`;
  };

  return (
   
    <div onClick={()=>handleClick(id)} className='mb-8 bg-white shadow-1 p-4 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
    <img className='mb-8' src={image} alt=''/>
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
      <div className='bg-violet-500 rounded-full text-white px-3'>{wilaya}</div>
    </div>
    <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
    <div className='flex gap-x-4 my-4'>
      <div className='flex items-center text-gray-600 gap-1'>
        <div className='text-[20px]'><BiBed /></div>
      </div>
      <div>{bedrooms}</div>
      <div className='flex items-center text-gray-600 gap-1'>
        <div className='text-[20px]'><BiBath /></div>
      </div>
      <div>{bathrooms}</div>
      <div className='flex items-center text-gray-600 gap-1'>
        <div className='text-[20px]'><BiArea /></div>
      </div>
      <div>{surface}m²</div>
    </div>
    <div className='mb-4 flex justify-between text-sm' >
    <div className='text-lg font-semibold text-violet-600 '>{price}DA</div>
    <div className='text-lg font-semibold text-green-500 '>{name}</div>
    </div>
  </div>

    
  );
}
const Recherche =() =>{
    
  const [searchStr, setSearchStr] = useState('');

  const handleSearch = (value) => {
     setSearchStr(value)
  }

  const filteredAnnonces = AnnonceData.filter(annonce => 
    annonce.name.toLowerCase().includes(searchStr.toLowerCase())||
    annonce.description.toLowerCase().includes(searchStr.toLowerCase())
    );

    return(
     
      <div className='px-[40px] py-6 w-full  mx-auto flex flex-col justify-between gap-4 lg:gap-x-3 realtive lg:top-4 lg:shadow-1 bg-white lg:bg-white lg:backdrop-blur '>
      <div className='px-[40px] py-6 max-w-[1170px]  max-h-[200px] mx-auto flex flex-col justify-between gap-4 lg:gap-x-3 realtive lg:top-4 lg:shadow-1 bg-white lg:bg- lg:backdrop-blur'>
         <FiltersSelect searchStr={searchStr} handleSearch={handleSearch} />            
      </div>
         <section className='mb-20 '> 
         <div className='container mx-auto'>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-14 mt-12'>
            {filteredAnnonces.map(({id,type,name,wilaya, imageLg, address, bedrooms,bathrooms,surface,price,description }, i) => (
              <Grid item xs={4} key={i}>
                <MyCard 
                    id={id}
                    type={type}
                    name={name}
                    wilaya={wilaya}
                    image={imageLg}
                    address={address}
                    bedrooms={bedrooms}
                    bathrooms={bathrooms}
                    surface={surface}
                    price={price}
                    description={description} 
                  />
              </Grid>))}
          </div>
        </div>
        </section>     
      </div>
         
    )
}
export default Recherche;