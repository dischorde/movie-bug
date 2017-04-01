import { connect } from 'react-redux';
import SearchResults from './search_results.jsx';

const mapStateToProps = state => ({
  results: state.results
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
