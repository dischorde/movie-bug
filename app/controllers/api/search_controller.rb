class Api::SearchController < ApplicationController

  def index
    get_recent_searches
    render json: @searches.map(&:query)
  end

  def create
    search = Search.new(search_params)
    search.user_id = current_user.id if signed_in?

    unless search.save
      render json: search.errors.full_messages, status: 422
    end

  end

  private

  def get_recent_searches
    if current_user
      @searches = Search.where(user_id: current_user.id).order(created_at: :desc)
    else
      @searches = Search.order(created_at: :desc).limit(5)
    end
  end

  def search_params
    params.permit(:query, :user_id)
  end

end
