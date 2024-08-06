class CreateCharacterBodyParts < ActiveRecord::Migration[7.0]
  def change
    create_table :character_body_parts do |t|
      t.string :title
      t.text :description
      t.string :icon
      t.string :color
      t.integer :max_items
      t.boolean :crippled
      t.references :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
