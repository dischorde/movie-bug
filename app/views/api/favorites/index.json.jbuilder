if @favorites
  @favorites.each do |fave|
    json.set! fave.id do
      json.partial! 'api/favorites/favorite', favorite: fave
    end
  end
end
