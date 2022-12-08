# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string
#  encrypted_password     :string           default(""), not null
#  name                   :string
#  newsletter_optin       :boolean
#  nickname               :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :nickname,
    uniqueness: { case_sensitive: false },
    presence: true,
    allow_blank: false,
    format: { with: /\A[a-zA-Z0-9]+\z/ }

  def generate_jwt
  JWT.encode({ id: id,
              exp: 60.days.from_now.to_i },
              Rails.application.secrets.secret_key_base)
  end
end
