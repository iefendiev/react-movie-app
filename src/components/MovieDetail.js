import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=9ad7f155&i=${movieID}`,
        {
          method: 'GET',
        }
      );
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie(movieID);
  }, [movieID]);
  console.log(movie);

  return movie ? (
    <div className="movie-div-detail">
      <img
        alt="movie-poster"
        src={movie.Poster}
        className="movie-poster-detail"
      />
      <div className="movie-contents-detail">
        <div className="upper-detail">
          <div className="title-detail">{movie.Title}</div>
          <div className="year-detail">({movie.Year})</div>
          <div style={{ fontSize: '1.3rem' }}>
            Rating: {movie.Ratings[0].Value}
          </div>
        </div>
        <div className="plot-detail">
          <span style={{ fontWeight: '800', fontSize: '2rem' }}>Plot: </span>
          {movie.Plot}
        </div>
      </div>
    </div>
  ) : (
    <h2 style={{ color: 'white' }}>Loading...</h2>
  );
};

export default MovieDetail;
