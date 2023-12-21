import React from 'react'

import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'
import nationallG from './../assets/Images/nationalG.png'


import disneyV from './../assets/Videos/disneyV.mp4'
import marvelV from './../assets/Videos/marvelV.mp4'
import pixarV from './../assets/Videos/pixarV.mp4'
import nationalGeographicV from './../assets/Videos/nationalGeographicV.mp4'
import starwarV from './../assets/Videos/starwarsV.mp4'

const ProductionHouse = () => {

    const ProductionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },

        {
            id:2,
            image:pixar,
            video:pixarV
        },

        {
            id:3,
            image:starwar,
            video:starwarV
        },

        {
            id:4,
            image:nationallG,
            video:nationalGeographicV
        },

        {
            id:5,
            image:marvel,
            video:marvelV
        },

    ]
  return (

    <div className='flex  gap-2 md:gap-4 px-1 py-11 ml-64'>
       {ProductionHouseList.map((item)=>(
          <div className='border-[3px] border-gray-500 rounded-md hover:scale-110 translate-all duration-200 ease-in-out  cursor-pointer  relative z-[2] shadow-2xl shadow-gray-700' >
             <video src={item.video} 
            autoPlay 
            loop 
            playsInline
            className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-60 shadow-4xl'/>
            <img src={item.image}  className='w-full '/>
           
            </div>

       ))}
    </div>
  )
}

export default ProductionHouse
