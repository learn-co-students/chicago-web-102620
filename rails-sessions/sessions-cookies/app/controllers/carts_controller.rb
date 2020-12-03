class CartsController < ApplicationController

  def update
    flash[:notice] = "Success"
    
    cart << params[:nacho_id]   

    redirect_to nachos_path
  end
end