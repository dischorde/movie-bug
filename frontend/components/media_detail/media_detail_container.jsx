import { connect } from 'react-redux';
import { fetchMediaDetail } from '../../actions/media_actions.js';
import { selectMediaDetail } from '../../reducers/selectors.js';
import MediaDetail from './media_detail.jsx';

const mapStateToProps = (state, ownProps) => ({
  mediaDetail: selectMediaDetail(state, ownProps.imdbID)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMediaDetail: (imdbID) => dispatch(fetchMediaDetail(imdbID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaDetail);
