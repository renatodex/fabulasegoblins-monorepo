# == Schema Information
#
# Table name: elements
#
#  id                 :bigint           not null, primary key
#  book_url           :text
#  long_description   :text
#  permalink          :string
#  short_description  :text
#  title              :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  negative_effect_id :bigint
#  resistant_to_id    :bigint
#  weak_to_id         :bigint
#
# Indexes
#
#  index_elements_on_negative_effect_id  (negative_effect_id)
#  index_elements_on_resistant_to_id     (resistant_to_id)
#  index_elements_on_weak_to_id          (weak_to_id)
#
# Foreign Keys
#
#  fk_rails_...  (negative_effect_id => negative_effects.id)
#  fk_rails_...  (resistant_to_id => elements.id)
#  fk_rails_...  (weak_to_id => elements.id)
#
class Element < ApplicationRecord
  belongs_to :weak_to, class_name: "Element", optional: true
  belongs_to :resistant_to, class_name: "Element", optional: true
  belongs_to :negative_effect, optional: true

  class << self
    def fire
      find_by_permalink("fire")
    end

    def nature
      find_by_permalink("nature")
    end

    def chaos
      find_by_permalink("chaos")
    end

    def arcane
      find_by_permalink("arcane")
    end

    def water
      find_by_permalink("water")
    end

    def ice
      find_by_permalink("ice")
    end

    def materia
      find_by_permalink("materia")
    end

    def darkness
      find_by_permalink("darkness")
    end

    def thunder
      find_by_permalink("thunder")
    end

    def wind
      find_by_permalink("wind")
    end

    def holy
      find_by_permalink("holy")
    end

    def acid
      find_by_permalink("acid")
    end
  end
end
