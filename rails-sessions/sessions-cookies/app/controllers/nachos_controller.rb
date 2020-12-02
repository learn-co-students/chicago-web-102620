class NachosController < ApplicationController
  before_action :get_items_from_cart

  def index
    @nachos = Nacho.all
  end

  def show
    @nacho = Nacho.find(params[:id])
  end
end
