class ItemInitialItem < ApplicationRecord
  belongs_to :original_item
  belongs_to :offered_item
end
