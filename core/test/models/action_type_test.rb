# == Schema Information
#
# Table name: action_types
#
#  id                :bigint           not null, primary key
#  book_url          :text
#  long_description  :text
#  permalink         :string
#  short_description :text
#  title             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require "test_helper"

class ActionTypeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
