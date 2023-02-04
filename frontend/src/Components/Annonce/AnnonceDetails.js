import React from 'react'
import { useParams } from 'react-router-dom'
import { AnnonceData } from '../../Data/DataAnnonces'
import { BiBed, BiBath, BiArea, BiMap } from 'react-icons/bi'

const AnnonceDetails = () => {
    // get the annonce id
    const {id} =useParams();
    // get the annonce based on the id
    const annonce = AnnonceData.find((annonce) =>{
        return annonce.id === parseInt(id);
    });
  return (
    <section >
        <div className='overscroll-none container mx-auto min-h-[800px] mb-14 mt-14'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                <div>
                    <h1 className='text-2x1 font-semibold '>{annonce.name}</h1>
                    <div className='flex  gap-x-2 items-center mb-4'>
                          <BiMap  className='text-2xl'/>
                          <div> <a href=" " className='text-lg mb-4'>{annonce.address}</a></div>
                     </div>
                </div>
                <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                    <div className='bg-green-500 text-white px-3 rounded-full'>{annonce.type}</div>
                    <div className='bg-violet-500 text-white px-3 rounded-full'>{annonce.wilaya}</div>
                </div>
                <div className='text-3xl font-semibold text-violet-600'>{annonce.price} DA</div>
            </div>
            <div className='flex flex-col items-start gap-8 lg:flex-row'>
                <div className='max-w-[768px]'>
                    <div className='mb-8'>
                        <img src={annonce.imageLg} alt='' ></img>
                    </div>
                    <div className='flex gap-x-6 text-violet-700 mb-6'>
                        <div className='flex  gap-x-2 items-center'>
                          <BiBed  className='text-2xl'/>
                          <div>{annonce.bedrooms}</div>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                          <BiBath className='text-2xl'/>
                          <div>{annonce.bathrooms}</div>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                          <BiArea className='text-2xl'/>
                          <div>{annonce.surface}m²</div>
                        </div>
                    </div>
                    <div>{annonce.description}</div>
                </div>
                <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                    <div className='flex items-center gap-x-4 mb-8'>
                        <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                            <img  src={annonce.agent.image} alt=''/>
                        </div>
                        <div>
                          <div className='font-bold text-lg'>{annonce.agent.name}</div>
                        </div>  
                    </div>
                    <form className='flex flex-col gap-y-4'>
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                        rounded w-full px-4 h-14 text-sm' type='text'placeholder='Name'/>
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                        rounded w-full px-4 h-14 text-sm' type='text' placeholder='Email'/>
                        <input className='border border-gray-300 focus:border-violet-700 outline-none
                        rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone'/>
                        <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message' defaultValue='Hello i am interested in Modern apartement'></textarea>
                        <div className='flex gap-x-2'>
                            <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send message</button>
                            <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>Call</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AnnonceDetails