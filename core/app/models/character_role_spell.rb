class CharacterRoleSpell < ApplicationRecord
  belongs_to :character_role
  belongs_to :spell
end
