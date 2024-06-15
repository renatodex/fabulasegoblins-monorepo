class AddRangedToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :ranged, :string, default: nil
  end
end
