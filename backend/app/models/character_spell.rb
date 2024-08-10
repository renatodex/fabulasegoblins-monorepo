# == Schema Information
#
# Table name: character_spells
#
#  id               :bigint           not null, primary key
#  learned_at_level :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  character_id     :bigint           not null
#  spell_id         :bigint           not null
#
# Indexes
#
#  index_character_spells_on_character_id  (character_id)
#  index_character_spells_on_spell_id      (spell_id)
#
# Foreign Keys
#
#  fk_rails_...  (character_id => characters.id)
#  fk_rails_...  (spell_id => spells.id)
#
class CharacterSpell < ApplicationRecord
  belongs_to :character
  belongs_to :spell
end
