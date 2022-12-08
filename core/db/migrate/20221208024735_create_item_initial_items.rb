class CreateItemInitialItems < ActiveRecord::Migration[7.0]
  def change
    create_table :item_initial_items do |t|
      t.references :original_item, index: true, null: false, foreign_key: { to_table: :items }
      t.references :offered_item, index: true, null: false, foreign_key: { to_table: :items }

      t.timestamps
    end
  end
end
