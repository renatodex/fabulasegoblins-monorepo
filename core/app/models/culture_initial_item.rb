# == Schema Information
#
# Table name: culture_initial_items
#
#  id              :bigint           not null, primary key
#  culture_id      :bigint           not null
#  offered_item_id :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class CultureInitialItem < ApplicationRecord
  belongs_to :culture
  belongs_to :item
end
