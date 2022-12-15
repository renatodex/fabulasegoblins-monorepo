class CreateSpecieSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :specie_spells do |t|
      t.references :specie, null: false, foreign_key: true
      t.references :spell, null: false, foreign_key: true

      t.timestamps
    end
  end
end
