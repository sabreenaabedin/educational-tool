import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectInfiniteHits } from 'react-instantsearch-dom';
import Button from '@material-ui/core/Button';

import './Search.css';

const searchClient = algoliasearch('FUG82HNJF7', '79cf8a98d1734a2741a4dfdb669c4762');



// const Hit = ({hit}, showContentPage) =>
//   <div className="hit">
//     {hit.title}
//     <Button onClick={() => showContentPage}> {"Read More"}</Button>
//   </div>



const InfiniteHits = ({
  hits,
  hasPrevious,
  refinePrevious,
  hasMore,
  refineNext,
}) => (
  <div>
    <button disabled={!hasPrevious} onClick={refinePrevious}>
      Show previous
    </button>
    <ol>
      {hits.map(hit => (
        <div className="hit">
            {hit.title}
            <Button onClick={() => showContentPage}> {"Read More"}</Button>
        </div>
      ))}
    </ol>
    <button disabled={!hasMore} onClick={refineNext}>
      Show more
    </button>
  </div>
);

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

class Search extends Component {

    showContentPage() {
        console.log("here")
    }
    render() {
        return (
            <InstantSearch searchClient={searchClient} indexName="blm-info" >
                <header className="search-header">
                    <SearchBox translations = {{placeholder:'Search'}}/>
                </header>
                <main>
                    {/* <InfiniteHits hitComponent = {Hit} className="content"/> */}
                    <CustomInfiniteHits />
                </main>
            </InstantSearch>
        );
    }
}

export default Search;