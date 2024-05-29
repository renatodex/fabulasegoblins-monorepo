class CreateSpellOwners < ActiveRecord::Migration[7.0]
  def change
    create_table :spell_owners do |t|
      t.references :spell, null: false, foreign_key: true
      t.references :spell_owner, polymorphic: true, null: false
      t.timestamps
    end

    add_index :spell_owners, [:spell_owner_type, :spell_owner_id]
  end
end
