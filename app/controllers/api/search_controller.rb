class Api::SearchController < ApplicationController

  def index
    get_recent_searches
    render json: @searches.map(&:query)
  end

  def create
    search = Search.new(search_params)

    unless search.save
      render json: search.errors.full_messages, status: 422
    end

  end

  private

  def get_recent_searches
    # TODO: return a certain amount of all recent searches if not logged in
    # if logged in return a certain amount of most recent searches
    # belonging to said user
    if current_user
    else
      @searches = Search.order(created_at: :desc).limit(5)
    end
  end

  def search_params
    params.permit(:query, :user_id)
  end

end
