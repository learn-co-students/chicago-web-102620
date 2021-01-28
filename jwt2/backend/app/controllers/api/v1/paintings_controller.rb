class Api::V1::PaintingsController < ApplicationController
  skip_before_action :current_user, only: [:create]

  def index
    @paintings = Painting.all
    render json: @paintings
  end

  def show
    @painting = Painting.find_by(slug: params[:slug])
    render json: @painting
  end

  def create

  end

  def update

  end


end
