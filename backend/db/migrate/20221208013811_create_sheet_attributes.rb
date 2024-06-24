class CreateSheetAttributes < ActiveRecord::Migration[7.0]
  def change
    create_table :sheet_attributes do |t|
      t.string :title
      t.text :short_description
      t.text :long_description
      t.string :permalink
      t.text :book_url

      t.timestamps
    end
  end
end