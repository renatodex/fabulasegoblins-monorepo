class AddAvatarToCharacters < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :avatar, :string
  end
end
