import './App.css';
import { useState, useEffect } from 'react';
import { MovieContext } from './context/MovieContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import Movies from './components/Movies';
import Favorites from './components/Favorites';
import MovieDetail from './components/MovieDetail';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const favMovies = JSON.parse(window.localStorage.getItem('FavoriteMovies'));

  useEffect(() => {
    if (favMovies) {
      setFavorites(favMovies);
    }
  }, []);

  const fetchMovies = async (searchText) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=9ad7f155&type=movie&s=${searchText}`,
      {
        method: 'GET',
      }
    );
    const data = await res.json();
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(e.target[0].value).then((data) => {
      setMovies(data.Search);
    });
  };

  return (
    <Router>
      <MovieContext.Provider
        value={{
          movies,
          setMovies,
          handleSubmit,
          favorites,
          setFavorites,
        }}
      >
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div className="App">
                <Search />
                <Movies />
              </div>
            )}
          />
          <Route
            path="/favorites"
            exact
            render={() => (
              <div className="App">
                <Search />
                <Favorites />
              </div>
            )}
          />
          <Route
            path="/:movieID"
            exact
            render={() => (
              <div className="App">
                <Search />
                <MovieDetail />
              </div>
            )}
          />
        </Switch>
      </MovieContext.Provider>
    </Router>
  );
}

export default App;
