# == Schema Information
#
# Table name: cultures
#
#  id          :bigint           not null, primary key
#  title       :string
#  permalink   :string
#  description :text
#  book_url    :text
#  bonuses     :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Culture < ApplicationRecord
end
