# == Schema Information
#
# Table name: spells
#
#  id                   :bigint           not null, primary key
#  book_url             :text
#  cast_distance        :string
#  cast_distance_number :integer
#  color                :string
#  duration_time        :string
#  duration_time_number :integer
#  filter_tags          :string
#  icon                 :string
#  long_description     :text
#  magic_cost           :string
#  magic_cost_number    :integer
#  micro_description    :string
#  permalink            :string
#  range_amount         :string
#  sacrifice            :boolean
#  short_description    :text
#  tags                 :string
#  tier                 :integer
#  title                :string
#  ultimate             :boolean
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  action_type_id       :bigint           not null
#  attack_logic_id      :bigint
#  element_id           :bigint           not null
#  external_id          :string
#  range_type_id        :bigint           not null
#
# Indexes
#
#  index_spells_on_action_type_id   (action_type_id)
#  index_spells_on_attack_logic_id  (attack_logic_id)
#  index_spells_on_element_id       (element_id)
#  index_spells_on_permalink        (permalink) UNIQUE
#  index_spells_on_range_type_id    (range_type_id)
#
# Foreign Keys
#
#  fk_rails_...  (action_type_id => action_types.id)
#  fk_rails_...  (attack_logic_id => attack_logics.id)
#  fk_rails_...  (element_id => elements.id)
#  fk_rails_...  (range_type_id => range_types.id)
#
class Spell < ApplicationRecord
  belongs_to :attack_logic
  belongs_to :action_type
  belongs_to :range_type
  belongs_to :element

  has_many :spell_owners
  has_many :items, through: :spell_owners, source: :spell_owner, source_type: 'Item'
  has_many :cultures, through: :spell_owners, source: :spell_owner, source_type: 'Culture'
  has_many :character_roles, through: :spell_owners, source: :spell_owner, source_type: 'CharacterRole'
  has_many :species, through: :spell_owners, source: :spell_owner, source_type: 'Specie'

  def self.ransackable_attributes(auth_object = nil)
    [
      "action_type_id",
      "attack_logic_id",
      "book_url",
      "cast_distance",
      "cast_distance_number",
      "created_at",
      "duration_time",
      "duration_time_number",
      "element_id",
      "external_id",
      "icon",
      "id",
      "long_description",
      "magic_cost",
      "magic_cost_number",
      "permalink",
      "range_amount",
      "range_type_id",
      "sacrifice",
      "short_description",
      "tags",
      "filter_tags",
      "tier",
      "title",
      "ultimate",
      "updated_at"
    ]
  end

  def self.ransackable_associations(auth_object = nil)
    [
      "action_type",
      "attack_logic",
      "character_roles",
      "cultures",
      "element",
      "items",
      "range_type",
      "species",
    ]
  end
end
