# == Schema Information
#
# Table name: spells
#
#  id                   :bigint           not null, primary key
#  book_url             :text
#  cast_distance        :string
#  cast_distance_number :integer
#  duration_time        :string
#  duration_time_number :integer
#  icon                 :string
#  long_description     :text
#  magic_cost           :string
#  magic_cost_number    :integer
#  permalink            :string
#  range_amount         :string
#  sacrifice            :boolean
#  short_description    :text
#  tags                 :string
#  tier                 :integer
#  title                :string
#  ultimate             :boolean
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  action_type_id       :bigint           not null
#  attack_logic_id      :bigint           not null
#  element_id           :bigint           not null
#  external_id          :string
#  range_type_id        :bigint           not null
#
# Indexes
#
#  index_spells_on_action_type_id   (action_type_id)
#  index_spells_on_attack_logic_id  (attack_logic_id)
#  index_spells_on_element_id       (element_id)
#  index_spells_on_range_type_id    (range_type_id)
#
# Foreign Keys
#
#  fk_rails_...  (action_type_id => action_types.id)
#  fk_rails_...  (attack_logic_id => attack_logics.id)
#  fk_rails_...  (element_id => elements.id)
#  fk_rails_...  (range_type_id => range_types.id)
#
require "test_helper"

class SpellTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
