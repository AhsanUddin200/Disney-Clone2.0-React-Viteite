import React from 'react'
import GenresList from '../Constant/GenresList'
import MoviesList from './MoviesList'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=15&&(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white 
                font-bold ml-48 inline border-b-2 border-gray-300 p-1'>{item.name}</h2> 
                <MoviesList genreId={item.id} index_={index} />   
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList