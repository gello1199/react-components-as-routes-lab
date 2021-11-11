import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movies">
        <h1>Movies Page</h1>
        {movies.map((m, idx) => (
          <div key={idx}>
          <h3>Name: {m.title} </h3>
          <p>Time: {m.time}</p>
          <p>Genres: </p>
          <ul>
            {m.genres.map((g, idx) => (
              <li key={idx}>{g}</li>
            ))}
          </ul>

          </div>
        ))}
    </div>
  );
};

export default Movies;
