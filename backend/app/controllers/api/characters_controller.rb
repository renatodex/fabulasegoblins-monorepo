class Api::CharactersController < ApiController
  before_action :authenticate_user!

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

  def create
    @character = Character.create(
      title: char_params[:character_name],
      level: char_params[:level],
      avatar: char_params[:avatar],
      base_agility: char_params[:attributes][:base_agility],
      base_destiny: char_params[:attributes][:base_destiny],
      base_influence: char_params[:attributes][:base_influence],
      base_intelect: char_params[:attributes][:base_intelect],
      base_magic_elo: char_params[:attributes][:base_magic_elo],
      base_resilience: char_params[:attributes][:base_resilience],
      base_spirit: char_params[:attributes][:base_spirit],
      base_strength: char_params[:attributes][:base_strength],
      base_survival: char_params[:attributes][:base_survival],
      culture: Culture.find(char_params[:culture_id]),
      character_role: CharacterRole.find(char_params[:role_id]),
      specie: Specie.find(char_params[:specie_id]),
      character_items: [
        CharacterItem.new(
          item_equipped: true,
          level: char_params[:level],
          slots_used: 1,
          item: Item.find(char_params[:grimo_id])
        ),
        CharacterItem.new(
          item_equipped: true,
          slots_used: 1,
          item: Item.find(char_params[:weapon_id])
        ),
      ],
      temirs: char_params[:temirs] || 200,
      background: "",
      user: current_user
    )
  end

  private

  def char_params
    params.permit(
      :culture_id,
      :role_id,
      :specie_id,
      :level,
      :grimo_id,
      :weapon_id,
      :avatar,
      :character_name,
      attributes: [
        :base_agility,
        :base_destiny,
        :base_influence,
        :base_intelect,
        :base_magic_elo,
        :base_resilience,
        :base_spirit,
        :base_strength,
        :base_survival
      ],
      spell_ids: []
    )
  end

end
