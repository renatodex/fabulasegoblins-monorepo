class AddBonusFieldsToCultures < ActiveRecord::Migration[7.0]
  def change
    add_column :cultures, :bonus_strength, :integer
    add_column :cultures, :bonus_agility, :integer
    add_column :cultures, :bonus_resilience, :integer
    add_column :cultures, :bonus_intelect, :integer
    add_column :cultures, :bonus_magic_elo, :integer
    add_column :cultures, :bonus_spirit, :integer
    add_column :cultures, :bonus_survival, :integer
    add_column :cultures, :bonus_influence, :integer
    add_column :cultures, :bonus_destiny, :integer
    add_column :cultures, :bonus_hp, :integer
    add_column :cultures, :bonus_mp, :integer
    add_column :cultures, :bonus_attack_physical, :integer
    add_column :cultures, :bonus_attack_magical, :integer
    add_column :cultures, :bonus_defense_physical, :integer
    add_column :cultures, :bonus_defense_magical, :integer
    add_column :cultures, :bonus_initiative, :integer
    add_column :cultures, :bonus_movement, :integer
    add_column :cultures, :bonus_damage, :integer
    add_column :cultures, :bonus_temirs, :integer
  end
end
