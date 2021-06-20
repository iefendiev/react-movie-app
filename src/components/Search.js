import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
import { FilmIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Search = () => {
  const context = useContext(MovieContext);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="search-div">
      <Link to="/" className="logo-section">
        <FilmIcon className="film-icon" /> MovieApp
      </Link>
      <div className="search-section">
        <form onSubmit={context.handleSubmit}>
          <input
            required
            placeholder="Search a Movie..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <Link to="/favorites" className="favorites-div">
        Favorites
      </Link>
    </div>
  );
};

export default Search;
