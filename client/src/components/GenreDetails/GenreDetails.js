import React from 'react';
import {
  GenreContainer,
  Genre,
  GenreName
} from '../../styles/componentStyles/GenreDetails/genreCommonStyles';

import {
  TheGrandPhilisophers,
  GuidingLights,
  ArchitectsOfFuture,
  MaverickScientists,
  Luminaries,
  MenOfLetters
} from '../../styles/componentStyles/GenreDetails/genreDetails';
import FancyItem from '../FancyItem/FancyItem';
import { BrowserRouter, Switch } from 'react-router-dom';

const GenreDetails = () => {
  return (
    <GenreContainer>
      <TheGrandPhilisophers to="/genreFancyitems/theGrandPhilosophers">
        <GenreName>The Grand Philosophers</GenreName>
      </TheGrandPhilisophers>
      <GuidingLights to="/genreFancyitems/guidingLights">
        <GenreName>Guiding Lights</GenreName>
      </GuidingLights>
      <ArchitectsOfFuture to="/genreFancyitems/architectsOfTheFuture">
        <GenreName>Architects Of The Future</GenreName>
      </ArchitectsOfFuture>
      <MaverickScientists to="/genreFancyitems/mavericScientists">
        <GenreName>Maveric Scientists</GenreName>
      </MaverickScientists>
      <MenOfLetters to="/genreFancyitems/menOfLetters">
        <GenreName>Men Of Letters</GenreName>
      </MenOfLetters>
      <Luminaries to="/genreFancyitems/luminaries">
        <GenreName>Luminaries</GenreName>
      </Luminaries>
    </GenreContainer>
  );
};

export default GenreDetails;
