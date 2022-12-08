# == Schema Information
#
# Table name: elements
#
#  id                 :bigint           not null, primary key
#  title              :string
#  short_description  :text
#  long_description   :text
#  permalink          :string
#  weak_to_id         :bigint
#  resistent_to_id    :bigint
#  negative_effect_id :bigint           not null
#  book_url           :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Element < ApplicationRecord
  belongs_to :weak_to
  belongs_to :resistent_to
  belongs_to :negative_effect
end
