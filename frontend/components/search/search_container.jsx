import { connect } from 'react-redux';
import Search from './search.jsx';
import { limitFive } from '../../reducers/selectors.js';
import { fetchSearchResults,
         saveSearchQuery,
         requestRecentSearches } from '../../actions/search_actions.js';

const mapStateToProps = state => ({
  recentSearches: limitFive(state)
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
