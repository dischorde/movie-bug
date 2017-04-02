import * as FavoriteAPIUtil from '../util/favorite_api_util.js';

export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITE_ERRORS = "RECEIVE_FAVORITE_ERRORS";

export const receiveAllFavorites = favorites => ({
  type: RECEIVE_ALL_FAVORITES,
  favorites
});

export const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

export const removeFavorite = favorite => ({
  type: REMOVE_FAVORITE,
  favorite
});

export const receiveFavoriteErrors = errors => ({
  type: RECEIVE_FAVORITE_ERRORS,
  errors
});

export const fetchAllFavorites = () => dispatch => {
  return FavoriteAPIUtil.fetchFavorites()
  .then(favorites => dispatch(receiveAllFavorites(favorites)));
};

export const createFavorite = favorite => dispatch => {
  return FavoriteAPIUtil.createNewFavorite(favorite)
  .then(newFave => dispatch(receiveFavorite(newFave)))
  .fail(errors => dispatch(receiveFavoriteErrors(errors)));
};

export const deleteFavorite = favoriteId => dispatch => {
  return FavoriteAPIUtil.destroyFavorite(favoriteId)
  .then(deleted => dispatch(removeFavorite(deleted)))
  .fail(errors => dispatch(receiveFavoriteErrors(errors)));
};
