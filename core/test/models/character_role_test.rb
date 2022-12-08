# == Schema Information
#
# Table name: character_roles
#
#  id                 :bigint           not null, primary key
#  base_hp            :integer
#  base_movement      :integer
#  base_mp            :integer
#  book_url           :text
#  description        :text
#  hp_per_level       :text             default([]), is an Array
#  mp_per_level       :text             default([]), is an Array
#  permalink          :string
#  title              :string
#  weapon_proficience :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
require "test_helper"

class CharacterRoleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
