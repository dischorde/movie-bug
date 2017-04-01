export const saveSearch = query => (
  $.ajax({
    method: 'POST',
    url: `/api/search`,
    data: { query }
  })
);
