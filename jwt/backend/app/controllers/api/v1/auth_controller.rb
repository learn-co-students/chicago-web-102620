
class Api::V1::AuthController < ApplicationController

  def create
    user = User.find_by(username: params[:username])


    if user && user.authenticate(params[:password])
      render json: user
    else
      render json: { error: 'Username or Password does not exist.'}
    end


    # find the user based on username
    # if the user exists
    #   verify that the password matches the one they provided
    #   if it does:
    #     send back that user
    #   if not:
    #     send error message
    # if no user found: 
    #  send an error

  end
end











