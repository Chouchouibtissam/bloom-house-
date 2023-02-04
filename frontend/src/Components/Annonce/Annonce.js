import React from 'react'
import {BiBed, BiBath, BiArea, BiTrash} from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Annonce = ({annonce}) => {
  const {imageLg, type, name, wilaya, address, bedrooms, bathrooms,surface, price} = annonce;
  return (
    <div className='mb-8 bg-white shadow-1 p-4 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={imageLg} alt=''/>
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
      <div className='bg-blue-500 mt-4 shadow-1 p-1 rounded-lg w-10  mx-auto cursor-pointer hover:shadow-2xl transition'>
      <div className='mb-1 flex flex-col items-center' >
      <div className='flex items-center'>
        <div className='text-[20px]'>
        <Link to="/" className='text-white'><BiTrash /></Link> 
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Annonce;