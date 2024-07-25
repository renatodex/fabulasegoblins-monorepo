class CreateEffects < ActiveRecord::Migration[7.0]
  def change
    create_table :effects do |t|
      t.string :title
      t.string :color
      t.string :icon
      t.text :description
      t.integer :duration
      t.boolean :active
      t.integer :bonus_strength
      t.integer :bonus_agility
      t.integer :bonus_resilience
      t.integer :bonus_intelect
      t.integer :bonus_magic_elo
      t.integer :bonus_spirit
      t.integer :bonus_survival
      t.integer :bonus_influence
      t.integer :bonus_destiny
      t.integer :bonus_hp
      t.integer :bonus_mp
      t.integer :bonus_attack_physical
      t.integer :bonus_attack_magical
      t.integer :bonus_defense_physical
      t.integer :bonus_defense_magical
      t.integer :bonus_initiative
      t.integer :bonus_movement
      t.string :bonus_damage
      t.references :character, null: true, foreign_key: true
      t.references :item, null: true, foreign_key: true
      t.references :negative_effect, null: true, foreign_key: true

      t.timestamps
    end
  end
end
