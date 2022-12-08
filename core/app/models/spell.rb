class Spell < ApplicationRecord
  belongs_to :attack_logic
  belongs_to :action_type
  belongs_to :range_type
  belongs_to :element
end
