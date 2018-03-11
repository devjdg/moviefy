import React, { Component } from 'react';
import Movies from './components/movies/Movies';
import SearchBar from './components/search/SearchBar';
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <Movies />
      </Container>
    );
  }
}

export default App;
