class CreateCharacterItems < ActiveRecord::Migration[7.0]
  def change
    create_table :character_items do |t|
      t.references :character, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true
      t.timestamp :consumed_at
      t.references :traded_with, index: true, foreign_key: { to_table: :characters }
      t.boolean :item_activated, default: false
      t.boolean :item_equipped, default: false
      t.integer :slots_used, default: 1
      t.integer :level, default: 1
      t.integer :experience, default: 0
      t.text :notes
      t.string :property
      t.timestamps
    end
  end
end
