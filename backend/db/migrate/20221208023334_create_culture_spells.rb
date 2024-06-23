class CreateCultureSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :culture_spells do |t|
      t.references :culture, null: false, foreign_key: true
      t.references :spell, null: false, foreign_key: true

      t.timestamps
    end
  end
end
