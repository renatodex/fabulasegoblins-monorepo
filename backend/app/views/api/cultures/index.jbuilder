json.array!(@resources) do |resource|
  json.partial! 'api/cultures/culture', resource: resource
end
