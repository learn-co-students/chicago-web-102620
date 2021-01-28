
class Api::V1::AuthController < ApplicationController

  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])

      payload = { user_id: user.id }
      hmac_secret = 'my_secret'
      token = JWT.encode(payload, hmac_secret, 'HS256')

      render json: { user: UserSerializer.new(user), token: token }
    else
      render json: { error: 'Username or Password does not exist.'}
    end
  end



  def show
    token = request.headers[:Authorization].split(' ')[1]
    decoded_token = JWT.decode(token, 'my_secret', true, { algorithm: 'HS256' })
    user_id = decoded_token[0]['user_id']


    user = User.find(user_id)

    if user
      render json: { user: UserSerializer.new(user) }
    else
      render json: { error: 'Invalid token.'}
    end

  end
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




