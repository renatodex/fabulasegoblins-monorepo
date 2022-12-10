# == Schema Information
#
# Table name: cultures
#
#  id                  :bigint           not null, primary key
#  bonuses             :text
#  book_url            :text
#  clothes_description :text
#  common_divinities   :text
#  key_values          :text
#  long_description    :text
#  permalink           :string
#  short_description   :text
#  title               :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Culture < ApplicationRecord
end
