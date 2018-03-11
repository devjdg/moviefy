import React, { Component } from 'react';
import Movies from './components/movies/Movies';
import SearchBar from './components/search/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Movies />
      </div>
    );
  }
}

export default App;
