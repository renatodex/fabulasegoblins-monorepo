# == Schema Information
#
# Table name: spell_owners
#
#  id               :bigint           not null, primary key
#  spell_owner_type :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  spell_id         :bigint           not null
#  spell_owner_id   :bigint           not null
#
# Indexes
#
#  index_spell_owners_on_spell_id                              (spell_id)
#  index_spell_owners_on_spell_id_and_owner_type_and_owner_id  (spell_id,spell_owner_type,spell_owner_id) UNIQUE
#  index_spell_owners_on_spell_owner                           (spell_owner_type,spell_owner_id)
#  index_spell_owners_on_spell_owner_type_and_spell_owner_id   (spell_owner_type,spell_owner_id)
#
# Foreign Keys
#
#  fk_rails_...  (spell_id => spells.id)
#
class SpellOwner < ApplicationRecord
  belongs_to :spell
  belongs_to :spell_owner, polymorphic: true

  belongs_to :culture
  belongs_to :grimo
  belongs_to :specie
  belongs_to :character_role

  has_many :species, through: :spell_owner

  scope :species, -> { where(spell_owner_type: 'Specie')  }
  scope :cultures, -> { where(spell_owner_type: 'Culture')  }
  scope :grimos, -> { where(spell_owner_type: 'Grimo')  }
  scope :character_roles, -> { where(spell_owner_type: 'CharacterRole')  }
end
