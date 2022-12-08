# == Schema Information
#
# Table name: item_initial_items
#
#  id               :bigint           not null, primary key
#  original_item_id :bigint           not null
#  offered_item_id  :bigint           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class ItemInitialItem < ApplicationRecord
  belongs_to :original_item
  belongs_to :offered_item
end
