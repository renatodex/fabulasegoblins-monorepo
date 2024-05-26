class ApiController < ApplicationController
  before_action :set_access_control_headers

  RECORDS_PER_PAGE = 40.freeze

  def set_access_control_headers
    headers['Access-Control-Expose-Headers'] = 'X-Total, X-LastPage, X-Pages'
  end

  def ensure_resource
    begin
      resource.class
    rescue
      raise "No resource specified"
    end
  end

  def index
    ensure_resource
    data = resource.order(:title).ransack(params[:q]).result.page(params[:page].presence || 0).per(RECORDS_PER_PAGE)
    response.set_header('X-Total', data.total_count)
    response.set_header('X-Pages', data.total_count / RECORDS_PER_PAGE)
    response.set_header('X-LastPage', data.last_page?)

    render_or_fallback(data, 'index')
    # render json: data
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

  def render_or_fallback(data, action)
    template_path = Rails.root.join("app", "views", "api", resource.to_s.downcase.pluralize, "#{action}.jbuilder")

    if File.exists?(template_path)
      @resources = data
      render "api/#{resource.to_s.downcase.pluralize}/#{action}"
    else
      render json: data
    end
  end
end
