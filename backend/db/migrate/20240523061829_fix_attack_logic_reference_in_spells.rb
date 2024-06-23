class FixAttackLogicReferenceInSpells < ActiveRecord::Migration[7.0]
  def change
    # Remove the existing foreign key and column
    remove_foreign_key :spells, column: :attack_logic_id
    remove_column :spells, :attack_logic_id

    # Add the new column with the correct foreign key reference
    add_reference :spells, :attack_logic, foreign_key: true
  end
end
