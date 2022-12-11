class Api::CharactersController < ApiController
  # before_action :authenticate_user!

  def resource
    Character
  end

  def index
    @characters = Character.where(
      user_id: current_user.id,
    )
  end

  def show
    @character = resource.find_by(code: params[:id])
  end
end