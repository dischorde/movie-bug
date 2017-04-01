export const searchMovies = (query) => (
  $.ajax({
    method: 'GET',
    url: `http://www.omdbapi.com/?s=${query}&type=movie&r=JSON`
  })
);
