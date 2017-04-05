export const saveSearch = query => (
  $.ajax({
    method: 'POST',
    url: `/api/search`,
    data: { query }
  })
);

export const fetchRecentSearches = () => (
  $.ajax({
    method: 'GET',
    url: '/api/search'
  })
);

export const fetchUserSearches = user_id => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { user_id }
  })
);
