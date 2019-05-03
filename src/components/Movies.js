import React from 'react';
import { movies } from '../data';
import { v4 } from 'uuid';


const renderGenres = (movie) => {
  return movie.genres.map(genre => <li key={ v4() }>{genre}</li>)
}

const renderMovies = () => {
  return movies.map(movie => {
    return (
      <div key={ v4() }>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
          <ul>
            {renderGenres(movie)}
          </ul>
      </div>
    )
  })
}


const Movies = () => {
  return (
    <div>
        <h1>Movies Pages</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
