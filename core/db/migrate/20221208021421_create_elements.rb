class CreateElements < ActiveRecord::Migration[7.0]
  def change
    create_table :elements do |t|
      t.string :title
      t.text :short_description
      t.text :long_description
      t.string :permalink
      t.references :weak_to, index: true, foreign_key: { to_table: :elements }
      t.references :resistent_to, index: true, foreign_key: { to_table: :elements }
      t.references :negative_effect, null: false, foreign_key: true
      t.text :book_url

      t.timestamps
    end
  end
end
