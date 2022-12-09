json.(user, :id, :email, :created_at, :updated_at)
json.token user.generate_jwt