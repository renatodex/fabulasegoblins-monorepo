class AddCommonStarterWeaponToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :common_starter_weapon, :boolean
  end
end
