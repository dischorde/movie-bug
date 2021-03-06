import { connect } from 'react-redux';
import Search from './search.jsx';
import { fetchSearchResults,
         saveSearchQuery,
         requestRecentSearches } from '../../actions/search_actions.js';

const mapStateToProps = state => ({
  recentSearches: state.recentSearches,
  errors: state.results.errors
});

const mapDispatchToProps = dispatch => {
  const search = query => {
    dispatch(saveSearchQuery(query));
    return dispatch(fetchSearchResults(query));
  };

  return {
    requestRecentSearches: () => dispatch(requestRecentSearches()),
    search
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
