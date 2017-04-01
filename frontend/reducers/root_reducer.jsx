import { combineReducers } from 'redux';
import ResultsReducer from './results_reducer.js';
import RecentSearchesReducer from './recent_searches_reducer.js';

const rootReducer = combineReducers({
  results: ResultsReducer,
  recentSearches: RecentSearchesReducer
});

export default rootReducer;
