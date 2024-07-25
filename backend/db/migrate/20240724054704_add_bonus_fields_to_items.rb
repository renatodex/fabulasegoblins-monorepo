class AddBonusFieldsToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :bonus_strength, :integer
    add_column :items, :bonus_agility, :integer
    add_column :items, :bonus_resilience, :integer
    add_column :items, :bonus_intelect, :integer
    add_column :items, :bonus_magic_elo, :integer
    add_column :items, :bonus_spirit, :integer
    add_column :items, :bonus_survival, :integer
    add_column :items, :bonus_influence, :integer
    add_column :items, :bonus_destiny, :integer
    add_column :items, :bonus_hp, :integer
    add_column :items, :bonus_mp, :integer
    add_column :items, :bonus_attack_physical, :integer
    add_column :items, :bonus_attack_magical, :integer
    add_column :items, :bonus_defense_physical, :integer
    add_column :items, :bonus_defense_magical, :integer
    add_column :items, :bonus_initiative, :integer
    add_column :items, :bonus_movement, :integer
    add_column :items, :bonus_damage, :integer
    add_column :items, :bonus_temirs, :integer
  end
end
