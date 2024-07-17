json.id resource.id
json.title resource.title
json.permalink resource.permalink
json.short_description resource.short_description
json.long_description resource.long_description
json.micro_description resource.micro_description
json.color resource.color
json.base_hp resource.base_hp
json.base_mp resource.base_mp
json.base_movement resource.base_movement
json.weapon_proficience resource.weapon_proficience
json.hp_per_level resource.hp_per_level
json.mp_per_level resource.mp_per_level
json.book_url resource.book_url
json.proficiencies(resource.proficiencies) do |proficiency|
  json.partial! 'api/proficiencies/proficiency', proficiency: proficiency
end
json.spells(resource.spells) do |spell|
  json.partial! 'api/spells/spell', resource: spell
end
