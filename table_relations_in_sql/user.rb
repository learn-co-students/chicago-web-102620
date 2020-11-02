class User
  attr_accessors :user_name, :email, :web_url
  
  def initialize(user_name, email, web_url)
    @user_name = user_name
    @email = email
    @web_url = web_url
  end
end