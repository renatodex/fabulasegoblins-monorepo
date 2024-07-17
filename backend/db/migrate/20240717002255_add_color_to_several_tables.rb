class AddColorToSeveralTables < ActiveRecord::Migration[7.0]
  def change
    add_column :species, :color, :string, default: nil
    add_column :items, :color, :string, default: nil
    add_column :cultures, :color, :string, default: nil
    add_column :character_roles, :color, :string, default: nil
    add_column :spells, :color, :string, default: nil
  end
end
