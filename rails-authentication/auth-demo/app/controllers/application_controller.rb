class ApplicationController < ActionController::Base
  before_action :authorize, except: [:home]

  def home
    current_user
    render "/home"
  end

  def current_user
    @user = User.find_by(id: session[:user_id])
  end

  def authorize
    redirect_to login_path unless current_user
  end
end
