import React, { Component } from 'react';
import './App.css';
// import Results from './Results.js';
import ContentPage from './ContentPage/ContentPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <h1>Basic Guide to BLM Title</h1>
          </div>
          <h2 class="searchbar">Searchbar Here</h2>
          <ContentPage />
          {/* <Results /> */}
      </div>
    );
  }
}

export default App;
