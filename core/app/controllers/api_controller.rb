class ApiController < ApplicationController
  # allowed_actions :index, :show, :create, :update, :destroy

  # def allowed_actions(*actions)
  #   all_actions = %w(index show create update destroy)
  #   denied_actions = all_actions - allowed_actions

  #   denied_actions.each do |action|
  #     define_method action do
  #       render json: { message: "You are not allowed to #{action}." }, status: :unauthorized
  #     end
  #   end

  #   allowed_actions.each do |action|
  #     define_method action do
  #       send "generic_#{action}"
  #     end
  #   end
  # end

  def index
    render json: resource.all
  end

  def show
    render json: resource.find(params[:id])
  end

  def create
    resource.create!(params)
  end

  def update
    resource.update!(params)
  end

  def destroy
    resource.destroy!(params)
  end

  private

  def resource
    raise "Please define a resource"
  end
end