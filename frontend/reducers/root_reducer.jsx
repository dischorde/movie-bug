import { combineReducers } from 'redux';
import ResultsReducer from './results_reducer.js';

const rootReducer = combineReducers({
  results: ResultsReducer
});

export default rootReducer;
