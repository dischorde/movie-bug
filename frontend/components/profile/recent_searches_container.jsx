import { connect } from 'react-redux';
import RecentSearches from './recent_searches.jsx';
import { fetchSearchResults,
         saveSearchQuery,
         requestUserSearches } from '../../actions/search_actions.js';

const mapStateToProps = state => ({
  recentSearches: state.recentSearches,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  const search = query => {
    dispatch(saveSearchQuery(query));
    return dispatch(fetchSearchResults(query));
  };

  return {
    requestUserSearches: (userId) => dispatch(requestUserSearches(userId)),
    search
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentSearches);
