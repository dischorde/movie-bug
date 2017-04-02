class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(session_params[:username],
                                     session_params[:password])
    if @user
      sign_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else
      render json: ["No user to sign out"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
