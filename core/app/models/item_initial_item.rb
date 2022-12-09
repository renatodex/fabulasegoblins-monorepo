# == Schema Information
#
# Table name: item_initial_items
#
#  id               :bigint           not null, primary key
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  offered_item_id  :bigint           not null
#  original_item_id :bigint           not null
#
# Indexes
#
#  index_item_initial_items_on_offered_item_id   (offered_item_id)
#  index_item_initial_items_on_original_item_id  (original_item_id)
#
# Foreign Keys
#
#  fk_rails_...  (offered_item_id => items.id)
#  fk_rails_...  (original_item_id => items.id)
#
class ItemInitialItem < ApplicationRecord
  belongs_to :original_item, class_name: "Item"
  belongs_to :offered_item, class_name: "Item"
end
