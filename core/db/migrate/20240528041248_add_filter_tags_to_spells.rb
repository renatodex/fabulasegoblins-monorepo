class AddFilterTagsToSpells < ActiveRecord::Migration[7.0]
  def change
    add_column :spells, :filter_tags, :string
  end
end
