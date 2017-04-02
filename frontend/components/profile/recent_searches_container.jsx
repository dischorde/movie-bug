import { connect } from 'react-redux';
import RecentSearches from './recent_searches.jsx';
import { fetchSearchResults,
         saveSearchQuery,
         requestRecentSearches } from '../../actions/search_actions.js';

const mapStateToProps = state => ({
  recentSearches: state.recentSearches
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
)(RecentSearches);
