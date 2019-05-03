import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, indx) => <div key={indx}>{movie.title}, {movie.time} <ul>{movie.genres.map((genre, idx) => <li key={idx}>{genre}</li>)}</ul></div>)}
    </div>
  );
};

export default Movies;
