import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import './App.css';
import ContentPage from './ContentPage/ContentPage.js';
// import Results from './Results.js';

const searchClient = algoliasearch('FUG82HNJF7', '79cf8a98d1734a2741a4dfdb669c4762');

const Hit = ({hit}) =>
  <div className="hit">
      <div>
        {hit.title}
      </div>
  </div>

const Content = () =>
  <div className = "content">
    <Hits hitComponent = {Hit}/>
  </div>

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <h1>Equity Blueprint</h1>
            <h3>An Ally's Guide to BLM</h3>
          </div>
          <div>
            <InstantSearch searchClient={searchClient} indexName="blm-info" >
              <header class="search-header">
                <SearchBox translations = {{placeholder:'Search'}}/>
              </header>
              
              <main>
                <Content />
              </main>
              
            </InstantSearch>
          </div>
          
          
          <ContentPage />
          {/* <Results /> */}
      </div>
    );
  }
}

export default App;