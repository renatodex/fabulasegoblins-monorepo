class CreateProficiencies < ActiveRecord::Migration[7.0]
  def change
    create_table :proficiencies do |t|
      t.references :sheet_attribute, null: false, foreign_key: true
      t.references :proficiencer, polymorphic: true, null: false

      t.timestamps
    end

    add_index :proficiencies, [:sheet_attribute_id, :proficiencer_id, :proficiencer_type], unique: true, name: 'index_proficiencies_on_attribute_and_proficiencer'
  end
end
