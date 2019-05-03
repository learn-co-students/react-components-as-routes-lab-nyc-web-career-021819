import React from 'react';
import { actors } from '../data';
import { v4 } from 'uuid';

const renderMovies = (movies) => {
  return movies.map(movie => <li key={ v4() }>{movie}</li>)
}

const renderActors = () => {
  return actors.map(actor => {
    return (
      <div key={ v4() }>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        <ul>{renderMovies(actor.movies)}</ul>
      </div>
    )
  })
}


const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
}

export default Actors;
