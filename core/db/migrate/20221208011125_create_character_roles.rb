class CreateCharacterRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :character_roles do |t|
      t.string :title
      t.string :permalink
      t.text :short_description
      t.text :long_description
      t.integer :base_hp
      t.integer :base_mp
      t.integer :base_movement
      t.string :weapon_proficience
      t.integer :hp_per_level, array: true, default: []
      t.integer :mp_per_level, array: true, default: []
      t.text :book_url

      t.timestamps
    end
  end
end
