json.array!(@resources) do |resource|
  json.partial! 'api/spells/spell', resource: resource
end
