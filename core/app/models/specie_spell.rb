# == Schema Information
#
# Table name: specie_spells
#
#  id         :bigint           not null, primary key
#  specie_id  :bigint           not null
#  spell_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class SpecieSpell < ApplicationRecord
  belongs_to :specie
  belongs_to :spell
end
