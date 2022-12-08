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
#  negative_effect_id :bigint           not null
#  resistent_to_id    :bigint
#  weak_to_id         :bigint
#
# Indexes
#
#  index_elements_on_negative_effect_id  (negative_effect_id)
#  index_elements_on_resistent_to_id     (resistent_to_id)
#  index_elements_on_weak_to_id          (weak_to_id)
#
# Foreign Keys
#
#  fk_rails_...  (negative_effect_id => negative_effects.id)
#  fk_rails_...  (resistent_to_id => elements.id)
#  fk_rails_...  (weak_to_id => elements.id)
#
class Element < ApplicationRecord
  belongs_to :weak_to
  belongs_to :resistent_to
  belongs_to :negative_effect
end
