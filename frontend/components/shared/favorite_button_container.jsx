import { connect } from 'react-redux';
import FavoriteButton from './favorite_button.jsx';
import { createFavorite,
         requestFavoritedList,
         deleteFavorite } from '../../actions/favorite_actions.js';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    favoritedList: state.favorites.list,
    element: ownProps.element,
    imdbId: ownProps.element.imdbID || ownProps.element.imdb_id,
    type: ownProps.type
});

const mapDispatchToProps = dispatch => ({
  requestFavoritedList: userId => dispatch(requestFavoritedList(userId)),
  createFavorite: favorite => dispatch(createFavorite(favorite)),
  deleteFavorite: (imdbId, userId) => dispatch(deleteFavorite(imdbId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton);
