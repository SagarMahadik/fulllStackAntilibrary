import React, { useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import FancyItemTopContainer from './FancyItemTopContainer/FancyItemTopContainer';

import FancyItemBottomContainer from './FancyItemBottomContainer/FancyItemBottomContainer';

import GenreFancyItemContext from '../../Context/genreFancyITem/GenreFancyItemContext';

import Spinner from '../../components/Layout/Spinner';
export default function FancyItem({ match }) {
  const genreFancyItemContext = useContext(GenreFancyItemContext);
  const {
    fancyItemDetails,
    currentGenre,
    getFancyItemDetails,
    loading,
    setCurrentGenre
  } = genreFancyItemContext;

  useEffect(() => {
    console.log('I am in fancyITem');
    getFancyItemDetails(match.params.id);
    window.scrollTo(0, 0);
  }, []);
  console.log(fancyItemDetails);

  if (loading) {
    return <Spinner />;
  }
  return (
    <ThemeProvider
      theme={{ genre: `${currentGenre}` || fancyItemDetails.genre }}
    >
      <FancyItemTopContainer />
      <FancyItemBottomContainer />
    </ThemeProvider>
  );
}
