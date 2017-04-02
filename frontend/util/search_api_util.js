export const saveSearch = query => (
  $.ajax({
    method: 'POST',
    url: `/api/search`,
    data: { query }
  })
);

export const fetchSearches = () => (
  $.ajax({
    method: 'GET',
    url: '/api/search'
  })
);
