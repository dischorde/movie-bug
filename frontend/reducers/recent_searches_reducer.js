import { RECEIVE_SEARCHES } from '../actions/search_actions.js';

const recentSearchesReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCHES:
      return action.searches;
    default:
      return state;
  }
};

export default recentSearchesReducer;
