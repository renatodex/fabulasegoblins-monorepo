# == Schema Information
#
# Table name: item_types
#
#  id                :bigint           not null, primary key
#  title             :string
#  short_description :text
#  long_description  :text
#  permalink         :string
#  book_url          :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class ItemType < ApplicationRecord
  class << self
    def grimo
      find_by_permalink("grimo")
    end
  end
end
