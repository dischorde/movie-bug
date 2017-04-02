import * as FavoriteAPIUtil from '../util/favorite_api_util.js';

export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const RECEIVE_FAVORITED_LIST = "RECEIVE_FAVORITED_LIST";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITE_ERRORS = "RECEIVE_FAVORITE_ERRORS";

export const receiveAllFavorites = favorites => ({
  type: RECEIVE_ALL_FAVORITES,
  favorites
});

export const receiveFavoritedList = list => ({
  type: RECEIVE_FAVORITED_LIST,
  list
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

export const requestAllFavorites = (userId) => dispatch => {
  return FavoriteAPIUtil.fetchFavorites(userId)
  .then(favorites => dispatch(receiveAllFavorites(favorites)));
};

export const requestFavoritedList = (userId) => dispatch => {
  return FavoriteAPIUtil.fetchFavoritedList(userId)
  .then(list => dispatch(receiveFavoritedList(list)));
};

export const createFavorite = favorite => dispatch => {
  return FavoriteAPIUtil.createNewFavorite(favorite)
  .then(newFave => dispatch(receiveFavorite(newFave)))
  .fail(errors => dispatch(receiveFavoriteErrors(errors)));
};

export const deleteFavorite = (imdbId, userId) => dispatch => {
  return FavoriteAPIUtil.destroyFavorite(imdbId, userId)
  .then(deleted => dispatch(removeFavorite(deleted)))
  .fail(errors => dispatch(receiveFavoriteErrors(errors)));
};
