json.(user, :id, :email, :nickname, :created_at, :updated_at)
json.token user.generate_jwt