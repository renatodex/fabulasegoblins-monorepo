json.array!(@resources) do |resource|
  json.partial! 'api/items/item', resource: resource
end
