// imports from dependencies 
import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
// import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';

// internal imports
import './App.css';
import ContentPage from './ContentPage/ContentPage.js';
// import Results from './Results.js';

const searchClient = algoliasearch('FUG82HNJF7', '79cf8a98d1734a2741a4dfdb669c4762');

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <h1>Basic Guide to BLM Title</h1>
          </div>
          <div class="searchbar">
            <InstantSearch searchClient={searchClient} indexName="blm-info">
              <SearchBox translations = {{placeholder:'Search'}}/>
            </InstantSearch>
          </div>
          
          <ContentPage />
          {/* <Results /> */}
      </div>
    );
  }
}

export default App;
