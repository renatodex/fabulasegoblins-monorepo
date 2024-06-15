# == Schema Information
#
# Table name: proficiencies
#
#  id                 :bigint           not null, primary key
#  proficiencer_type  :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  proficiencer_id    :bigint           not null
#  sheet_attribute_id :bigint           not null
#
# Indexes
#
#  index_proficiencies_on_attribute_and_proficiencer  (sheet_attribute_id,proficiencer_id,proficiencer_type) UNIQUE
#  index_proficiencies_on_proficiencer                (proficiencer_type,proficiencer_id)
#  index_proficiencies_on_sheet_attribute_id          (sheet_attribute_id)
#
# Foreign Keys
#
#  fk_rails_...  (sheet_attribute_id => sheet_attributes.id)
#
require "test_helper"

class ProficiencyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
