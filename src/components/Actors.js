import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function renderActors(){
    let actorArray = actors.map((actor, index)=> {
      return <div key={index}>
            <h3>{actor.name}</h3>
            <ul>{actor.movies.map((movie)=>{
              return <li>{movie}</li>
            })}</ul>
            </div>
    })
    return actorArray
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
}

export default Actors;
