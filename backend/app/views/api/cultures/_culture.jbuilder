json.id resource.id
json.bonuses resource.bonuses
json.book_url resource.book_url
json.clothes_description resource.clothes_description
json.common_divinities resource.common_divinities
json.key_values resource.key_values
json.long_description resource.long_description
json.permalink resource.permalink
json.short_description resource.short_description
json.micro_description resource.micro_description
json.color resource.color
json.title resource.title
json.spells(resource.spells) do |spell|
  json.partial! 'api/spells/spell', resource: spell
end
