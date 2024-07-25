# == Schema Information
#
# Table name: cultures
#
#  id                     :bigint           not null, primary key
#  bonus_agility          :integer
#  bonus_attack_magical   :integer
#  bonus_attack_physical  :integer
#  bonus_damage           :integer
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
#  bonus_temirs           :integer
#  bonuses                :text
#  book_url               :text
#  clothes_description    :text
#  color                  :string
#  common_divinities      :text
#  key_values             :text
#  long_description       :text
#  micro_description      :string
#  permalink              :string
#  short_description      :text
#  title                  :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
require "test_helper"

class CultureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
