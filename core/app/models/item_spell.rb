# == Schema Information
#
# Table name: item_spells
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  item_id    :bigint           not null
#  spell_id   :bigint           not null
#
# Indexes
#
#  index_item_spells_on_item_id   (item_id)
#  index_item_spells_on_spell_id  (spell_id)
#
# Foreign Keys
#
#  fk_rails_...  (item_id => items.id)
#  fk_rails_...  (spell_id => spells.id)
#
class ItemSpell < ApplicationRecord
  belongs_to :item
  belongs_to :spell
end
