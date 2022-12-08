# == Schema Information
#
# Table name: characters
#
#  id                     :bigint           not null, primary key
#  title                  :string
#  user_id                :bigint           not null
#  code                   :string
#  short_description      :text
#  long_description       :text
#  specie_id              :bigint           not null
#  character_role_id      :bigint           not null
#  culture_id             :bigint           not null
#  level                  :integer          default(1)
#  temirs                 :integer          default(0)
#  max_temirs             :integer          default(200)
#  inventory_slots        :integer          default(6)
#  base_strength          :integer          default(0)
#  base_resilience        :integer          default(0)
#  base_agility           :integer          default(0)
#  base_magic_elo         :integer          default(0)
#  base_spirit            :integer          default(0)
#  base_intelect          :integer          default(0)
#  base_destiny           :integer          default(0)
#  base_survival          :integer          default(0)
#  base_influence         :integer          default(0)
#  hp_points              :integer          default(0)
#  max_hp_points          :integer          default(0)
#  mp_points              :integer          default(0)
#  max_mp_points          :integer          default(0)
#  extra_hp_points        :integer          default(0)
#  extra_mp_points        :integer          default(0)
#  physical_defense       :integer          default(0)
#  extra_physical_defense :integer          default(0)
#  physical_attack        :integer          default(0)
#  extra_physical_attack  :integer          default(0)
#  magic_defense          :integer          default(0)
#  extra_magic_defense    :integer          default(0)
#  magic_attack           :integer          default(0)
#  extra_magic_attack     :integer          default(0)
#  main_attack            :integer          default(0)
#  extra_main_attack      :integer          default(0)
#  secondary_attack       :integer          default(0)
#  extra_secondary_attack :integer          default(0)
#  movement               :integer          default(0)
#  extra_movement         :integer          default(0)
#  initiative             :integer          default(0)
#  extra_initiative       :integer          default(0)
#  background             :text             default("0")
#  traumas                :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
class Character < ApplicationRecord
  belongs_to :user
  belongs_to :specie
  belongs_to :character_role
  belongs_to :culture
end
