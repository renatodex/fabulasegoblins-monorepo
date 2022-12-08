# == Schema Information
#
# Table name: item_spells
#
#  id         :bigint           not null, primary key
#  item_id    :bigint           not null
#  spell_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ItemSpell < ApplicationRecord
  belongs_to :item
  belongs_to :spell
end
