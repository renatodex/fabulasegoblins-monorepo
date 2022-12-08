# == Schema Information
#
# Table name: character_role_spells
#
#  id                :bigint           not null, primary key
#  character_role_id :bigint           not null
#  spell_id          :bigint           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class CharacterRoleSpell < ApplicationRecord
  belongs_to :character_role
  belongs_to :spell
end
