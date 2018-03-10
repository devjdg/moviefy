import React, { Component } from 'react';
import Movies from './components/movies/Movies';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>    
        <Movies/>
      </div>
    );
  }
}

export default App;
