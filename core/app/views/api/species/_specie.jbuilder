json.id resource.id
json.title resource.title
json.permalink resource.permalink
json.short_description resource.short_description
json.long_description resource.long_description
json.book_url resource.book_url
json.playable resource.playable
json.spells(resource.spells) do |spell|
  json.partial! 'api/spells/spell', resource: spell
end
