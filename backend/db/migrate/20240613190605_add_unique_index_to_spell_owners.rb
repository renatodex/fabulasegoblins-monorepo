class AddUniqueIndexToSpellOwners < ActiveRecord::Migration[7.0]
  def change
    add_index :spell_owners, [:spell_id, :spell_owner_type, :spell_owner_id], unique: true, name: 'index_spell_owners_on_spell_id_and_owner_type_and_owner_id'
  end
end
