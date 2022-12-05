import React from 'react';
import SearchBar from './SearchBar';
import { MovieList } from './MovieList';
import './MovieSearch.css';

function MovieSearch() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <MovieList />
      </header>
    </div>
  );
}

export default MovieSearch;
