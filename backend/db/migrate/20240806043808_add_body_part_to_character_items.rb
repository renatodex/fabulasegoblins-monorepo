class AddBodyPartToCharacterItems < ActiveRecord::Migration[7.0]
  def change
    add_reference :character_items, :character_body_part, null: true, foreign_key: true
  end
end
