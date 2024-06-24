class CreateSpecies < ActiveRecord::Migration[7.0]
  def change
    create_table :species do |t|
      t.string :title
      t.text :short_description
      t.text :long_description
      t.string :permalink
      t.text :book_url
      t.boolean :playable
      t.integer :extra_attribute_points, default: 0
      t.timestamps
    end
  end
end
