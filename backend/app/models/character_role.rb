# == Schema Information
#
# Table name: character_roles
#
#  id                 :bigint           not null, primary key
#  base_hp            :integer
#  base_movement      :integer
#  base_mp            :integer
#  book_url           :text
#  color              :string
#  hp_per_level       :integer          default([]), is an Array
#  long_description   :text
#  micro_description  :string
#  mp_per_level       :integer          default([]), is an Array
#  permalink          :string
#  short_description  :text
#  title              :string
#  weapon_proficience :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class CharacterRole < ApplicationRecord
  has_many :spell_owners, as: :spell_owner
  has_many :spells, through: :spell_owners
  has_many :proficiencies, as: :proficiencer
  has_many :sheet_attributes, through: :proficiencies

  def owner_type
    'CharacterRole'
  end
end
