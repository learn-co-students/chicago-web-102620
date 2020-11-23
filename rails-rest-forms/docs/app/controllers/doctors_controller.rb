class DoctorsController < ApplicationController

  # index
  def index
    @doctors = Doctor.all
  end

  # show
  def show
    @doctor = Doctor.find(params[:id])
  end

  # new
  def new
    @doctor = Doctor.new
  end

  # create
  def make_new
    @doctor = Doctor.create(doctor_params)

    redirect_to doctor_path(@doctor)
  end

  def yay_muhidin

  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :specialty, :age)
  end
end