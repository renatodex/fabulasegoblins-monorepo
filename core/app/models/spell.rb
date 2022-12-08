# == Schema Information
#
# Table name: spells
#
#  id                   :bigint           not null, primary key
#  title                :string
#  external_id          :string
#  permalink            :string
#  tier                 :integer
#  ultimate             :boolean
#  sacrifice            :boolean
#  icon                 :string
#  short_description    :text
#  long_description     :text
#  magic_cost_number    :integer
#  magic_cost           :string
#  duration_time_number :integer
#  duration_time        :string
#  attack_logic_id      :bigint           not null
#  action_type_id       :bigint           not null
#  cast_distance        :string
#  cast_distance_number :integer
#  range_amount         :string
#  range_type_id        :bigint           not null
#  element_id           :bigint           not null
#  tags                 :string
#  book_url             :text
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class Spell < ApplicationRecord
  belongs_to :attack_logic
  belongs_to :action_type
  belongs_to :range_type
  belongs_to :element
end
