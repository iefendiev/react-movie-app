import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { HeartIcon as HeartEmpty } from '@heroicons/react/outline';
import { HeartIcon as HeartFull } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Movie = ({ movie, isFavorite }) => {
  const context = useContext(MovieContext);

  const findItem = (item) => {
    const found = context.movies.find(
      (element) => element.imdbID === item.imdbID
    );
    return found;
  };

  const handleFavorite = (movie) => {
    if (!context.favorites.includes(movie)) {
      context.setFavorites([...context.favorites, findItem(movie)]);
    } else {
      const favArray = context.favorites.filter(
        (film) => film.imdbID !== movie.imdbID
      );
      context.setFavorites(favArray);
    }
  };

  return (
    <div className="movie" key={movie.imdbID}>
      <Link to={`/${movie.imdbID}`}>
        <img alt="movie-poster" className="movie-poster" src={movie?.Poster} />
      </Link>
      <Link to={`/${movie.imdbID}`} className="movie-contents">
        <div className="title-year">
          <div className="movie-title">{movie?.Title}</div>
          <div className="movie-year">({movie?.Year})</div>
        </div>
      </Link>
      <div className="favorite-button" onClick={() => handleFavorite(movie)}>
        {isFavorite ? (
          <HeartFull className="heartFull" />
        ) : (
          <HeartEmpty className="heartEmpty" />
        )}
      </div>
    </div>
  );
};

export default Movie;
