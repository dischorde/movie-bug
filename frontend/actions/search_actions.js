import * as OMDBAPIUtil from '../util/omdb_api_util.js';
import * as SearchAPIUtil from '../util/search_api_util.js';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_SEARCHES = "RECEIVE_SEARCHES";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

export const receiveSearchResults = results => ({
  type: RECEIVE_RESULTS,
  results
});

export const receiveRecentSearches = searches => ({
  type: RECEIVE_SEARCHES,
  searches
});

export const receiveSearchErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
});

export const fetchSearchResults = query => dispatch => {
  return OMDBAPIUtil.searchMovies(query)
  .then(results => {
    if (results.Response === "True") {
      return dispatch(receiveSearchResults(results.Search));
    }
    else {
      return dispatch(receiveSearchErrors(results.Error));
    }
  });
};

export const saveSearchQuery = query => dispatch => {
  return SearchAPIUtil.saveSearch(query);
};

export const requestRecentSearches = () => dispatch => {
  return SearchAPIUtil.fetchRecentSearches()
  .then(recents => dispatch(receiveRecentSearches(recents)));
};

export const requestUserSearches = userId => dispatch => {
  return SearchAPIUtil.fetchUserSearches(userId)
  .then(recents => dispatch(receiveRecentSearches(recents)));
};
