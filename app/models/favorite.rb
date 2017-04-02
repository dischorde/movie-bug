class Favorite < ApplicationRecord
  validates :user_id, :imdb_id, :title, presence: true
  validates :imdb_id, uniqueness: { scope: :user_id }

  belongs_to :user
end
