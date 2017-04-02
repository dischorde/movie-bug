list = {}
@favorites.pluck(:imdb_id).each do |imdb_id|
  list[imdb_id] = true
end
json.list list
