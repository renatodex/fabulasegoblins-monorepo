# == Schema Information
#
# Table name: initial_items
#
#  id              :bigint           not null, primary key
#  offered_item_id :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class InitialItem < ApplicationRecord
  belongs_to :offered_item
end
