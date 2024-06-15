# == Schema Information
#
# Table name: sheet_attributes
#
#  id                :bigint           not null, primary key
#  book_url          :text
#  icon              :text
#  long_description  :text
#  permalink         :string
#  short_description :text
#  title             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class SheetAttribute < ApplicationRecord
  has_many :proficiencies
  has_many :proficiencers, through: :proficiencies, source: :proficiencer
end
