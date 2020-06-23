import React, { Component } from 'react';
import {Container}  from '@material-ui/core';
import './App.css';
import Results from './Results.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <h1>Header here</h1>
          <h2>Searchbar Here</h2>
          <h5>Example Page Here</h5>
          <Results />
        </Container>
      </div>
    );
  }
}

export default App;
