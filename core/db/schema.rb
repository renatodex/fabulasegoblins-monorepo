# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_08_025253) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "action_types", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "attack_logics", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "character_items", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "item_id", null: false
    t.datetime "consumed_at", precision: nil
    t.bigint "traded_with_id"
    t.boolean "item_activated", default: false
    t.boolean "item_equipped", default: false
    t.integer "slots_used", default: 1
    t.integer "level", default: 1
    t.integer "experience", default: 0
    t.text "notes"
    t.string "property"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_items_on_character_id"
    t.index ["item_id"], name: "index_character_items_on_item_id"
    t.index ["traded_with_id"], name: "index_character_items_on_traded_with_id"
  end

  create_table "character_role_spells", force: :cascade do |t|
    t.bigint "character_role_id", null: false
    t.bigint "spell_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_role_id"], name: "index_character_role_spells_on_character_role_id"
    t.index ["spell_id"], name: "index_character_role_spells_on_spell_id"
  end

  create_table "character_roles", force: :cascade do |t|
    t.string "title"
    t.string "permalink"
    t.text "short_description"
    t.text "long_description"
    t.integer "base_hp"
    t.integer "base_mp"
    t.integer "base_movement"
    t.string "weapon_proficience"
    t.text "hp_per_level", default: [], array: true
    t.text "mp_per_level", default: [], array: true
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id", null: false
    t.string "code"
    t.text "short_description"
    t.text "long_description"
    t.bigint "specie_id", null: false
    t.bigint "character_role_id", null: false
    t.bigint "culture_id", null: false
    t.integer "level", default: 1
    t.integer "temirs", default: 0
    t.integer "max_temirs", default: 200
    t.integer "inventory_slots", default: 6
    t.integer "base_strength", default: 0
    t.integer "base_resilience", default: 0
    t.integer "base_agility", default: 0
    t.integer "base_magic_elo", default: 0
    t.integer "base_spirit", default: 0
    t.integer "base_intelect", default: 0
    t.integer "base_destiny", default: 0
    t.integer "base_survival", default: 0
    t.integer "base_influence", default: 0
    t.integer "hp_points", default: 0
    t.integer "max_hp_points", default: 0
    t.integer "mp_points", default: 0
    t.integer "max_mp_points", default: 0
    t.integer "extra_hp_points", default: 0
    t.integer "extra_mp_points", default: 0
    t.integer "physical_defense", default: 0
    t.integer "extra_physical_defense", default: 0
    t.integer "physical_attack", default: 0
    t.integer "extra_physical_attack", default: 0
    t.integer "magic_defense", default: 0
    t.integer "extra_magic_defense", default: 0
    t.integer "magic_attack", default: 0
    t.integer "extra_magic_attack", default: 0
    t.integer "main_attack", default: 0
    t.integer "extra_main_attack", default: 0
    t.integer "secondary_attack", default: 0
    t.integer "extra_secondary_attack", default: 0
    t.integer "movement", default: 0
    t.integer "extra_movement", default: 0
    t.integer "initiative", default: 0
    t.integer "extra_initiative", default: 0
    t.text "background", default: "0"
    t.text "traumas"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_role_id"], name: "index_characters_on_character_role_id"
    t.index ["culture_id"], name: "index_characters_on_culture_id"
    t.index ["specie_id"], name: "index_characters_on_specie_id"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "culture_initial_items", force: :cascade do |t|
    t.bigint "culture_id", null: false
    t.bigint "offered_item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["culture_id"], name: "index_culture_initial_items_on_culture_id"
    t.index ["offered_item_id"], name: "index_culture_initial_items_on_offered_item_id"
  end

  create_table "culture_spells", force: :cascade do |t|
    t.bigint "culture_id", null: false
    t.bigint "spell_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["culture_id"], name: "index_culture_spells_on_culture_id"
    t.index ["spell_id"], name: "index_culture_spells_on_spell_id"
  end

  create_table "cultures", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.text "bonuses"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "damage_types", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "elements", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.bigint "weak_to_id"
    t.bigint "resistent_to_id"
    t.bigint "negative_effect_id", null: false
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["negative_effect_id"], name: "index_elements_on_negative_effect_id"
    t.index ["resistent_to_id"], name: "index_elements_on_resistent_to_id"
    t.index ["weak_to_id"], name: "index_elements_on_weak_to_id"
  end

  create_table "initial_items", force: :cascade do |t|
    t.bigint "offered_item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["offered_item_id"], name: "index_initial_items_on_offered_item_id"
  end

  create_table "item_initial_items", force: :cascade do |t|
    t.bigint "original_item_id", null: false
    t.bigint "offered_item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["offered_item_id"], name: "index_item_initial_items_on_offered_item_id"
    t.index ["original_item_id"], name: "index_item_initial_items_on_original_item_id"
  end

  create_table "item_spells", force: :cascade do |t|
    t.bigint "item_id", null: false
    t.bigint "spell_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_item_spells_on_item_id"
    t.index ["spell_id"], name: "index_item_spells_on_spell_id"
  end

  create_table "item_types", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "title"
    t.string "permalink"
    t.text "short_description"
    t.text "long_description"
    t.text "formula"
    t.bigint "item_type_id", null: false
    t.bigint "damage_type_id"
    t.bigint "sheet_attribute_id"
    t.string "bonus_physical_attack"
    t.string "bonus_magic_attack"
    t.string "bonus_physical_defense"
    t.string "bonus_magical_defense"
    t.integer "durability"
    t.integer "sell_price"
    t.integer "buy_price"
    t.integer "slots_used", default: 1
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["damage_type_id"], name: "index_items_on_damage_type_id"
    t.index ["item_type_id"], name: "index_items_on_item_type_id"
    t.index ["sheet_attribute_id"], name: "index_items_on_sheet_attribute_id"
  end

  create_table "negative_effects", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "range_types", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sheet_attributes", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "specie_spells", force: :cascade do |t|
    t.bigint "specie_id", null: false
    t.bigint "spell_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["specie_id"], name: "index_specie_spells_on_specie_id"
    t.index ["spell_id"], name: "index_specie_spells_on_spell_id"
  end

  create_table "species", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "permalink"
    t.text "book_url"
    t.boolean "playable"
    t.integer "extra_attribute_points", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spells", force: :cascade do |t|
    t.string "title"
    t.string "external_id"
    t.string "permalink"
    t.integer "tier"
    t.boolean "ultimate"
    t.boolean "sacrifice"
    t.string "icon"
    t.text "short_description"
    t.text "long_description"
    t.integer "magic_cost_number"
    t.string "magic_cost"
    t.integer "duration_time_number"
    t.string "duration_time"
    t.bigint "attack_logic_id", null: false
    t.bigint "action_type_id", null: false
    t.string "cast_distance"
    t.integer "cast_distance_number"
    t.string "range_amount"
    t.bigint "range_type_id", null: false
    t.bigint "element_id", null: false
    t.string "tags"
    t.text "book_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["action_type_id"], name: "index_spells_on_action_type_id"
    t.index ["attack_logic_id"], name: "index_spells_on_attack_logic_id"
    t.index ["element_id"], name: "index_spells_on_element_id"
    t.index ["range_type_id"], name: "index_spells_on_range_type_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.boolean "newsletter_optin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "character_items", "characters"
  add_foreign_key "character_items", "characters", column: "traded_with_id"
  add_foreign_key "character_items", "items"
  add_foreign_key "character_role_spells", "character_roles"
  add_foreign_key "character_role_spells", "spells"
  add_foreign_key "characters", "character_roles"
  add_foreign_key "characters", "cultures"
  add_foreign_key "characters", "species"
  add_foreign_key "characters", "users"
  add_foreign_key "culture_initial_items", "cultures"
  add_foreign_key "culture_initial_items", "items", column: "offered_item_id"
  add_foreign_key "culture_spells", "cultures"
  add_foreign_key "culture_spells", "spells"
  add_foreign_key "elements", "elements", column: "resistent_to_id"
  add_foreign_key "elements", "elements", column: "weak_to_id"
  add_foreign_key "elements", "negative_effects"
  add_foreign_key "initial_items", "items", column: "offered_item_id"
  add_foreign_key "item_initial_items", "items", column: "offered_item_id"
  add_foreign_key "item_initial_items", "items", column: "original_item_id"
  add_foreign_key "item_spells", "items"
  add_foreign_key "item_spells", "spells"
  add_foreign_key "items", "damage_types"
  add_foreign_key "items", "item_types"
  add_foreign_key "items", "sheet_attributes"
  add_foreign_key "specie_spells", "species"
  add_foreign_key "specie_spells", "spells"
  add_foreign_key "spells", "action_types"
  add_foreign_key "spells", "attack_logics"
  add_foreign_key "spells", "elements"
  add_foreign_key "spells", "range_types"
end
