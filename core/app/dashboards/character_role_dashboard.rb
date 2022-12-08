require "administrate/base_dashboard"

class CharacterRoleDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    base_hp: Field::Number,
    base_movement: Field::Number,
    base_mp: Field::Number,
    book_url: Field::Text,
    description: Field::Text,
    hp_per_level: Field::Text,
    mp_per_level: Field::Text,
    permalink: Field::String,
    title: Field::String,
    weapon_proficience: Field::String,
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
    base_hp
    base_movement
    base_mp
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    base_hp
    base_movement
    base_mp
    book_url
    description
    hp_per_level
    mp_per_level
    permalink
    title
    weapon_proficience
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    base_hp
    base_movement
    base_mp
    book_url
    description
    hp_per_level
    mp_per_level
    permalink
    title
    weapon_proficience
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

  # Overwrite this method to customize how character roles are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(character_role)
  #   "CharacterRole ##{character_role.id}"
  # end
end
