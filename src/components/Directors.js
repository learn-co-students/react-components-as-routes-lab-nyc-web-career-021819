import React from 'react';
import { directors } from '../data';
import { v4 } from 'uuid';

const renderMovies = (movies) => {
  return movies.map(movie => <li key={ v4() }>{movie}</li>)
}

const renderDirectors = () => {
  return directors.map(director => {
    return (
      <div key={ v4() }>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>{renderMovies(director.movies)}</ul>
      </div>
    )
  })
}


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
