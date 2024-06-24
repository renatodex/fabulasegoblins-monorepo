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

  def self.ransackable_attributes(auth_object = nil)
    ["id", "title", "created_at", "updated_at"] # Add other attributes as needed
  end
end
