class ApplicationController < ActionController::Base
  before_action :get_cart_items

  def cart
    session[:cart] ||= []
  end

  def get_cart_items
    @cart_items = Nacho.find(cart)
  end
end
