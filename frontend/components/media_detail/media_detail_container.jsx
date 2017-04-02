import { connect } from 'react-redux';
import { requestMediaDetail } from '../../actions/media_actions.js';
import { selectMediaDetail } from '../../reducers/selectors.js';
import MediaDetail from './media_detail.jsx';

const mapStateToProps = (state, ownProps) => ({
  mediaDetail: selectMediaDetail(state, ownProps.params.imdbID)
});

const mapDispatchToProps = (dispatch) => ({
  requestMediaDetail: (imdbID) => dispatch(requestMediaDetail(imdbID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaDetail);
