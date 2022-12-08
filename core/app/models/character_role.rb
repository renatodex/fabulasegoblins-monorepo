# == Schema Information
#
# Table name: character_roles
#
#  id                 :bigint           not null, primary key
#  title              :string
#  permalink          :string
#  description        :text
#  base_hp            :integer
#  base_mp            :integer
#  base_movement      :integer
#  weapon_proficience :string
#  hp_per_level       :text             default([]), is an Array
#  mp_per_level       :text             default([]), is an Array
#  book_url           :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class CharacterRole < ApplicationRecord
end
