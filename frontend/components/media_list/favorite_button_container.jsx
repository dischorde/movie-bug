import { connect } from 'react-redux';
import FavoriteButton from './favorite_button.jsx';
import { createFavorite,
         deleteFavorite } from '../../actions/favorite_actions.js';

const mapStateToProps = state => ({
    results: state.results,
    currentUser: state.session.currentUser,
    favoritedList: state.favorites.list
});

const mapDispatchToProps = dispatch => ({
  createFavorite: favorite => dispatch(createFavorite(favorite)),
  deleteFavorite: (imdbId, userId) => dispatch(deleteFavorite(imdbId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton);
