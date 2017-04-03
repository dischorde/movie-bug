@favorites.pluck(:imdb_id).each do |imdb_id|
  json.set! imdb_id, true
end
