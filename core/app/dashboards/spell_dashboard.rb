require "administrate/base_dashboard"

class SpellDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    action_type: Field::BelongsTo,
    attack_logic: Field::BelongsTo,
    book_url: Field::Text,
    cast_distance: Field::String,
    cast_distance_number: Field::Number,
    duration_time: Field::String,
    duration_time_number: Field::Number,
    element: Field::BelongsTo,
    external_id: Field::String,
    icon: Field::String,
    long_description: Field::Text,
    magic_cost: Field::String,
    magic_cost_number: Field::Number,
    permalink: Field::String,
    range_amount: Field::String,
    range_type: Field::BelongsTo,
    sacrifice: Field::Boolean,
    short_description: Field::Text,
    tags: Field::String,
    tier: Field::Number,
    title: Field::String,
    ultimate: Field::Boolean,
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
    action_type
    attack_logic
    book_url
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    action_type
    attack_logic
    book_url
    cast_distance
    cast_distance_number
    duration_time
    duration_time_number
    element
    external_id
    icon
    long_description
    magic_cost
    magic_cost_number
    permalink
    range_amount
    range_type
    sacrifice
    short_description
    tags
    tier
    title
    ultimate
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    action_type
    attack_logic
    book_url
    cast_distance
    cast_distance_number
    duration_time
    duration_time_number
    element
    external_id
    icon
    long_description
    magic_cost
    magic_cost_number
    permalink
    range_amount
    range_type
    sacrifice
    short_description
    tags
    tier
    title
    ultimate
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

  # Overwrite this method to customize how spells are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(spell)
  #   "Spell ##{spell.id}"
  # end
end
