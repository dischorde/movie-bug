import { connect } from 'react-redux';
import Search from './search.jsx';
import { fetchSearchResults } from '../../actions/result_actions.js';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: query => dispatch(fetchSearchResults(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
