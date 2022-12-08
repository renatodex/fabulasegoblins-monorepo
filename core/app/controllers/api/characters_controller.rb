class Api::CharactersController < ApiController
  before_action :authenticate_user!
  resource Character


  def index
    @characters = Character.where(
      user_id: current_user.id,
    )
  end
end