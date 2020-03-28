import {
  GET_GENREFANCYITEMS,
  GET_FANCYITEMDETAILS,
  SET_CURRENTGENRE,
  SET_LOADING
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
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
