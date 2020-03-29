import React, { useContext } from 'react';
import {
  GenreContainer,
  Genre,
  GenreName
} from '../../styles/componentStyles/GenreDetails/genreCommonStyles';

import { ThemeProvider } from 'styled-components';

import {
  TheGrandPhilisophers,
  GuidingLights,
  ArchitectsOfFuture,
  MaverickScientists,
  Luminaries,
  MenOfLetters
} from '../../styles/componentStyles/GenreDetails/genreDetails';

import Book from '../Icons/Book';
import FancyItem from '../FancyItem/FancyItem';
import { BrowserRouter, Switch } from 'react-router-dom';
import GenreGradient from './GenreGradient';
import GenreFancyItemContext from '../../Context/genreFancyITem/GenreFancyItemContext';

const GenreDetails = () => {
  const genres = [
    {
      genreName: 'guidingLights',
      genreGradientColor: '#f86600ce'
    },
    {
      genreName: 'luminaries',
      genreGradientColor: '#34e89ece'
    },
    {
      genreName: 'architectsOfTheFuture',
      genreGradientColor: '#1cb5e0ce'
    },
    {
      genreName: 'theGrandPhilosophers',
      genreGradientColor: '#a044ffce'
    },
    {
      genreName: 'mavericScientists',
      genreGradientColor: '3b4490ff'
    },
    {
      genreName: 'menOfLetters',
      genreGradientColor: '#dd1818ce'
    }
  ];

  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const { getGenreName } = genreFancyItemContext;

  return (
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
  );
};

export default GenreDetails;
