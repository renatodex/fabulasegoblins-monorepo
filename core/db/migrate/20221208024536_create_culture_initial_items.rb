class CreateCultureInitialItems < ActiveRecord::Migration[7.0]
  def change
    create_table :culture_initial_items do |t|
      t.references :culture, null: false, foreign_key: true
      t.references :offered_item, index: true, null: false, foreign_key: { to_table: :items }

      t.timestamps
    end
  end
end
