# == Schema Information
#
# Table name: character_body_parts
#
#  id           :bigint           not null, primary key
#  color        :string
#  crippled     :boolean
#  description  :text
#  handle       :string
#  icon         :string
#  max_items    :integer
#  title        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  character_id :bigint           not null
#
# Indexes
#
#  index_character_body_parts_on_character_id  (character_id)
#
# Foreign Keys
#
#  fk_rails_...  (character_id => characters.id)
#
require "test_helper"

class CharacterBodyPartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
