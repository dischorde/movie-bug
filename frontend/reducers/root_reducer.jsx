import { combineReducers } from 'redux';
import resultsReducer from './results_reducer.js';
import recentSearchesReducer from './recent_searches_reducer.js';
import mediaDetailReducer from './media_detail_reducer.js';
import sessionReducer from './session_reducer.js';

const rootReducer = combineReducers({
  results: resultsReducer,
  recentSearches: recentSearchesReducer,
  mediaDetail: mediaDetailReducer,
  session: sessionReducer
});

export default rootReducer;
