import React, { useReducer } from 'react';

import axios from 'axios';
import GenreFancyItemReducer from './GenreFancyItemReducer';
import GenreFancyItemContext from './GenreFancyItemContext';
import {
  GET_GENREFANCYITEMS,
  SET_CURRENTGENRE,
  GET_FANCYITEMDETAILS,
  SET_LOADING
} from '../types';

const GenreFancyItemState = props => {
  const initialState = {
    genreFancyItemDetails: [],
    fancyItemDetails: [],
    loading: false,
    currentGenre: ''
  };

  const [state, dispatch] = useReducer(GenreFancyItemReducer, initialState);

  const getGenreFancyItemDetails = async genreName => {
    setLoading();
    console.log(genreName);
    const res = await axios.get(`/api/v1/genreFancyItem/${genreName}`);

    dispatch({
      type: GET_GENREFANCYITEMS,
      payload: res.data.data.data
    });
  };

  const getFancyItemDetails = async fancyItemId => {
    setLoading();
    const res = await axios.get(`/api/v1/fancyItem/details/${fancyItemId}`);

    dispatch({
      type: GET_FANCYITEMDETAILS,
      payload: res.data.data.data
    });
  };

  const setCurrentGenre = async genreName => {
    console.log(genreName);
    dispatch({
      type: SET_CURRENTGENRE,
      payload: genreName
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  const getGenreName = genre => {
    switch (genre) {
      case 'guidingLights':
        return 'Guiding Lights!';
      case 'luminaries':
        return 'Luminaries!';
      case 'mavericScientists':
        return 'Maveric Scientists!';
      case 'menOfLetters':
        return 'Men Of Letters';
      case 'theGrandPhilosophers':
        return 'The Grand Philosophers';
      case 'architectsOfTheFuture':
        return 'Architects Of The Future';
    }
  };

  return (
    <GenreFancyItemContext.Provider
      value={{
        genreFancyItemDetails: state.genreFancyItemDetails,
        fancyItemDetails: state.fancyItemDetails,
        currentGenre: state.currentGenre,
        loading: state.loading,
        getGenreFancyItemDetails,
        getFancyItemDetails,
        setCurrentGenre,
        getGenreName
      }}
    >
      {props.children}
    </GenreFancyItemContext.Provider>
  );
};

export default GenreFancyItemState;
