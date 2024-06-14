class AddUniqueIndexToSpellsPermalink < ActiveRecord::Migration[7.0]
  def change
    add_index :spells, :permalink, unique: true
  end
end
