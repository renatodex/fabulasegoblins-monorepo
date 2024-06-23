class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.string :code
      t.text :short_description
      t.text :long_description
      t.references :specie, null: false, foreign_key: true
      t.references :character_role, null: false, foreign_key: true
      t.references :culture, null: false, foreign_key: true
      t.integer :level, default: 1
      t.integer :temirs, default: 0
      t.integer :max_temirs, default: 200
      t.integer :inventory_slots, default: 6
      t.integer :base_strength, default: 0
      t.integer :base_resilience, default: 0
      t.integer :base_agility, default: 0
      t.integer :base_magic_elo, default: 0
      t.integer :base_spirit, default: 0
      t.integer :base_intelect, default: 0
      t.integer :base_destiny, default: 0
      t.integer :base_survival, default: 0
      t.integer :base_influence, default: 0
      t.integer :hp_points, default: 0
      t.integer :max_hp_points, default: 0
      t.integer :mp_points, default: 0
      t.integer :max_mp_points, default: 0
      t.integer :extra_hp_points, default: 0
      t.integer :extra_mp_points, default: 0
      t.integer :physical_defense, default: 0
      t.integer :extra_physical_defense, default: 0
      t.integer :physical_attack, default: 0
      t.integer :extra_physical_attack, default: 0
      t.integer :magic_defense, default: 0
      t.integer :extra_magic_defense, default: 0
      t.integer :magic_attack, default: 0
      t.integer :extra_magic_attack, default: 0
      t.integer :main_attack, default: 0
      t.integer :extra_main_attack, default: 0
      t.integer :secondary_attack, default: 0
      t.integer :extra_secondary_attack, default: 0
      t.integer :movement, default: 0
      t.integer :extra_movement, default: 0
      t.integer :initiative, default: 0
      t.integer :extra_initiative, default: 0
      t.text :background, default: 0
      t.text :traumas

      t.timestamps
    end
  end
end
