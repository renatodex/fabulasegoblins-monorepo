class AddTargetsToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :targets, :text
  end
end
