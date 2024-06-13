# == Schema Information
#
# Table name: items
#
#  id                           :bigint           not null, primary key
#  bonus_magic_attack           :string
#  bonus_magical_defense        :string
#  bonus_physical_attack        :string
#  bonus_physical_defense       :string
#  book_url                     :text
#  buy_price                    :integer
#  durability                   :integer
#  formula                      :text
#  icon                         :text
#  itemset_handle               :string
#  itemset_part                 :boolean          default(FALSE)
#  long_description             :text
#  magical_formula              :text
#  movement_penalty             :integer
#  permalink                    :string
#  physical_formula             :text
#  sell_price                   :integer
#  short_description            :text
#  slots_used                   :integer          default(1)
#  strength_requirement_to_wear :integer
#  tier_requirement_to_wear     :integer
#  title                        :string
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  damage_type_id               :bigint
#  item_type_id                 :bigint           not null
#  range_type_id                :bigint
#  sheet_attribute_id           :bigint
#
# Indexes
#
#  index_items_on_damage_type_id      (damage_type_id)
#  index_items_on_item_type_id        (item_type_id)
#  index_items_on_range_type_id       (range_type_id)
#  index_items_on_sheet_attribute_id  (sheet_attribute_id)
#
# Foreign Keys
#
#  fk_rails_...  (damage_type_id => damage_types.id)
#  fk_rails_...  (item_type_id => item_types.id)
#  fk_rails_...  (range_type_id => range_types.id)
#  fk_rails_...  (sheet_attribute_id => sheet_attributes.id)
#
class Grimo < Item
  class << self
    def giurad
      find_by_permalink("brasao-de-giurad")
    end

    def kanus
      find_by_permalink("olho-de-kanus")
    end

    def lunn
      find_by_permalink("joia-de-lunn")
    end

    def allura
      find_by_permalink("orbe-de-allura")
    end

    def ravna
      find_by_permalink("arca-de-ravna")
    end

    def darian
      find_by_permalink("totem-de-darian")
    end

    def zanari
      find_by_permalink("frasco-de-zanari")
    end

    def magni
      find_by_permalink("aparato-de-magni")
    end

    def qatun
      find_by_permalink("insignia-de-qatun")
    end

    def ixin
      find_by_permalink("selo-de-ixin")
    end
  end
end
