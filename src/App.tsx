import React from 'react';
import SearchBar from './SearchBar';
import { ListMovies } from './features/list-movies/ListMovies';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <ListMovies />
      </header>
    </div>
  );
}

export default App;
