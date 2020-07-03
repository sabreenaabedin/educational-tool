import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search.js';
import ContentPage from './Search/ContentPage.js';
import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Container fluid>
            <h1>Equity Blueprint</h1>
            <h3>An Ally's Guide to BLM</h3>
          </Container>
        </div>
          <Container fluid>
            <Search />
            <ContentPage />
          </Container>
      </div>
    );
  }
}

export default App;