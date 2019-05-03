import React from 'react';
import { movies } from '../data';

const Movies = () => {
  function renderMovies(){
    let movieArray = movies.map((movie, index)=>{
      return <div key={index}>
              <h3>{movie.title}</h3>
              <h3>{movie.time}</h3>
              <ul>{movie.genres.map((genre)=>{
                return <li>{genre}</li>
              })}</ul>
            </div>
    })
    return movieArray
  }
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
