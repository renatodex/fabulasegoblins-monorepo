# == Schema Information
#
# Table name: species
#
#  id          :bigint           not null, primary key
#  book_url    :text
#  description :text
#  permalink   :string
#  playable    :boolean
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class SpecieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
