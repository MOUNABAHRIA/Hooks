import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, nameSearch}) => {
  const Search=()=>{
    return movies.filter((film)=>
    {
      
     return film.name.toLowerCase().includes(nameSearch.toLowerCase())
    })

  }
  return (
    <div style={{
   
      display: "flex",
     flexDirection:"row",
     justifyContent:"space-around",
      margin:"30px",
      padding:"30px",
      position: "relative",
     
     } }>
        {Search().map((movie,index)=><MovieCard movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default MovieList