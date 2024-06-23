class CreateGrimoStarterItems < ActiveRecord::Migration[7.0]
  def change
    create_table :grimo_starter_items do |t|
      t.references :grimo, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true
      t.boolean :guaranteed, default: false

      t.timestamps
    end

    add_index :grimo_starter_items, [:grimo_id, :item_id], unique: true, name: 'index_grimo_weapons_on_grimo_and_item'
  end
end
