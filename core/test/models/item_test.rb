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
#  itemset_handle               :string
#  itemset_part                 :boolean          default(FALSE)
#  long_description             :text
#  movement_penalty             :integer
#  permalink                    :string
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
require "test_helper"

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
