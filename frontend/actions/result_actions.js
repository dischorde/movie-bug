import * as OMDBAPIUtil from '../util/omdb_api_util.js';
import * as SearchAPIUtil from '../util/search_api_util.js';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const receiveSearchResults = results => ({
  type: RECEIVE_RESULTS,
  results
});

export const fetchSearchResults = (query) => dispatch => {
  SearchAPIUtil.saveSearch(query);
  return OMDBAPIUtil.searchMovies(query)
  .then(results => dispatch(receiveSearchResults(results.Search)));
};
