# == Schema Information
#
# Table name: effects
#
#  id                     :bigint           not null, primary key
#  active                 :boolean
#  bonus_agility          :integer
#  bonus_attack_magical   :integer
#  bonus_attack_physical  :integer
#  bonus_damage           :string
#  bonus_defense_magical  :integer
#  bonus_defense_physical :integer
#  bonus_destiny          :integer
#  bonus_hp               :integer
#  bonus_influence        :integer
#  bonus_initiative       :integer
#  bonus_intelect         :integer
#  bonus_magic_elo        :integer
#  bonus_movement         :integer
#  bonus_mp               :integer
#  bonus_resilience       :integer
#  bonus_spirit           :integer
#  bonus_strength         :integer
#  bonus_survival         :integer
#  color                  :string
#  description            :text
#  duration               :integer
#  icon                   :string
#  title                  :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  character_id           :bigint
#  item_id                :bigint
#  negative_effect_id     :bigint
#
# Indexes
#
#  index_effects_on_character_id        (character_id)
#  index_effects_on_item_id             (item_id)
#  index_effects_on_negative_effect_id  (negative_effect_id)
#
# Foreign Keys
#
#  fk_rails_...  (character_id => characters.id)
#  fk_rails_...  (item_id => items.id)
#  fk_rails_...  (negative_effect_id => negative_effects.id)
#
require "test_helper"

class EffectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
