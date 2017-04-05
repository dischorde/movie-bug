import merge from 'lodash/merge';
import { RECEIVE_RESULTS,
         RECEIVE_SEARCH_ERRORS } from '../actions/search_actions.js';

const _nullState = {
 media: [],
 errors: null
};

const resultsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_RESULTS:
      newState.media = action.results;
      newState.errors = null;
      return newState;
    case RECEIVE_SEARCH_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default resultsReducer;
