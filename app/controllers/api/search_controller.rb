class Api::SearchController < ApplicationController

  def index
    # TODO: return a certain amount of all recent searches if not logged in
    # if logged in return a certain amount of most recent searches
    # belonging to said user
  end

  def create
    # TODO: should prehaps return an updated index?
    @search = Search.new(search_params)

    unless @search.save
      render json: @search.errors.full_messages, status: 422
    end
  end

  private

  def search_params
    params.permit(:query, :user_id)
  end

end
