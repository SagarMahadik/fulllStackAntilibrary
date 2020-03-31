import React, { useContext } from 'react';
import {
  SearchSuggestion,
  SearchResultImage,
  SearchResultContent,
  SearchResultName,
  SearchResultNotableWork
} from '../../styles/componentStyles/SearchBox/SearchResult';

import aynRand from '../../img/antilibraryImages/ayn_rand1.jpg';

import GenreFancyItemContext from '../../Context/genreFancyITem/GenreFancyItemContext';

import Spinner from '../Layout/Spinner';
export default function SearchResult({ searchText }) {
  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const { loading, searchResults } = genreFancyItemContext;

  const { _id, profilePicture, firstName, lastName } = searchResults;

  if (searchResults === undefined) {
    return <Spinner />;
  }

  if (searchText === '') {
    return null;
  }
  return (
    <React.Fragment>
      {searchResults.map(searchResult => (
        <SearchSuggestion to={`/FancyItem/${searchResult._id}`}>
          <SearchResultImage src={searchResult.profilePicture} />
          <SearchResultContent>
            <SearchResultName>
              {searchResult.firstName} {searchResult.lastName}
            </SearchResultName>
          </SearchResultContent>
        </SearchSuggestion>
      ))}
    </React.Fragment>
  );
}
