import { connect } from 'react-redux';
import Favorites from './favorites.jsx';
import { requestAllFavorites } from '../../actions/favorite_actions.js';
import { selectFavoritedMedia } from '../../reducers/selectors.js';

const mapStateToProps = state => ({
  favorites: selectFavoritedMedia(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllFavorites: (userId) => dispatch(requestAllFavorites(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
