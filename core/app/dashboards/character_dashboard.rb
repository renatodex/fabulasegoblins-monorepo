require "administrate/base_dashboard"

class CharacterDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    background: Field::Text,
    base_agility: Field::Number,
    base_destiny: Field::Number,
    base_influence: Field::Number,
    base_intelect: Field::Number,
    base_magic_elo: Field::Number,
    base_resilience: Field::Number,
    base_spirit: Field::Number,
    base_strength: Field::Number,
    base_survival: Field::Number,
    character_items: Field::HasMany,
    character_role: Field::BelongsTo,
    code: Field::String,
    culture: Field::BelongsTo,
    extra_hp_points: Field::Number,
    extra_initiative: Field::Number,
    extra_magic_attack: Field::Number,
    extra_magic_defense: Field::Number,
    extra_main_attack: Field::Number,
    extra_movement: Field::Number,
    extra_mp_points: Field::Number,
    extra_physical_attack: Field::Number,
    extra_physical_defense: Field::Number,
    extra_secondary_attack: Field::Number,
    hp_points: Field::Number,
    initiative: Field::Number,
    inventory_slots: Field::Number,
    items: Field::HasMany,
    level: Field::Number,
    long_description: Field::Text,
    magic_attack: Field::Number,
    magic_defense: Field::Number,
    main_attack: Field::Number,
    max_hp_points: Field::Number,
    max_mp_points: Field::Number,
    max_temirs: Field::Number,
    movement: Field::Number,
    mp_points: Field::Number,
    physical_attack: Field::Number,
    physical_defense: Field::Number,
    secondary_attack: Field::Number,
    short_description: Field::Text,
    specie: Field::BelongsTo,
    temirs: Field::Number,
    title: Field::String,
    traumas: Field::Text,
    user: Field::BelongsTo,
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
    background
    base_agility
    base_destiny
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    background
    base_agility
    base_destiny
    base_influence
    base_intelect
    base_magic_elo
    base_resilience
    base_spirit
    base_strength
    base_survival
    character_items
    character_role
    code
    culture
    extra_hp_points
    extra_initiative
    extra_magic_attack
    extra_magic_defense
    extra_main_attack
    extra_movement
    extra_mp_points
    extra_physical_attack
    extra_physical_defense
    extra_secondary_attack
    hp_points
    initiative
    inventory_slots
    items
    level
    long_description
    magic_attack
    magic_defense
    main_attack
    max_hp_points
    max_mp_points
    max_temirs
    movement
    mp_points
    physical_attack
    physical_defense
    secondary_attack
    short_description
    specie
    temirs
    title
    traumas
    user
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    background
    base_agility
    base_destiny
    base_influence
    base_intelect
    base_magic_elo
    base_resilience
    base_spirit
    base_strength
    base_survival
    character_items
    character_role
    code
    culture
    extra_hp_points
    extra_initiative
    extra_magic_attack
    extra_magic_defense
    extra_main_attack
    extra_movement
    extra_mp_points
    extra_physical_attack
    extra_physical_defense
    extra_secondary_attack
    hp_points
    initiative
    inventory_slots
    items
    level
    long_description
    magic_attack
    magic_defense
    main_attack
    max_hp_points
    max_mp_points
    max_temirs
    movement
    mp_points
    physical_attack
    physical_defense
    secondary_attack
    short_description
    specie
    temirs
    title
    traumas
    user
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

  # Overwrite this method to customize how characters are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(character)
  #   "Character ##{character.id}"
  # end
end
