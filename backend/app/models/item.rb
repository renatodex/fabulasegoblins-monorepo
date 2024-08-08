# == Schema Information
#
# Table name: items
#
#  id                           :bigint           not null, primary key
#  bonus_agility                :integer
#  bonus_attack_magical         :integer
#  bonus_attack_physical        :integer
#  bonus_damage                 :integer
#  bonus_defense_magical        :integer
#  bonus_defense_physical       :integer
#  bonus_destiny                :integer
#  bonus_hp                     :integer
#  bonus_influence              :integer
#  bonus_initiative             :integer
#  bonus_intelect               :integer
#  bonus_magic_attack           :string
#  bonus_magic_elo              :integer
#  bonus_magical_defense        :string
#  bonus_movement               :integer
#  bonus_mp                     :integer
#  bonus_physical_attack        :string
#  bonus_physical_defense       :string
#  bonus_resilience             :integer
#  bonus_spirit                 :integer
#  bonus_strength               :integer
#  bonus_survival               :integer
#  bonus_temirs                 :integer
#  book_url                     :text
#  buy_price                    :integer
#  color                        :string
#  common_starter_weapon        :boolean
#  durability                   :integer
#  formula                      :text
#  icon                         :text
#  itemset_handle               :string
#  itemset_part                 :boolean          default(FALSE)
#  long_description             :text
#  magical_formula              :text
#  micro_description            :string
#  movement_penalty             :integer
#  permalink                    :string
#  physical_formula             :text
#  ranged                       :string
#  sell_price                   :integer
#  short_description            :text
#  slots_used                   :integer          default(1)
#  strength_requirement_to_wear :integer
#  targets                      :text
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
class Item < ApplicationRecord
  belongs_to :item_type
  belongs_to :sheet_attribute, optional: true
  belongs_to :damage_type, optional: true

  has_many :spell_owners, as: :spell_owner
  has_many :spells, through: :spell_owners
  has_many :effects

  has_many :grimos
  has_one :grimo
  has_many :grimo_starter_items, through: :grimo

  has_many :proficiencies, as: :proficiencer
  has_many :sheet_attributes, through: :proficiencies

  scope :grimos, -> { joins(:item_type).where(item_type: { title: 'Grimo'}) }

  before_destroy :nullify_effects

  def calculate_attack_modifier
    return 0 unless damage_type

    if damage_type.title == 'Mágico'
      self.bonus_physical_defense.to_i || 0
    else
      self.bonus_physical_attack.to_i || 0
    end
  end

  def owner_type
    "Item"
  end

  def self.ransackable_attributes(auth_object = nil)
    [
      "bonus_magic_attack",
      "bonus_magical_defense",
      "bonus_physical_attack",
      "bonus_physical_defense",
      "book_url",
      "buy_price",
      "damage_type_id",
      "durability",
      "formula",
      "id",
      "item_type_id",
      "itemset_handle",
      "itemset_part",
      "long_description",
      "movement_penalty",
      "permalink",
      "range_type_id",
      "sell_price",
      "sheet_attribute_id",
      "short_description",
      "slots_used",
      "strength_requirement_to_wear",
      "tier_requirement_to_wear",
      "title",
      "magical_formula",
      "physical_formula",
      "icon",
      "common_starter_weapon"
    ]
  end

  def self.ransackable_associations(auth_object = nil)
    [
      "sheet_attributes",
    ]
  end

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
