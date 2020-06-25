import React, { Component } from 'react';
import {Container}  from '@material-ui/core';
import './App.css';
import Results from './Results.js';
import ContentPage from './ContentPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <h1>Header here</h1>
          <h2>Searchbar Here</h2>
          <ContentPage />
          <Results />
        </Container>
      </div>
    );
  }
}

export default App;
