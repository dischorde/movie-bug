import { connect } from 'react-redux';
import Search from './search.jsx';
import { fetchSearchResults, saveSearchQuery } from '../../actions/search_actions.js';

const mapStateToProps = state => ({
  recentSearches: state.recentSearches
});

const mapDispatchToProps = dispatch => {
  const search = query => {
    dispatch(saveSearchQuery(query));
    return dispatch(fetchSearchResults(query));
  };

  return {
    search
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
