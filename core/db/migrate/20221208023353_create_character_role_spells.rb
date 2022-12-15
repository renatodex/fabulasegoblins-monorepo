class CreateCharacterRoleSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :character_role_spells do |t|
      t.references :character_role, null: false, foreign_key: true
      t.references :spell, null: false, foreign_key: true

      t.timestamps
    end
  end
end
