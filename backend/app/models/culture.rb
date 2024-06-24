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
  has_many :spell_owners, as: :spell_owner
  has_many :spells, through: :spell_owners

  def owner_type
    'Culture'
  end

  def self.ransackable_attributes(auth_object = nil)
    [
      "bonuses",
      "book_url",
      "clothes_description",
      "common_divinities",
      "id",
      "key_values",
      "long_description",
      "permalink",
      "short_description",
      "title",
    ]
  end
end
