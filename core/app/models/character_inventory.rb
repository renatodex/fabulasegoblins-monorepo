class CharacterInventory < ApplicationRecord
  belongs_to :character
  belongs_to :item
  belongs_to :traded_with
end
