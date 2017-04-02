export const fetchFavorites = (user_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/favorites',
    data: { user_id }
  })
);

export const fetchFavoritedList = (user_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/favorites/?list=true',
    data: { user_id }
  })
);

export const createNewFavorite = favorite => (
  $.ajax({
    method: 'POST',
    url: `/api/favorites`,
    data: { favorite }
  })
);

export const destroyFavorite = (imdbId, user_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${imdbId}`,
    data: { user_id }
  })
);
