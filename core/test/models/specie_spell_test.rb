# == Schema Information
#
# Table name: specie_spells
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  specie_id  :bigint           not null
#  spell_id   :bigint           not null
#
# Indexes
#
#  index_specie_spells_on_specie_id  (specie_id)
#  index_specie_spells_on_spell_id   (spell_id)
#
# Foreign Keys
#
#  fk_rails_...  (specie_id => species.id)
#  fk_rails_...  (spell_id => spells.id)
#
require "test_helper"

class SpecieSpellTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
