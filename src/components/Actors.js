import { data } from 'jquery';
import React from 'react';
import { actors, movies } from '../data';

const Actors = () => {
  return (
    <div className="actor">
    <h1>Actors Page</h1>
    {actors.map((a, idx) => (
      <div key={idx}>
        <h3>Name: {a.name}</h3>
        <p>Movies:</p>
    <ul>
      {a.movies.map((m, idx) => (
        <li key={idx}>{m}</li>
        ))}
    </ul>
    </div>
  ))};
  </div>
  )
};

export default Actors;
