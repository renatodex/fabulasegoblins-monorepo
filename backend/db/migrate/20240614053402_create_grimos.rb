class CreateGrimos < ActiveRecord::Migration[7.0]
  def change
    create_table :grimos do |t|
      t.string :title
      t.string :permalink, null: false, unique: true
      t.references :item, null: false, foreign_key: true
      t.text :short_description
      t.text :long_description
      t.text :entry_requisites

      t.timestamps
    end

    add_index :grimos, :permalink, unique: true
  end
end
