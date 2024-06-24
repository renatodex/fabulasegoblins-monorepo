class AddIconToSheetAttributes < ActiveRecord::Migration[7.0]
  def change
    add_column :sheet_attributes, :icon, :text
  end
end
