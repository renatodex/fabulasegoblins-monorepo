# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  name                   :string
#  email                  :string
#  nickname               :string
#  newsletter_optin       :boolean
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
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
