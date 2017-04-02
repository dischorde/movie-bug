class Favorite < ApplicationRecord
  validates :user_id, :imdb_id, :title, presence: true
  validates :imdb_id, uniqueness: { scope: :user_id }
  validates :media_type, inclusion: { in: ["Movie", "Episode", "Series"] }

  belongs_to :user
end
