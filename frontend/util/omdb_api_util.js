export const searchMovies = query => (
  $.ajax({
    method: 'GET',
    url: `http://www.omdbapi.com/?s=${query.replace(/ /g,"%20")}&type=movie`
  })
);

export const fetchMedia = mediaId => (
  $.ajax({
    method: 'GET',
    url: `http://www.omdbapi.com/?i=${mediaId}&plot=full`
  })
);
