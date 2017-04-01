import * as OMDBAPIUtil from '../util/omdb_api_util.js';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const receiveSearchResults = results => ({
  type: RECEIVE_RESULTS,
  results
});

export const fetchSearchResults = query => dispatch => {
  return OMDBAPIUtil.searchMovies(query)
  .then(results => dispatch(receiveSearchResults(results.Search)));
};
