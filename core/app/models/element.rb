class Element < ApplicationRecord
  belongs_to :weak_to
  belongs_to :resistent_to
  belongs_to :negative_effect
end
