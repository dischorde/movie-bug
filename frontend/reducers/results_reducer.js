import { RECEIVE_RESULTS } from '../actions/result_actions.js';
import merge from 'lodash/merge';

const ResultsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_RESULTS:
      return action.results;
    default:
      return state;
  }
};

export default ResultsReducer;
