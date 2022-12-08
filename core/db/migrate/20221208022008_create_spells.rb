class CreateSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :spells do |t|
      t.string :title
      t.string :external_id
      t.string :permalink
      t.integer :tier
      t.boolean :ultimate
      t.boolean :sacrifice
      t.string :icon
      t.text :short_description
      t.text :long_description
      t.integer :magic_cost_number
      t.string :magic_cost
      t.integer :duration_time_number
      t.string :duration_time
      t.references :attack_logic, null: false, foreign_key: true
      t.references :action_type, null: false, foreign_key: true
      t.string :cast_distance
      t.integer :cast_distance_number
      t.string :range_amount
      t.references :range_type, null: false, foreign_key: true
      t.references :element, null: false, foreign_key: true
      t.string :tags
      t.text :book_url

      t.timestamps
    end
  end
end
