import React from 'react';
import { directors } from '../data';

const Directors = () => {

  function renderDirectors(){
    let directorArray = directors.map((director, index)=> {
      return <div key={index}>
            <h3>{director.name}</h3>
            <ul>{director.movies.map((movie)=>{
              return <li>{movie}</li>
            })}</ul>
            </div>
    })
    return directorArray
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
