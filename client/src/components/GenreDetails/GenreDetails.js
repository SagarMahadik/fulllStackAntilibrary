/**
 * GenreDetails.js
 * Index file of the component
 * Future scope - Randomize the indexes in array
 */

import React, { useContext, Fragment, useState } from 'react';
import {
  GenreContainer,
  Genre,
  GenreName
} from '../../styles/componentStyles/GenreDetails/genreCommonStyles';

import { ThemeProvider } from 'styled-components';

import GenreGradient from './GenreGradient';
import GenreFancyItemContext from '../../Context/genreFancyITem/GenreFancyItemContext';
import { genres } from './GenreDetailsInfo';
import SearchBox from '../SearchBox/SearchBox';

const GenreDetails = () => {
  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const { getGenreName } = genreFancyItemContext;

  const [displayGenreContainer, setDisplayGenreContainer] = useState(true);

  return (
    <Fragment>
      <SearchBox setDisplayGenreContainer={setDisplayGenreContainer} />
      {displayGenreContainer && (
        <GenreContainer>
          {genres.map(genre => (
            <ThemeProvider theme={{ genre: `${genre.genreName}` }}>
              <Genre to={`/genreFancyitems/${genre.genreName}`}>
                <GenreGradient genreName={genre.genreName} />
                <GenreName>{getGenreName(genre.genreName)}</GenreName>
              </Genre>
            </ThemeProvider>
          ))}
        </GenreContainer>
      )}
    </Fragment>
  );
};

export default GenreDetails;
