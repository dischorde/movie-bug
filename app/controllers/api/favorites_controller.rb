class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorite.where(user_id: params[:user_id])
    render :list if params[:list]
  end

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = @favorite.user_id.to_i
    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(imdb_id: params[:id],
                                 user_id: params[:user_id])
    @favorite.destroy
    render :show
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :imdb_id, :title, :year, :media_type, :poster)
  end
end
