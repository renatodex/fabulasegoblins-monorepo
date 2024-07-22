class AddMicroDescriptionToTables < ActiveRecord::Migration[7.0]
  def change
    add_column :species, :micro_description, :string, default: nil
    add_column :items, :micro_description, :string, default: nil
    add_column :cultures, :micro_description, :string, default: nil
    add_column :character_roles, :micro_description, :string, default: nil
    add_column :spells, :micro_description, :string, default: nil
  end
end
