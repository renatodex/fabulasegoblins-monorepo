class AddBodyPartToItemTypes < ActiveRecord::Migration[7.0]
  def change
    add_column :character_body_parts, :handle, :string
    add_column :item_types, :body_part_handle, :string, foreign_key: true
  end
end
