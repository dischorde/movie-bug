class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?, :current_user_inc_faves

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def current_user_inc_faves
    user = @current_user
    unless user
      user = User.includes(:favorites).find_by(session_token:
                                              session[:session_token])
    end

    user
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def sign_out
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def signed_in?
    !!current_user
  end
end
