# == Schema Information
#
# Table name: culture_spells
#
#  id         :bigint           not null, primary key
#  culture_id :bigint           not null
#  spell_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CultureSpell < ApplicationRecord
  belongs_to :culture
  belongs_to :spell
end
