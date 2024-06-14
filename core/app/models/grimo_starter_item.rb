# == Schema Information
#
# Table name: grimo_starter_items
#
#  id         :bigint           not null, primary key
#  guaranteed :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  grimo_id   :bigint           not null
#  item_id    :bigint           not null
#
# Indexes
#
#  index_grimo_starter_items_on_grimo_id  (grimo_id)
#  index_grimo_starter_items_on_item_id   (item_id)
#  index_grimo_weapons_on_grimo_and_item  (grimo_id,item_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (grimo_id => grimos.id)
#  fk_rails_...  (item_id => items.id)
#
class GrimoStarterItem < ApplicationRecord
  belongs_to :grimo
  belongs_to :item
end
