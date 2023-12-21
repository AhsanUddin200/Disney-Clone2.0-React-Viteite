import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi2';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;


function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();

    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-90
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-90
    }
  return (
    <div>
        <HiOutlineChevronDoubleLeft className="hidden md:block text-white text-[35px] absolute
        mx-8 mt-[350px] cursor-pointer left-11" 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiOutlineChevronDoubleRight className='hidden md:block text-white text-[35px] absolute
        mx-8 mt-[350px] cursor-pointer right-96' 
        onClick={()=>sliderRight(elementRef.current)}/>

   
    <div className=' flex overflow-x-auto px-2 py-2
    scrollbar-none scroll-smooth ml-64 ' ref={elementRef}> 
        {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='max-w-full  md:h-[310px] object-cover
            object-left-top mr-6 rounded-md hover:border-[8px] 
            border-gray-800 transition-all duration-300 ease-in-out mt-36'/>
        ))}
    </div>
    </div>
  )
}

export default Slider