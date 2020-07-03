import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Button from '@material-ui/core/Button';

import './Search.css';

const searchClient = algoliasearch('FUG82HNJF7', '79cf8a98d1734a2741a4dfdb669c4762');

const Hit = ({hit}) =>
  <div className="hit">
    {hit.title}
    <Button> {"Read More"}</Button>
  </div>

class Search extends Component {
    render() {
        return (
            <InstantSearch searchClient={searchClient} indexName="blm-info" >
                <header className="search-header">
                    <SearchBox translations = {{placeholder:'Search'}}/>
                </header>
                <main>
                    <Hits hitComponent = {Hit} className="content"/>
                </main>
            </InstantSearch>
        );
    }
}

export default Search;