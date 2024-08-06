class RemoveNotNullConstantFromCharacterItems < ActiveRecord::Migration[7.0]
  def change
    change_column_null :character_items, :character_body_part_id, true
  end
end
