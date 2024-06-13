# == Schema Information
#
# Table name: items
#
#  id                           :bigint           not null, primary key
#  bonus_magic_attack           :string
#  bonus_magical_defense        :string
#  bonus_physical_attack        :string
#  bonus_physical_defense       :string
#  book_url                     :text
#  buy_price                    :integer
#  durability                   :integer
#  formula                      :text
#  icon                         :text
#  itemset_handle               :string
#  itemset_part                 :boolean          default(FALSE)
#  long_description             :text
#  magical_formula              :text
#  movement_penalty             :integer
#  permalink                    :string
#  physical_formula             :text
#  sell_price                   :integer
#  short_description            :text
#  slots_used                   :integer          default(1)
#  strength_requirement_to_wear :integer
#  tier_requirement_to_wear     :integer
#  title                        :string
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  damage_type_id               :bigint
#  item_type_id                 :bigint           not null
#  range_type_id                :bigint
#  sheet_attribute_id           :bigint
#
# Indexes
#
#  index_items_on_damage_type_id      (damage_type_id)
#  index_items_on_item_type_id        (item_type_id)
#  index_items_on_range_type_id       (range_type_id)
#  index_items_on_sheet_attribute_id  (sheet_attribute_id)
#
# Foreign Keys
#
#  fk_rails_...  (damage_type_id => damage_types.id)
#  fk_rails_...  (item_type_id => item_types.id)
#  fk_rails_...  (range_type_id => range_types.id)
#  fk_rails_...  (sheet_attribute_id => sheet_attributes.id)
#
class Item < ApplicationRecord
  belongs_to :item_type
  belongs_to :sheet_attribute, optional: true
  belongs_to :damage_type, optional: true

  has_many :spell_owners, as: :spell_owner
  has_many :spells, through: :spell_owners

  def owner_type
    "Item"
  end

  def self.ransackable_attributes(auth_object = nil)
    [
      "bonus_magic_attack",
      "bonus_magical_defense",
      "bonus_physical_attack",
      "bonus_physical_defense",
      "book_url",
      "buy_price",
      "damage_type_id",
      "durability",
      "formula",
      "id",
      "item_type_id",
      "itemset_handle",
      "itemset_part",
      "long_description",
      "movement_penalty",
      "permalink",
      "range_type_id",
      "sell_price",
      "sheet_attribute_id",
      "short_description",
      "slots_used",
      "strength_requirement_to_wear",
      "tier_requirement_to_wear",
      "title",
      "magical_formula",
      "physical_formula",
      "icon",
    ]
  end
end
