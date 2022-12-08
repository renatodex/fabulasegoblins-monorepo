# == Schema Information
#
# Table name: species
#
#  id          :bigint           not null, primary key
#  title       :string
#  permalink   :string
#  description :text
#  book_url    :text
#  playable    :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Specie < ApplicationRecord
end
