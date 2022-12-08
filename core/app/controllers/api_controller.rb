class ApiController < ApplicationController
  @@generic_render = false

  class << self
    def resource(resource_name)
      @@resource = resource_name
    end
  end

  def ensure_resource
    begin
      @@resource.class
    rescue
      raise "No resource specified"
    end
  end

  def index
    ensure_resource
    render json: @@resource.all
  end

  def show
    ensure_resource
    render json: @@resource.find(params[:id])
  end

  def create
    ensure_resource
    @@resource.create!(params)
  end

  def update
    ensure_resource
    @@resource.update!(params)
  end

  def destroy
    ensure_resource
    @@resource.destroy!(params)
  end
end