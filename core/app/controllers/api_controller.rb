class ApiController < ApplicationController
  def ensure_resource
    begin
      resource.class
    rescue
      raise "No resource specified"
    end
  end

  def index
    ensure_resource
    data = resource.ransack(params[:q]).result.page(params[:page].presence || 0)
    response.set_header('X-Total', data.total_count)
    response.set_header('X-LastPage', data.last_page?)

    render json: data
  end

  def show
    ensure_resource
    render json: resource.find(params[:id])
  end

  def create
    ensure_resource
    resource.create!(params)
  end

  def update
    ensure_resource
    resource.update!(params)
  end

  def destroy
    ensure_resource
    @resource.destroy!(params)
  end
end
