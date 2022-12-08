require "administrate/base_dashboard"

class ItemDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    bonus_magic_attack: Field::String,
    bonus_magical_defense: Field::String,
    bonus_physical_attack: Field::String,
    bonus_physical_defense: Field::String,
    book_url: Field::Text,
    buy_price: Field::Number,
    damage_type: Field::BelongsTo,
    durability: Field::Number,
    formula: Field::Text,
    item_type: Field::BelongsTo,
    long_description: Field::Text,
    permalink: Field::String,
    sell_price: Field::Number,
    sheet_attribute: Field::BelongsTo,
    short_description: Field::Text,
    slots_used: Field::Number,
    title: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    bonus_magic_attack
    bonus_magical_defense
    bonus_physical_attack
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    bonus_magic_attack
    bonus_magical_defense
    bonus_physical_attack
    bonus_physical_defense
    book_url
    buy_price
    damage_type
    durability
    formula
    item_type
    long_description
    permalink
    sell_price
    sheet_attribute
    short_description
    slots_used
    title
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    bonus_magic_attack
    bonus_magical_defense
    bonus_physical_attack
    bonus_physical_defense
    book_url
    buy_price
    damage_type
    durability
    formula
    item_type
    long_description
    permalink
    sell_price
    sheet_attribute
    short_description
    slots_used
    title
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how items are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(item)
  #   "Item ##{item.id}"
  # end
end
