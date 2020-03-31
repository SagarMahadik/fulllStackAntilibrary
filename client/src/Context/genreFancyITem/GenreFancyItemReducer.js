import {
  GET_GENREFANCYITEMS,
  GET_FANCYITEMDETAILS,
  SET_CURRENTGENRE,
  SET_LOADING,
  GET_SEARCHRESULTS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GENREFANCYITEMS:
      return {
        ...state,
        genreFancyItemDetails: action.payload,
        loading: false
      };
    case SET_CURRENTGENRE:
      return {
        ...state,
        currentGenre: action.payload
      };
    case GET_FANCYITEMDETAILS:
      return {
        ...state,
        fancyItemDetails: action.payload,
        loading: false
      };
    case GET_SEARCHRESULTS:
      return {
        ...state,
        searchResults: action.payload,
        laoding: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
