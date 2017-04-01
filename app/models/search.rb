class Search < ApplicationRecord
  validates :query, presence: true

  belongs_to :user, optional: true
end
