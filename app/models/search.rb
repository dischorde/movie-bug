class Search < ApplicationRecord
  validates :query, presence: true

  belongs_to :user
end
