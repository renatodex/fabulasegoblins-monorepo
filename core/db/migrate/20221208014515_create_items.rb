class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :title
      t.string :permalink
      t.text :short_description
      t.text :long_description
      t.text :formula
      t.references :item_type, null: false, foreign_key: true
      t.references :damage_type, foreign_key: true
      t.references :sheet_attribute, foreign_key: true
      t.string :bonus_physical_attack
      t.string :bonus_magic_attack
      t.string :bonus_physical_defense
      t.string :bonus_magical_defense
      t.integer :durability
      t.integer :sell_price
      t.integer :buy_price
      t.integer :slots_used, default: 1
      t.text :book_url

      t.timestamps
    end
  end
end
