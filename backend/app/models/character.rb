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

  has_many :character_items
  has_many :items, through: :character_items

  has_secure_token :code

  def initial_grimo
    items.joins(:item_type).where(item_type: {
      permalink: 'grimo',
    }).first
  end
end
