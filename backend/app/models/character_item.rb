# == Schema Information
#
# Table name: character_items
#
#  id                     :bigint           not null, primary key
#  consumed_at            :datetime
#  experience             :integer          default(0)
#  item_activated         :boolean          default(FALSE)
#  item_equipped          :boolean          default(FALSE)
#  level                  :integer          default(1)
#  notes                  :text
#  property               :string
#  slots_used             :integer          default(1)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  character_body_part_id :bigint
#  character_id           :bigint           not null
#  item_id                :bigint           not null
#  traded_with_id         :bigint
#
# Indexes
#
#  index_character_items_on_character_body_part_id  (character_body_part_id)
#  index_character_items_on_character_id            (character_id)
#  index_character_items_on_item_id                 (item_id)
#  index_character_items_on_traded_with_id          (traded_with_id)
#
# Foreign Keys
#
#  fk_rails_...  (character_body_part_id => character_body_parts.id)
#  fk_rails_...  (character_id => characters.id)
#  fk_rails_...  (item_id => items.id)
#  fk_rails_...  (traded_with_id => characters.id)
#
class CharacterItem < ApplicationRecord
  belongs_to :character
  belongs_to :item
  belongs_to :character_body_part, optional: true
  belongs_to :traded_with, class_name: 'Item', optional: true

  after_commit :recalculate_character_resources

  def calculate_body_part
    self.character.character_body_parts.find_by(handle: self.item.item_type.body_part_handle)
  end

  private

  def recalculate_character_resources
    puts "Recalculating character resources"
    if character
      character.reload
      character.process_calculations
      character.save
    end
  end
end
