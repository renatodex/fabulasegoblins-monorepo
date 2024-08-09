# == Schema Information
#
# Table name: character_body_parts
#
#  id           :bigint           not null, primary key
#  color        :string
#  crippled     :boolean
#  description  :text
#  handle       :string
#  icon         :string
#  max_items    :integer
#  title        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  character_id :bigint           not null
#
# Indexes
#
#  index_character_body_parts_on_character_id  (character_id)
#
# Foreign Keys
#
#  fk_rails_...  (character_id => characters.id)
#
class CharacterBodyPart < ApplicationRecord
  belongs_to :character
  has_many :equipped_items, class_name: 'CharacterItem', foreign_key: 'character_body_part_id'

  validates :title, presence: true
  validates :max_items, numericality: { greater_than_or_equal_to: 0 }
  validates :crippled, inclusion: { in: [true, false] }

  scope :hands, -> { where(handle: 'hands') }
  scope :chest, -> { where(handle: 'chest') }

  # def hands
  #   find_by(handle: 'hands')
  # end
end
