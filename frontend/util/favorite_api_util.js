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

export const destroyFavorite = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${id}`,
  })
);
