class ApplicationController < ActionController::Base
  def cart
    session[:cart]||= []
  end

  def get_items_from_cart
    @cart_items = Nacho.find(cart)
  end
end
