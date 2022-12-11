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
require "test_helper"

class ElementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
