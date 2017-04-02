import merge from 'lodash/merge';
import { RECEIVE_ALL_FAVORITES,
         RECEIVE_FAVORITE,
         REMOVE_FAVORITE,
         RECEIVE_FAVORITE_ERRORS } from '../actions/favorite_actions.js';


const _nullState = {
 media: {},
 errors: []
};

const favoritesReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_FAVORITES:
      return {
        media: action.favorites,
        errors: []
      };
    case RECEIVE_FAVORITE:
      newState.media[action.favorite.id] = action.favorite;
      return newState;
    case REMOVE_FAVORITE:
      delete newState.media[action.favorite.id];
      return newState;
    case RECEIVE_FAVORITE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default favoritesReducer;
