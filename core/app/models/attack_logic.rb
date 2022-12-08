# == Schema Information
#
# Table name: attack_logics
#
#  id                :bigint           not null, primary key
#  title             :string
#  short_description :text
#  long_description  :text
#  permalink         :string
#  book_url          :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class AttackLogic < ApplicationRecord
end
