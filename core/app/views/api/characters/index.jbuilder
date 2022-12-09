json.array!(@characters) do |character|
  json.partial! 'api/characters/character', character: character
end