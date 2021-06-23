import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Movie from './Movie';

const Movies = () => {
  const context = useContext(MovieContext);

  const favoriteFunc = (imdbID) => {
    return context.favorites?.find((item) => item.imdbID === imdbID);
  };

  return context.movies ? (
    <div className="movies">
      {context.movies.map((movie) => (
        <div key={movie.imdbID}>
          <Movie movie={movie} isFavorite={favoriteFunc(movie.imdbID)} />
        </div>
      ))}
    </div>
  ) : (
    <div style={{ color: 'white' }}>No matched movie</div>
  );
};

export default Movies;
