json.array!(@resources) do |resource|
  json.partial! 'api/species/specie', resource: resource
end
