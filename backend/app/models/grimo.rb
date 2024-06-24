# == Schema Information
#
# Table name: grimos
#
#  id                :bigint           not null, primary key
#  entry_requisites  :text
#  long_description  :text
#  permalink         :string           not null
#  short_description :text
#  title             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  item_id           :bigint           not null
#
# Indexes
#
#  index_grimos_on_item_id    (item_id)
#  index_grimos_on_permalink  (permalink) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (item_id => items.id)
#
class Grimo < ApplicationRecord
  belongs_to :item
  has_many :grimo_starter_items
  has_many :items, through: :grimo_starter_items
end
