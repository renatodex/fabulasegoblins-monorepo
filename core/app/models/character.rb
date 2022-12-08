class Character < ApplicationRecord
  belongs_to :user
  belongs_to :specie
  belongs_to :character_role
  belongs_to :culture
end
