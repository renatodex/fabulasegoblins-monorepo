class CreateItemSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :item_spells do |t|
      t.references :item, null: false, foreign_key: true
      t.references :spell, null: false, foreign_key: true

      t.timestamps
    end
  end
end
