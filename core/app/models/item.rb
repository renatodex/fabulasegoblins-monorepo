# == Schema Information
#
# Table name: items
#
#  id                     :bigint           not null, primary key
#  title                  :string
#  permalink              :string
#  short_description      :text
#  long_description       :text
#  formula                :text
#  item_type_id           :bigint           not null
#  damage_type_id         :bigint           not null
#  attribute_id           :bigint           not null
#  bonus_physical_attack  :string
#  bonus_magic_attack     :string
#  bonus_physical_defense :string
#  bonus_magical_defense  :string
#  durability             :integer
#  sell_price             :integer
#  buy_price              :integer
#  slots_used             :integer          default(1)
#  book_url               :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
class Item < ApplicationRecord
  belongs_to :item_type
end
