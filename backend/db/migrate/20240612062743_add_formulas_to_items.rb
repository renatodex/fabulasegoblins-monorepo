class AddFormulasToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :physical_formula, :text
    add_column :items, :magical_formula, :text
  end
end
