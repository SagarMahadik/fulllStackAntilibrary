/**
 * File Name : GenreFancyItem.js
 * State value to be used to call the API and set Theme
 * Developer Note:
 * Parallax effect to be added
 * Position sticky needs rework
 */

import React, { useEffect, useContext, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GenreFancyItemGradient from './GenreFancyItemGradient';

import GenreFancyItemInformation from './GenreFancyItemInformation';
import GenreFancyItemContext from '../../Context/genreFancyITem/GenreFancyItemContext';
import Spinner from '../Layout/Spinner';

import {
  GenreDetaills,
  ContentContainer,
  GradientContainer
} from '../../styles/componentStyles/GenreFancyItem/genreFancyItem';

const GenreFancyItem = ({ match }) => {
  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const {
    getGenreFancyItemDetails,
    genreFancyItemDetails,
    loading,
    setCurrentGenre,
    currentGenre,
    getGenreName
  } = genreFancyItemContext;

  useEffect(() => {
    console.log(match.params);
    getGenreFancyItemDetails(match.params.genreName);
    setCurrentGenre(match.params.genreName);
    window.scrollTo(0, 0);
  }, []);

  if (loading || genreFancyItemDetails === undefined) {
    return <Spinner />;
  }

  return (
    <ThemeProvider theme={{ genre: currentGenre }}>
      <GradientContainer>
        <GenreFancyItemGradient />
        <GenreDetaills>{getGenreName(currentGenre)}</GenreDetaills>
      </GradientContainer>
      <ContentContainer>
        {genreFancyItemDetails.map(genreFancyItemDetail => (
          <GenreFancyItemInformation
            key={genreFancyItemDetail._id}
            genreFancyItemDetail={genreFancyItemDetail}
          />
        ))}
      </ContentContainer>
    </ThemeProvider>
  );
};

export default GenreFancyItem;
