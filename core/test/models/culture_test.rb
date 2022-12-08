# == Schema Information
#
# Table name: cultures
#
#  id          :bigint           not null, primary key
#  bonuses     :text
#  book_url    :text
#  description :text
#  permalink   :string
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class CultureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
