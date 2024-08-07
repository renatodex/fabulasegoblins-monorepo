# == Schema Information
#
# Table name: characters
#
#  id                     :bigint           not null, primary key
#  avatar                 :string
#  background             :text             default("0")
#  base_agility           :integer          default(0)
#  base_destiny           :integer          default(0)
#  base_influence         :integer          default(0)
#  base_intelect          :integer          default(0)
#  base_magic_elo         :integer          default(0)
#  base_resilience        :integer          default(0)
#  base_spirit            :integer          default(0)
#  base_strength          :integer          default(0)
#  base_survival          :integer          default(0)
#  code                   :string
#  extra_hp_points        :integer          default(0)
#  extra_initiative       :integer          default(0)
#  extra_magic_attack     :integer          default(0)
#  extra_magic_defense    :integer          default(0)
#  extra_main_attack      :integer          default(0)
#  extra_movement         :integer          default(0)
#  extra_mp_points        :integer          default(0)
#  extra_physical_attack  :integer          default(0)
#  extra_physical_defense :integer          default(0)
#  extra_secondary_attack :integer          default(0)
#  hp_points              :integer          default(0)
#  initiative             :integer          default(0)
#  inventory_slots        :integer          default(6)
#  level                  :integer          default(1)
#  long_description       :text
#  magic_attack           :integer          default(0)
#  magic_defense          :integer          default(0)
#  main_attack            :integer          default(0)
#  max_hp_points          :integer          default(0)
#  max_mp_points          :integer          default(0)
#  max_temirs             :integer          default(200)
#  movement               :integer          default(0)
#  mp_points              :integer          default(0)
#  physical_attack        :integer          default(0)
#  physical_defense       :integer          default(0)
#  secondary_attack       :integer          default(0)
#  short_description      :text
#  temirs                 :integer          default(0)
#  title                  :string
#  traumas                :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  character_role_id      :bigint           not null
#  culture_id             :bigint           not null
#  specie_id              :bigint           not null
#  user_id                :bigint           not null
#
# Indexes
#
#  index_characters_on_character_role_id  (character_role_id)
#  index_characters_on_culture_id         (culture_id)
#  index_characters_on_specie_id          (specie_id)
#  index_characters_on_user_id            (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (character_role_id => character_roles.id)
#  fk_rails_...  (culture_id => cultures.id)
#  fk_rails_...  (specie_id => species.id)
#  fk_rails_...  (user_id => users.id)
#
class Character < ApplicationRecord
  belongs_to :user
  belongs_to :specie
  belongs_to :character_role
  belongs_to :culture

  has_many :character_body_parts, dependent: :destroy
  has_many :character_items, dependent: :destroy
  has_many :items, through: :character_items
  has_many :effects

  has_secure_token :code

  before_destroy :nullify_effects

  before_save :process_calculations
  before_create :process_creation

  def recover_hp_fully
    self.hp_points = self.max_hp_points
    self.mp_points = self.max_mp_points
  end

  def process_creation
    puts "Process Creations"
    recover_hp_fully
  end

  def create_body_parts
    puts "Creating Body Parts"
    [
      { max_items: 1, handle: 'head' ,title: 'Cabeça', description: 'Sua cabeça, onde você pode equipar elmos e capacetes.', icon: 'head_icon.png', color: '#FFD700', crippled: false },
      { max_items: 1, handle: 'chest' ,title: 'Tronco', description: 'Seu tronco, onde você pode equipar armaduras.', icon: 'torso_icon.png', color: '#8B0000', crippled: false },
      { max_items: 1, handle: 'shoulders' ,title: 'Ombros', description: 'Seus ombros, onde você pode equipar ombreiras.', icon: 'shoulders_icon.png', color: '#A9A9A9', crippled: false },
      { max_items: 1, handle: 'waist' ,title: 'Cintura', description: 'Sua cintura, onde você pode equipar cinturões.', icon: 'waist_icon.png', color: '#2E8B57', crippled: false },
      { max_items: 2, handle: 'fingers' ,title: 'Dedos', description: 'Seus dedos, onde você pode equipar anéis.', icon: 'fingers_icon.png', color: '#DAA520', crippled: false },
      { max_items: 1, handle: 'neck' ,title: 'Pescoço', description: 'Seu pescoço, onde você pode equipar amuletos.', icon: 'neck_icon.png', color: '#8B4513', crippled: false },
      { max_items: 1, handle: 'back' ,title: 'Costas', description: 'Suas costas, onde você pode equipar capas.', icon: 'back_icon.png', color: '#4682B4', crippled: false },
      { max_items: 2, handle: 'arms' ,title: 'Braços', description: 'Seus braços, onde você pode equipar braceletes e apetrechos.', icon: 'arms_icon.png', color: '#D2691E', crippled: false },
      { max_items: 2, handle: 'hands' ,title: 'Mãos', description: 'Suas mãos, onde você pode equipar manoplas.', icon: 'hands_icon.png', color: '#708090', crippled: false },
      { max_items: 2, handle: 'legs' ,title: 'Pernas', description: 'Suas pernas, onde você pode equipar perneiras.', icon: 'legs_icon.png', color: '#556B2F', crippled: false },
      { max_items: 2, handle: 'feets' ,title: 'Pés', description: 'Seus pés, onde você pode equipar calçados.', icon: 'feet_icon.png', color: '#B22222', crippled: false }
    ].map do |obj|
      body_part = CharacterBodyPart.find_or_initialize_by(handle: obj[:handle], character: self)
      next if body_part.persisted?
      body_part.assign_attributes(obj)
      self.character_body_parts << body_part
    end
  end

  def process_calculations
    puts "Process Calculations"
    create_body_parts
    recalculate_resources
    assign_items_to_body_parts
  end

  def assign_items_to_body_parts
    puts "Assign Items to Body Parts"
    equipped_character_items.each do |ci|
      calculated_body_part = ci.calculate_body_part
      ci.update_columns(character_body_part_id: calculated_body_part.id) if calculated_body_part
    end
  end

  def active_effects
    self.effects.where(active: true)
  end

  def equipped_character_items
    self.character_items.where(item_equipped: true, consumed_at: nil)
  end

  def initial_grimo
    items.joins(:item_type).where(item_type: {
      permalink: 'grimo',
    }).first
  end

  def bonus_attribute(attribute)
    modifier = "bonus_#{attribute}".to_sym

    modifiers_from_culture = self.culture[modifier]
    modifiers_from_items = self.equipped_character_items.map {|character_item| character_item.item[modifier] }.compact.sum
    modifiers_from_effects = self.active_effects.map{|item| item[modifier] }.compact.sum

    [
      modifiers_from_culture || 0,
      modifiers_from_items || 0,
      modifiers_from_effects || 0
    ]
  end

  def calculate_max_hp_points
    role_base_hp = self.character_role.base_hp
    strength = base_strength + bonus_attribute(:strength).sum
    resilience = base_resilience + bonus_attribute(:resilience).sum

    role_base_hp + 2*(strength) + 2*(resilience)
  end

  def calculate_max_mp_points
    role_base_mp = self.character_role.base_mp
    intelect = base_intelect + bonus_attribute(:intelect).sum
    magic_elo = base_magic_elo + bonus_attribute(:magic_elo).sum

    role_base_mp + 2*(intelect) + 2*(magic_elo)
  end

  def recalculate_resources
    self.max_hp_points = calculate_max_hp_points
    self.max_mp_points = calculate_max_mp_points

    self.hp_points = self.max_hp_points if hp_points > max_hp_points
    self.mp_points = self.max_mp_points if mp_points > max_mp_points

    puts "MAX HP= #{self.max_hp_points}"
    puts "MAX MP= #{self.max_mp_points}"
  end

  private

  def nullify_effects
    effects.update_all(character_id: nil)
  end
end
