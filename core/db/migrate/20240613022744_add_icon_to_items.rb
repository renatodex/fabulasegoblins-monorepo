class AddIconToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :icon, :text
  end
end
