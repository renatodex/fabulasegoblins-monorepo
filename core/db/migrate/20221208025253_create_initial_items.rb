class CreateInitialItems < ActiveRecord::Migration[7.0]
  def change
    create_table :initial_items do |t|
      t.references :offered_item, index: true, null: false, foreign_key: { to_table: :items }

      t.timestamps
    end
  end
end
