import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Movie from './Movie';

const Favorites = () => {
  const context = useContext(MovieContext);

  return (
    <div className="favorite-display">
      {context.favorites.map((movie) => (
        <div key={movie.imdbID}>
          <Movie movie={movie} isFavorite={true} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
