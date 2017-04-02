export const fetchFavorites = () => (
  $.ajax({
    method: 'GET',
    url: '/api/favorites'
  })
);

export const createNewFavorite = favorite => (
  $.ajax({
    method: 'POST',
    url: `/api/favorites`,
    data: { favorite }
  })
);

export const destroyFavorite = imdbId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${imdbId}`,
  })
);
