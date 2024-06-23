json.array!(@resources) do |resource|
  json.partial! 'api/character_roles/character_role', resource: resource
end
